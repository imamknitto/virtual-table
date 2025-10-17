import { Fragment } from 'react/jsx-runtime';
import { memo, type ReactNode, useMemo, useCallback } from 'react';
import clsx from 'clsx';

import NativeTableCell from './components/native-table-cell';
import { RowCheckbox, RowExpand } from './components';
import type { IHeader } from './lib';
import { useFlattenColumns } from './context/header-context';
import { useFilteredData } from './context/filter-context';
import { useRowSpanCalculator } from './hooks/use-rowspan-calculator';
import {
  useDeselectedRowKeys,
  useExpandedRowKeys,
  useOnClickRow,
  useSelectAll,
  useSelectedRowKey,
  useSelectedRowKeys,
  useSelectedRowWithSpanKeys,
  useToggleExpandRow,
  useToggleRowSelection,
  useSetSelectedRowWithSpanKeys,
} from './context/selection-context';
import { useClassNameCell, useExpandedContent, useUseDynamicRowHeight } from './context/ui-context';

interface IRegularTableBody<TData> {
  rowKey: keyof TData | ((data: TData, index: number) => string);
  rowHeight: number;
  onClickRowToParent?: (item: TData, rowIndex: number, columnIndex: number) => void;
  onDoubleClickRowToParent?: (item: TData, rowIndex: number, columnIndex: number) => void;
  onRightClickRowToParent?: (item: TData, position: { x: number; y: number }) => void;
}

