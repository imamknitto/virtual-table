import { forwardRef, memo, useMemo, type ReactNode } from 'react';
import clsx from 'clsx';
import { useVirtualizerContext } from './context/virtualizer-context';
import { useSelectionContext } from './context/selection-context';
import { useHeaderContext } from './context/header-context';
import { useUIContext } from './context/ui-context';
import { RowCheckbox, RowExpand, TableCell, RowExpandedContent } from './components';

interface IVirtualTableBody<TData> {
  headerHeight: number;
  footerHeight: number;
  filterHeight: number;
  rowHeight: number;
  headerMode: 'single' | 'double';
  onClickRowToParent?: (item: TData) => void;
  onDoubleClickRowToParent?: (item: TData) => void;
  onRightClickRowToParent?: (item: TData, position: { x: number; y: number }) => void;
}

const VirtualTableBody = forwardRef(
  <TData,>(props: IVirtualTableBody<TData>, ref: React.Ref<HTMLDivElement>) => {
    const {
      headerHeight,
      footerHeight,
      filterHeight,
      rowHeight,
      headerMode,
      onClickRowToParent,
      onDoubleClickRowToParent,
      onRightClickRowToParent,
    } = props;

    const {
      columns,
      freezeLeftColumns,
      freezeRightColumns,
      freezeRightColumnsWidth,
      freezeLeftColumnsWidth,
      isFilterVisible,
    } = useHeaderContext();
    const { flattenedData, rowVirtualizer, rowVirtualItems, columnVirtualItems, containerWidth } =
      useVirtualizerContext();
    const {
      selectAll,
      onClickRow,
      selectedRowKey,
      selectedRowKeys,
      deselectedRowKeys,
      toggleRowSelection,
      toggleExpandRow,
      expandedRowKeys,
    } = useSelectionContext();
    const {
      useFooter,
      expandedContent,
      calcTotalTableWidth,
      freezeColLeftPositions,
      freezeColRightPositions,
    } = useUIContext();

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
    const handleClickRow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const cell = (e.target as HTMLElement).closest('div.table-cell');
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

        const cell = btnExpand.closest('div.table-cell');
        if (!cell) return;

        const rowKeyAttr = cell?.getAttribute('data-row-key');
        if (rowKeyAttr) toggleExpandRow(rowKeyAttr);
      }
    };

    // NOTE: Menangani klik double pada row
    const handleDoubleClickRow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const btnExpand = (e.target as HTMLElement).closest('[data-action="expand"]');
      if (btnExpand) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const cell = (e.target as HTMLElement).closest('div');
      if (!cell) return;

      const rowKeyAttr = cell.getAttribute('data-row-key');
      const rowData = rowMap.get(rowKeyAttr || '');
      onDoubleClickRowToParent?.(rowData as TData);
    };

    // NOTE: Menangani klik kanan pada row
    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      const cell = (e.target as HTMLElement).closest('div');
      if (!cell) return;

      const rowKeyAttr = cell.getAttribute('data-row-key');
      const rowData = rowMap.get(rowKeyAttr || '');
      onClickRow?.(rowKeyAttr);
      onRightClickRowToParent?.(rowData as TData, { x: e.clientX, y: e.clientY });
    };

    // NOTE: Menangani perubahan pada checkbox selection
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLDivElement>): void => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCheckbox = (target as HTMLInputElement).type === 'checkbox';

      if (isCheckbox) {
        const cell = target.closest('div.table-cell');

        if (!cell) return;

        const rowKeyAttr = cell.getAttribute('data-row-key');
        if (rowKeyAttr) toggleRowSelection(rowKeyAttr);
        return;
      }
    };

    const isSingleHeader = headerMode === 'single';
    const calcFilterHeight = isFilterVisible ? filterHeight : 0;
    const calcTopPosisition = isSingleHeader ? headerHeight : headerHeight + calcFilterHeight;
    const calcBodyHeight = (rowVirtualizer?.getTotalSize() ?? 0) + (useFooter ? footerHeight : 0);

    const renderFreezeLeftColumns = (
      rowKey: string,
      rowData: TData,
      isRowChecked: boolean,
      isRowExpanded: boolean,
    ) => {
      return freezeLeftColumns.map((column, freezeLeftIdx) => {
        const isRowHighlighted = rowKey === String(selectedRowKey);
        const isVisible = column.visible;
        const isCheckboxColumn = column.key === 'row-selection';
        const isExpandColumn = column.key === 'expand';

        const cellValue = String(rowData[column.key as keyof typeof rowData]);

        return (
          <TableCell
            key={'table-cell-freeze-left-' + column.key}
            data-row-key={rowKey}
            data-col-key={column.key}
            className={clsx('table-cell bg-white truncate', {
              '!bg-[#F6F6FF]': isRowHighlighted,
              '!border-b !border-l !border-t !border-y-[#2F3574] nth-[1]:border-l-[#2F3574]':
                isRowHighlighted,
              '!hidden': !isVisible,
            })}
            style={{
              position: 'absolute',
              minHeight: rowHeight,
              transform: `translateX(${freezeColLeftPositions[freezeLeftIdx]}px)`,
              width: column.width!,
              top: 0,
            }}
          >
            {!isCheckboxColumn && !isExpandColumn && (column?.render?.(rowData) || cellValue)}
            {isCheckboxColumn && <RowCheckbox checked={isRowChecked} />}
            {isExpandColumn && <RowExpand isExpanded={isRowExpanded} />}
          </TableCell>
        );
      });
    };

    const renderFreezeRightColumns = (
      rowKey: string,
      rowData: TData,
      isRowChecked: boolean,
      isRowExpanded: boolean,
    ) => {
      return freezeRightColumns.map((column, freezeRightIdx) => {
        const isRowHighlighted = rowKey === String(selectedRowKey);
        const isVisible = column.visible;
        const isCheckboxColumn = column.key === 'row-selection';
        const isExpandColumn = column.key === 'expand';

        const cellValue = String(rowData[column.key as keyof typeof rowData]);

        return (
          <TableCell
            key={'table-cell-freeze-right-' + column.key}
            data-row-key={rowKey}
            data-col-key={column.key}
            className={clsx('table-cell bg-white nth-[1]:!border-l truncate', {
              '!bg-[#F6F6FF]': isRowHighlighted,
              '!border-b !border-t !border-y-[#2F3574] nth-last-[1]:border-r-[#2F3574]': isRowHighlighted,
              '!hidden': !isVisible,
            })}
            style={{
              position: 'absolute',
              minHeight: rowHeight,
              transform: `translateX(${freezeColRightPositions[freezeRightIdx]}px)`,
              width: column.width!,
              top: 0,
            }}
          >
            {!isCheckboxColumn && !isExpandColumn && (column?.render?.(rowData) || cellValue)}
            {isCheckboxColumn && <RowCheckbox checked={isRowChecked} />}
            {isExpandColumn && <RowExpand isExpanded={isRowExpanded} />}
          </TableCell>
        );
      });
    };

    const renderVirtualizedColumns = (
      rowKey: string,
      rowData: TData,
      isRowChecked: boolean,
      isRowExpanded: boolean,
    ) => {
      return columnVirtualItems.map((column, columnIndex) => {
        const columnKey = columns?.[column.index]?.key as string;

        const isRowHighlighted = rowKey === String(selectedRowKey);
        const isVisible = columns?.[column.index]?.visible;
        const isCheckboxColumn = columnKey === 'row-selection';
        const isExpandColumn = columnKey === 'expand';
        const isFirstIndex = columnIndex === 0;
        const isLastIndex = columnIndex === columnVirtualItems.length - 1;

        const cellValue = String(rowData[columnKey as keyof typeof rowData]);
        const cellRender = columns?.[column.index]?.render;

        return (
          <TableCell
            key={'table-cell-' + column.key}
            data-row-key={rowKey}
            data-col-key={column.key}
            className={clsx('table-cell truncate', {
              'bg-[#F6F6FF]': isRowHighlighted,
              'border-l border-l-[#2F3574]': isRowHighlighted && !freezeLeftColumnsWidth && isFirstIndex,
              'nth-last-[1]:!border-r-[#2F3574]': isRowHighlighted && !freezeRightColumnsWidth,
              '!border-b !border-t !border-y-[#2F3574]': isRowHighlighted,
              '!border-r-transparent': isLastIndex && freezeRightColumnsWidth > 0,
              '!hidden': !isVisible,
            })}
            style={{
              position: 'absolute',
              top: 0,
              minHeight: rowHeight,
              transform: `translateX(${column.start + freezeLeftColumnsWidth}px)`,
              width: column.size,
            }}
          >
            {!isCheckboxColumn && !isExpandColumn && (cellRender?.(rowData) || cellValue)}
            {isCheckboxColumn && <RowCheckbox checked={isRowChecked} />}
            {isExpandColumn && <RowExpand isExpanded={isRowExpanded} />}
          </TableCell>
        );
      });
    };

    return (
      <div
        ref={ref}
        onClick={handleClickRow}
        onDoubleClick={handleDoubleClickRow}
        onContextMenu={handleContextMenu}
        onChange={handleCheckboxChange}
        style={{ position: 'relative', top: calcTopPosisition, height: calcBodyHeight }}
      >
        <div
          className='absolute top-0 left-0 w-full'
          style={{ transform: `translateY(${rowVirtualItems?.[0]?.start || 0}px)` }}
        >
          {rowVirtualItems.map((row) => {
            const rowItem = flattenedData[row.index];
            const rowData = rowItem.item as TData;
            const resolvedRowKey = String((rowItem as unknown as { key: string }).key);

            const isRowExpanded = expandedRowKeys.has(resolvedRowKey);
            const isRowChecked = selectAll
              ? !deselectedRowKeys.has(resolvedRowKey)
              : selectedRowKeys.has(resolvedRowKey);

            return (
              <div key={row.key} data-index={row.index} ref={rowVirtualizer?.measureElement}>
                <div style={{ minHeight: rowHeight, width: calcTotalTableWidth }}>
                  <div className='relative h-full w-full flex'>
                    <div className='sticky left-0 z-20' style={{ width: freezeLeftColumnsWidth }}>
                      {renderFreezeLeftColumns(resolvedRowKey, rowData, isRowChecked, isRowExpanded)}
                    </div>

                    <div className='sticky z-20' style={{ left: containerWidth - freezeRightColumnsWidth }}>
                      {renderFreezeRightColumns(resolvedRowKey, rowData, isRowChecked, isRowExpanded)}
                    </div>

                    {renderVirtualizedColumns(resolvedRowKey, rowData, isRowChecked, isRowExpanded)}
                  </div>
                </div>

                {isRowExpanded && (
                  <RowExpandedContent width={calcTotalTableWidth} emptyPadding={!expandedContent}>
                    {expandedContent?.(rowData) || 'No expanded content available.'}
                  </RowExpandedContent>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

export default memo(VirtualTableBody) as <TData>(props: IVirtualTableBody<TData>) => ReactNode;
