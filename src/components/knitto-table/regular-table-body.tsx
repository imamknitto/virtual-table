import { Fragment } from 'react/jsx-runtime';
import { memo, type ReactNode } from 'react';
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
  useToggleExpandRow,
  useToggleRowSelection,
} from './context/selection-context';
import { useExpandedContent, useUseDynamicRowHeight } from './context/ui-context';

interface IRegularTableBody<TData> {
  rowKey: keyof TData | ((data: TData, index: number) => string);
  rowHeight: number;
  onClickRowToParent?: (item: TData, rowIndex: number, columnIndex: number) => void;
  onDoubleClickRowToParent?: (item: TData, rowIndex: number, columnIndex: number) => void;
}

function RegularTableBody<TData>({
  rowKey,
  rowHeight,
  onClickRowToParent,
  onDoubleClickRowToParent,
}: IRegularTableBody<TData>) {
  const flattenColumnsData = useFlattenColumns();
  const filteredData = useFilteredData() as TData[];

  const selectAll = useSelectAll();
  const onClickRow = useOnClickRow();
  const selectedRowKey = useSelectedRowKey();
  const selectedRowKeys = useSelectedRowKeys();
  const deselectedRowKeys = useDeselectedRowKeys();
  const toggleRowSelection = useToggleRowSelection();
  const toggleExpandRow = useToggleExpandRow();
  const expandedRowKeys = useExpandedRowKeys();
  const expandedContent = useExpandedContent();
  const useDynamicRowHeight = useUseDynamicRowHeight();

  // NOTE: Ambil semua leaf columns dari flattened columns data (handle grouped headers)
  const flattenedColumns = flattenColumnsData.map((item) => item.col);

  // NOTE: Hitung rowspan untuk kolom yang punya flag enableRowSpan
  // Return Map dengan info cell mana yang harus di-render dan cell mana yang di-skip (merged)
  const rowSpanMap = useRowSpanCalculator(filteredData, flattenedColumns);

  const getRowKey = (item: TData, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(item, index);
    }
    return String(item[rowKey]);
  };

  const handleClickRow = (item: TData, rowIndex: number, columnIndex: number) => {
    const key = getRowKey(item, rowIndex);
    onClickRow?.(key);
    onClickRowToParent?.(item, rowIndex, columnIndex);
  };

  const handleDoubleClickRow = (item: TData, rowIndex: number, columnIndex: number) => {
    onDoubleClickRowToParent?.(item, rowIndex, columnIndex);
  };

  const handleCheckboxChange = (item: TData, rowIndex: number) => {
    const key = getRowKey(item, rowIndex);
    toggleRowSelection(key);
  };

  const handleExpandToggle = (item: TData, rowIndex: number) => {
    const key = getRowKey(item, rowIndex);
    toggleExpandRow(key);
  };

  const renderCell = (item: TData, column: IHeader<TData>, rowIndex: number, columnIndex: number) => {
    const key = getRowKey(item, rowIndex);
    const cellKey = `${String(column.key)}-${rowIndex}`;
    const isCheckboxColumn = column.key === 'row-selection';
    const isExpandColumn = column.key === 'expand';
    const isRowChecked = selectAll ? !deselectedRowKeys.has(key) : selectedRowKeys.has(key);
    const isRowExpanded = expandedRowKeys.has(key);
    const isRowHighlighted = key === String(selectedRowKey);
    const isLastColumn = columnIndex === flattenedColumns.length - 1;

    // NOTE: Cek data rowspan untuk cell ini
    const rowSpanData = rowSpanMap.get(cellKey);

    if (rowSpanData && !rowSpanData.shouldRender) {
      // NOTE: Skip rendering karena cell ini sudah di-merge dengan cell di row atasnya
      return null;
    }

    // NOTE: Untuk cell yang punya rowspan, cek apakah salah satu row dalam span range sedang selected
    // Kalau iya, cell ini harus ikut di-highlight
    let isCellHighlighted = isRowHighlighted;

    if (rowSpanData && rowSpanData.rowSpan > 1) {
      // Loop through semua row dalam span range
      for (let i = rowSpanData.spanStartRow; i <= rowSpanData.spanEndRow; i++) {
        const rowKey = getRowKey(filteredData[i], i);
        if (rowKey === String(selectedRowKey)) {
          isCellHighlighted = true;
          break;
        }
      }
    }

    let cellContent;

    if (isCheckboxColumn) {
      cellContent = (
        <div onClick={() => handleCheckboxChange(item, rowIndex)}>
          <RowCheckbox checked={isRowChecked} />
        </div>
      );
    } else if (isExpandColumn) {
      cellContent = (
        <div onClick={() => handleExpandToggle(item, rowIndex)}>
          {column.renderExpandToggle?.(item, isRowExpanded) || <RowExpand isExpanded={isRowExpanded} />}
        </div>
      );
    } else if (column.renderCell) {
      cellContent = column.renderCell(item);
    } else {
      cellContent = String(item[column.key as keyof TData] || '');
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
        data-has-rowspan={hasRowSpan || undefined} // NOTE: Data attribute untuk tracking rowspan cells
        data-rowspan-start={rowSpanData?.spanStartRow}
        data-rowspan-end={rowSpanData?.spanEndRow}
        className={clsx(useDynamicRowHeight ? 'break-words' : 'truncate', {
          'border-r': !isLastColumn,
          // NOTE: Pakai isCellHighlighted (bukan isRowHighlighted) supaya rowspan cells ikut highlight
          // Background color untuk selected state
          'bg-[#ECEEFF] dark:bg-blue-900': isCellHighlighted,
          // NOTE: Border visual feedback untuk rowspan cells yang highlighted
          'transition-colors duration-150': hasRowSpan,
        })}
      >
        {cellContent}
      </NativeTableCell>
    );
  };

  return (
    <tbody>
      {filteredData.map((item, rowIndex) => {
        const key = getRowKey(item, rowIndex);
        const isRowExpanded = expandedRowKeys.has(key);
        const isRowSelected = key === String(selectedRowKey);

        return (
          <Fragment key={'regular-table-row-' + key}>
            <tr
              data-row-index={rowIndex}
              className={clsx('hover:bg-[#ECEEFF] dark:hover:bg-[#2F3574] transition-colors duration-150', {
                // NOTE: Row yang selected tanpa ada rowspan cells
                'bg-[#ECEEFF]/50 dark:bg-blue-900/50': isRowSelected,
              })}
            >
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
