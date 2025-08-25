import { forwardRef, memo, useMemo, type ReactNode } from 'react';
import clsx from 'clsx';
import { useVirtualizerContext } from './context/virtualizer-context';
import { useSelectionContext } from './context/selection-context';
import { useHeaderContext } from './context/header-context';
import { RowCheckbox, RowExpand, TableCell } from './components';
import { DEFAULT_SIZE } from './lib';

interface IVirtualTableBody<TData> {
  headerHeight: number;
  headerMode: 'single' | 'double';
  onClickRowToParent?: (item: TData) => void;
  onDoubleClickRowToParent?: (item: TData) => void;
  onRightClickRowToParent?: (item: TData, position: { x: number; y: number }) => void;
}

const VirtualTableBody = forwardRef(
  <TData,>(props: IVirtualTableBody<TData>, ref: React.Ref<HTMLTableSectionElement>) => {
    const {
      headerHeight,
      headerMode,
      onClickRowToParent,
      onDoubleClickRowToParent,
      onRightClickRowToParent,
    } = props;

    const { columns, isFilterVisible } = useHeaderContext();
    const {
      flattenedData,
      rowVirtualizer,
      rowVirtualItems,
      columnVirtualItems,
      expandedRows,
      toggleExpandRow,
    } = useVirtualizerContext();
    const {
      selectAll,
      onClickRow,
      selectedRowKey,
      selectedRowKeys,
      deselectedRowKeys,
      toggleRowSelection,
    } = useSelectionContext();

    // NOTE: Membuat map untuk row key
    const rowMap = useMemo(() => {
      const map = new Map<string | number, TData>();
      flattenedData.forEach((d) => {
        if (d.type === 'row') {
          map.set(String((d as unknown as { key: string }).key), d.item as TData);
        }
      });
      return map;
    }, [flattenedData]);

    // NOTE: Menangani klik pada row
    const handleClickRow = (e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>) => {
      const cell = (e.target as HTMLElement).closest('td');
      const btnExpand = (e.target as HTMLElement).closest('[data-action="expand"]');

      // NOTE: Jika klik pada cell dan bukan pada button expand
      if (cell && !btnExpand) {
        const rowKeyAttr = cell.getAttribute('data-row-key');
        const rowData = rowMap.get(rowKeyAttr || '');

        onClickRow?.(rowKeyAttr);
        onClickRowToParent?.(rowData as TData);
      }

      // NOTE: Jika klik pada button expand
      if (btnExpand) {
        e.preventDefault();
        e.stopPropagation();

        const cell = btnExpand.closest('td');
        if (!cell) return;

        const rowKeyAttr = cell?.getAttribute('data-row-key');
        if (rowKeyAttr) toggleExpandRow(rowKeyAttr);
      }
    };

    // NOTE: Menangani klik double pada row
    const handleDoubleClickRow = (e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>) => {
      const btnExpand = (e.target as HTMLElement).closest('[data-action="expand"]');
      if (btnExpand) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const cell = (e.target as HTMLElement).closest('td');
      if (!cell) return;

      const rowKeyAttr = cell.getAttribute('data-row-key');
      const rowData = rowMap.get(rowKeyAttr || '');
      onDoubleClickRowToParent?.(rowData as TData);
    };

    // NOTE: Menangani klik kanan pada row
    const handleContextMenu = (e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>) => {
      e.preventDefault();
      const cell = (e.target as HTMLElement).closest('td');
      if (!cell) return;

      const rowKeyAttr = cell.getAttribute('data-row-key');
      const rowData = rowMap.get(rowKeyAttr || '');
      onClickRow?.(rowKeyAttr);
      onRightClickRowToParent?.(rowData as TData, { x: e.clientX, y: e.clientY });
    };

    // NOTE: Menangani perubahan pada checkbox selection
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLTableSectionElement>): void => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCheckbox = (target as HTMLInputElement).type === 'checkbox';

      if (isCheckbox) {
        const cell = target.closest('td');
        if (!cell) return;

        const rowKeyAttr = cell.getAttribute('data-row-key');
        if (rowKeyAttr) toggleRowSelection(rowKeyAttr);
        return;
      }
    };

    const isSingleHeader = headerMode === 'single';
    const filterHeight = isFilterVisible ? DEFAULT_SIZE.FILTER_HEIGHT : 0;
    const calcTopPosisition = isSingleHeader ? headerHeight : headerHeight + filterHeight;

    return (
      <tbody
        ref={ref}
        onClick={handleClickRow}
        onDoubleClick={handleDoubleClickRow}
        onContextMenu={handleContextMenu}
        onChange={handleCheckboxChange}
        style={{
          position: 'relative',
          top: calcTopPosisition,
          height: rowVirtualizer?.getTotalSize(),
        }}
      >
        {rowVirtualItems.map((row) => {
          const rowType = flattenedData[row.index].type as 'row' | 'expanded';
          const rowItem = flattenedData[row.index];
          const rowData = rowItem.item as TData;

          if (rowType === 'expanded') {
            return (
              <tr
                key={row.key + 'expanded'}
                style={{
                  position: 'absolute',
                  height: row.size,
                  transform: `translateY(${row.start}px)`,
                }}
              >
                <td>
                  <div className='w-[500px] h-[500px] bg-green-50'>EXPANDE</div>
                </td>
              </tr>
            );
          }

          return (
            <tr
              key={row.key + 'row'}
              style={{
                position: 'absolute',
                height: row.size,
                transform: `translateY(${row.start}px)`,
              }}
            >
              {columnVirtualItems.map((column) => {
                const columnKey = columns[column.index].key as string;
                const resolvedRowKey = String((rowItem as unknown as { key: string }).key);

                const isRowHighlighted = resolvedRowKey === String(selectedRowKey);
                const isVisible = columns[column.index].visible;
                const isCheckboxColumn = columns[column.index].key === 'row-selection';
                const isExpandColumn = columns[column.index].key === 'expand';
                const isRowChecked = selectAll
                  ? !deselectedRowKeys.has(resolvedRowKey)
                  : selectedRowKeys.has(resolvedRowKey);
                const isRowExpanded = expandedRows.has(resolvedRowKey);

                const cellValue = String(rowData[columnKey as keyof typeof rowData]);

                return (
                  <TableCell
                    key={'table-cell-' + column.key}
                    columnWidth={column.size}
                    leftPosition={column.start}
                    columnHeight={row.size}
                    data-row-key={resolvedRowKey}
                    data-col-key={columnKey}
                    className={clsx('table-cell', {
                      'bg-[#F6F6FF]': isRowHighlighted,
                      '!border-b !border-l !border-t !border-y-[#2F3574] nth-[1]:border-l-[#2F3574] nth-last-[1]:border-r-[#2F3574]':
                        isRowHighlighted,
                      '!hidden': !isVisible,
                    })}
                  >
                    {!isCheckboxColumn && !isExpandColumn && cellValue}
                    {isCheckboxColumn && <RowCheckbox checked={isRowChecked} />}
                    {isExpandColumn && <RowExpand isExpanded={isRowExpanded} />}
                  </TableCell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  },
);

export default memo(VirtualTableBody) as <TData>(props: IVirtualTableBody<TData>) => ReactNode;