function RegularTableBody<TData>({
  rowKey,
  rowHeight,
  onClickRowToParent,
  onDoubleClickRowToParent,
  onRightClickRowToParent,
}: IRegularTableBody<TData>) {
  const flattenColumnsData = useFlattenColumns();
  const filteredData = useFilteredData() as TData[];

  const selectAll = useSelectAll();
  const onClickRow = useOnClickRow();
  const selectedRowKey = useSelectedRowKey();
  const selectedRowWithSpanKeys = useSelectedRowWithSpanKeys();
  const selectedRowKeys = useSelectedRowKeys();
  const deselectedRowKeys = useDeselectedRowKeys();
  const toggleRowSelection = useToggleRowSelection();
  const toggleExpandRow = useToggleExpandRow();
  const expandedRowKeys = useExpandedRowKeys();
  const expandedContent = useExpandedContent();
  const useDynamicRowHeight = useUseDynamicRowHeight();
  const setSelectedRowWithSpanKeys = useSetSelectedRowWithSpanKeys();
  const classNameCell = useClassNameCell();

  // NOTE: Ambil semua leaf columns dari flattened columns data (handle grouped headers)
  const flattenedColumns = useMemo(() => flattenColumnsData.map((item) => item.col), [flattenColumnsData]);

  // NOTE: Hitung rowspan untuk kolom yang punya flag enableRowSpan
  // Return Map dengan info cell mana yang harus di-render dan cell mana yang di-skip (merged)
  const rowSpanMap = useRowSpanCalculator(filteredData, flattenedColumns);

  const getRowKey = useCallback(
    (item: TData, index: number): string => {
      if (typeof rowKey === 'function') {
        return rowKey(item, index);
      }
      return String(item[rowKey]);
    },
    [rowKey],
  );

  // NOTE: Cache row keys untuk performa yang lebih baik
  const rowKeysMap = useMemo(() => {
    const map = new Map<number, string>();
    filteredData.forEach((item, index) => {
      map.set(index, getRowKey(item, index));
    });
    return map;
  }, [filteredData, getRowKey]);

  // Helper function untuk get cached key
  const getCachedRowKey = useCallback(
    (index: number): string => {
      return rowKeysMap.get(index) || getRowKey(filteredData[index], index);
    },
    [rowKeysMap, filteredData, getRowKey],
  );

  const handleClickRow = useCallback(
    (item: TData, rowIndex: number, columnIndex: number) => {
      const key = getCachedRowKey(rowIndex);

      const column = flattenedColumns[columnIndex] as IHeader<TData>;
      const cellKey = `${String(column.key)}-${rowIndex}`;
      const rowSpanData = rowSpanMap.get(cellKey);

      const keysToAdd: string[] = [];

      // NOTE: Jika cell ini punya rowspan, tambahkan semua row yang di-spannya ke selectedRowWithSpanKeys
      if (rowSpanData && rowSpanData.rowSpan > 1 && rowSpanData.shouldRender) {
        for (let i = rowSpanData.spanStartRow; i <= rowSpanData.spanEndRow; i++) {
          const key = getCachedRowKey(i);
          keysToAdd.push(key);
        }
      } else {
        keysToAdd.push(key);
      }

      if (rowSpanMap.size > 0) {
        setSelectedRowWithSpanKeys(keysToAdd);
        onClickRowToParent?.(item, rowIndex, columnIndex);
      } else {
        onClickRow?.(key);
        onClickRowToParent?.(item, rowIndex, columnIndex);
      }
    },
    [flattenedColumns, rowSpanMap, setSelectedRowWithSpanKeys, onClickRowToParent, onClickRow, getCachedRowKey],
  );

  const handleDoubleClickRow = useCallback(
    (item: TData, rowIndex: number, columnIndex: number) => {
      onDoubleClickRowToParent?.(item, rowIndex, columnIndex);
    },
    [onDoubleClickRowToParent],
  );

  const handleRightClickRow = useCallback(
    (item: TData, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!onRightClickRowToParent) return;

      e.preventDefault();
      onRightClickRowToParent?.(item, { x: e.clientX, y: e.clientY });
    },
    [onRightClickRowToParent],
  );

  const handleCheckboxChange = useCallback(
    (_item: TData, rowIndex: number) => {
      const key = getCachedRowKey(rowIndex);
      toggleRowSelection(key);
    },
    [toggleRowSelection, getCachedRowKey],
  );

  const handleExpandToggle = useCallback(
    (_item: TData, rowIndex: number) => {
      const key = getCachedRowKey(rowIndex);
      toggleExpandRow(key);
    },
    [toggleExpandRow, getCachedRowKey],
  );

  // Helper function untuk cek apakah cell ini harus di-highlight
  const checkCellHighlighting = useCallback(
    (_item: TData, rowIndex: number, cellKey: string) => {
      const key = getCachedRowKey(rowIndex);

      if (rowSpanMap.size === 0) {
        // Tidak ada rowspan, gunakan logika biasa
        return key === selectedRowKey;
      }

      // Ada rowspan, cek apakah row ini ada di selectedRowWithSpanKeys
      if (selectedRowWithSpanKeys.includes(key)) {
        return true;
      }

      // Jika cell ini punya rowspan, cek apakah ada row yang di-spannya terpilih
      const rowSpanData = rowSpanMap.get(cellKey);
      if (rowSpanData && rowSpanData.shouldRender && rowSpanData.rowSpan > 1) {
        for (let i = rowSpanData.spanStartRow; i <= rowSpanData.spanEndRow; i++) {
          const spanRowKey = getCachedRowKey(i);
          if (selectedRowWithSpanKeys.includes(spanRowKey)) {
            return true;
          }
        }
      }

      return false;
    },
    [rowSpanMap, selectedRowKey, selectedRowWithSpanKeys, getCachedRowKey],
  );

  const renderCell = (item: TData, column: IHeader<TData>, rowIndex: number, columnIndex: number) => {
    const key = getCachedRowKey(rowIndex);
    const cellKey = `${String(column.key)}-${rowIndex}`;
    const isCheckboxColumn = column.key === 'row-selection';
    const isExpandColumn = column.key === 'expand';
    const isRowChecked = selectAll ? !deselectedRowKeys.has(key) : selectedRowKeys.has(key);
    const isRowExpanded = expandedRowKeys.has(key);
    const isLastColumn = columnIndex === flattenedColumns.length - 1;
    const customClassNameCell = classNameCell ? classNameCell(item, rowIndex, columnIndex) : '';
    const isFreezeLeft = column.freeze === 'left';
    const isFreezeRight = column.freeze === 'right';

    // NOTE: Cek data rowspan untuk cell ini
    const rowSpanData = rowSpanMap.get(cellKey);

    // NOTE: Skip rendering karena cell ini sudah di-merge dengan cell di row atasnya
    if (rowSpanData && !rowSpanData.shouldRender) return null;

    // Cek apakah cell ini harus di-highlight
    const isCellHighlighted = checkCellHighlighting(item, rowIndex, cellKey);

    // classname
    const classNameCellContent = clsx(useDynamicRowHeight ? 'break-words' : 'truncate', {
      'border-r': !isLastColumn,
      '!border-l': isFreezeRight,
      'bg-white': (isFreezeLeft || isFreezeRight) && !isCellHighlighted,
      'bg-[#ECEEFF] dark:bg-blue-900': isCellHighlighted,
      'group-hover/regular-table-row:bg-[#ECEEFF] dark:group-hover/regular-table-row:bg-blue-900': !rowSpanMap.size,
      'transition-colors duration-150 size-full content-center px-1.5 text-xs border-b border-[#D2D2D4]': true,
      [customClassNameCell]: !!customClassNameCell && !isFreezeLeft && !isFreezeRight,
    });

    let cellContent;

    if (isCheckboxColumn) {
      cellContent = (
        <div className={classNameCellContent} onClick={() => handleCheckboxChange(item, rowIndex)}>
          <RowCheckbox checked={isRowChecked} />
        </div>
      );
    } else if (isExpandColumn) {
      cellContent = (
        <div className={classNameCellContent} onClick={() => handleExpandToggle(item, rowIndex)}>
          {column.renderExpandToggle?.(item, isRowExpanded) || <RowExpand isExpanded={isRowExpanded} />}
        </div>
      );
    } else if (column.renderCell) {
      cellContent = column.renderCell(item);
    } else {
      cellContent = <div className={classNameCellContent}>{String(item[column.key as keyof TData] || '')}</div>;
    }

    // NOTE: Untuk cell dengan rowspan yang highlighted, tambahkan border visual feedback
    const hasRowSpan = rowSpanData && rowSpanData.rowSpan > 1;

    return (
      <NativeTableCell
        key={`regular-table-cell-${key}-${String(column.key)}`}
        columnWidth={column.width || 160}
        columnHeight={rowHeight}
        rowSpan={rowSpanData?.rowSpan || 1} // NOTE: Set rowSpan dari hasil kalkulasi (default: 1)
        onClick={() => !isCheckboxColumn && !isExpandColumn && handleClickRow(item, rowIndex, columnIndex)}
        onDoubleClick={() => !isCheckboxColumn && !isExpandColumn && handleDoubleClickRow(item, rowIndex, columnIndex)}
        onContextMenu={(e) => !isCheckboxColumn && !isExpandColumn && handleRightClickRow(item, e)}
        data-has-rowspan={hasRowSpan || undefined} // NOTE: Data attribute untuk tracking rowspan cells
        data-rowspan-start={rowSpanData?.spanStartRow}
        data-rowspan-end={rowSpanData?.spanEndRow}
        className={clsx({ '!sticky !left-0 z-[2]': isFreezeLeft, '!sticky !right-0 z-[2]': isFreezeRight })}
      >
        {cellContent}
      </NativeTableCell>
    );
  };

  return (
    <tbody>
      {filteredData.map((item, rowIndex) => {
        const key = getCachedRowKey(rowIndex);
        const isRowExpanded = expandedRowKeys.has(key);

        return (
          <Fragment key={'regular-table-row-' + key}>
            <tr data-row-index={rowIndex} className='group/regular-table-row'>
              {flattenedColumns.map((column, columnIndex) =>
                renderCell(item, column as IHeader<TData>, rowIndex, columnIndex),
              )}
            </tr>

            {isRowExpanded && expandedContent && (
              <tr key={`regular-table-row-expanded-${key}`}>
                <td colSpan={flattenedColumns.length} className='p-0'>
                  <div className='border-b border-gray-200 p-2'>{expandedContent(item)}</div>
                </td>
              </tr>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
}

export default memo(RegularTableBody) as <TData>(props: IRegularTableBody<TData>) => ReactNode;
