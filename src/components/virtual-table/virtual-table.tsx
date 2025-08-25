import clsx from 'clsx';
import { useMemo, useCallback } from 'react';
import { TableProvider } from './context/table-context';
import './lib/style.css';
import { DEFAULT_SIZE, type IHeader, type IVirtualTable } from './lib';
import { useVirtualTableState } from './hooks/use-virtual-table-state';
import VirtualTableHeaderItem from './virtual-table-header-item';
import VirtualTableCell from './virtual-table-cell';

export default function VirtualTable<TData>(virtualTableProps: IVirtualTable<TData>) {
  const {
    scrollElementRef,
    columnVirtualizer,
    rowVirtualizer,
    flattenedData,
    tableProviderValue,
    handleScroll,
    tableBodyTopPosition,
    regularHeaders,
    stickyHeaders,
    sumHeaderWidth,
    outerTableWidth,
    scrollbarWidth,
    expandedContentHeight,
    renderExpandedRow,
    sumHeaderStickyRightWidth,
  } = useVirtualTableState({ ...virtualTableProps });

  const stickyLeftHeaders = useMemo(() => 
    stickyHeaders.filter((h) => h.sticky === 'left'),
    [stickyHeaders]
  );
  
  const stickyRightHeaders = useMemo(() => 
    stickyHeaders.filter((h) => h.sticky === 'right'),
    [stickyHeaders]
  );

  // Memoize position calculation functions
  const getLeftPosition = useCallback((headers: typeof stickyHeaders, index: number) => {
    return headers
      .slice(0, index)
      .reduce((acc, curr) => acc + (curr.width || DEFAULT_SIZE.COLUMN_WIDTH), 0);
  }, []);

  const getRightPosition = useCallback((key: string | number) => {
    const index = stickyRightHeaders.findIndex((h) => h.key === key);
    return stickyRightHeaders
      .slice(0, index)
      .reduce(
        (acc, curr) => acc + (curr.width || DEFAULT_SIZE.COLUMN_WIDTH),
        outerTableWidth - sumHeaderStickyRightWidth - scrollbarWidth,
      );
  }, [stickyRightHeaders, outerTableWidth, sumHeaderStickyRightWidth, scrollbarWidth]);

  // Memoize table styles
  const tableStyle = useMemo(() => ({ width: sumHeaderWidth }), [sumHeaderWidth]);
  
  const tbodyStyle = useMemo(() => ({
    position: 'relative' as const,
    height: rowVirtualizer.getTotalSize(),
    top: tableBodyTopPosition,
  }), [rowVirtualizer.getTotalSize(), tableBodyTopPosition]);

  // Memoize total sticky width calculation
  const totalStickyWidth = useMemo(() => 
    stickyLeftHeaders.reduce(
      (acc, curr) => acc + (curr.width || DEFAULT_SIZE.COLUMN_WIDTH),
      0,
    ),
    [stickyLeftHeaders]
  );

  return (
    <TableProvider {...tableProviderValue}>
      <div
        ref={scrollElementRef}
        onScroll={handleScroll}
        className={clsx(
          'w-full h-full overflow-auto relative border border-gray-200',
          virtualTableProps.classNameOuterTable,
        )}
      >
        <table style={tableStyle}>
          <thead className='sticky top-0 z-10'>
            <tr style={{ position: 'relative' }}>
              {stickyHeaders.map((header, index) => {
                const leftPosition =
                  header.sticky === 'left'
                    ? getLeftPosition(stickyLeftHeaders, index)
                    : getRightPosition(header.key.toString());

                return (
                  <VirtualTableHeaderItem
                    key={`sticky-${String(header.key)}`}
                    position='sticky'
                    header={header}
                    headerWidth={header.width || DEFAULT_SIZE.COLUMN_WIDTH}
                    leftPosition={leftPosition}
                    headerIndex={index}
                  />
                );
              })}

              {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
                return (
                  <VirtualTableHeaderItem
                    key={virtualColumn.key}
                    position='absolute'
                    headerIndex={virtualColumn.index}
                    header={regularHeaders[virtualColumn.index]}
                    headerWidth={virtualColumn.size}
                    leftPosition={virtualColumn.start + totalStickyWidth}
                  />
                );
              })}
            </tr>
          </thead>

          <tbody style={tbodyStyle}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const { item, type } = flattenedData[virtualRow.index];
              const isExpandRow = type === 'expanded';

              const rowStyle = {
                position: 'absolute' as const,
                height: virtualRow.size,
                transform: `translateY(${virtualRow.start}px)`,
                ...(!isExpandRow && { width: sumHeaderWidth }),
              };

              return (
                <tr
                  key={virtualRow.key}
                  className='group/body-row'
                  style={rowStyle}
                >
                  {!isExpandRow ? (
                    <>
                      {stickyHeaders.map((header, index) => {
                        const leftPosition =
                          header.sticky === 'left'
                            ? getLeftPosition(stickyLeftHeaders, index)
                            : getRightPosition(header.key.toString());

                        return (
                          <VirtualTableCell
                            key={`td-sticky-${index}`}
                            position='sticky'
                            rowData={item}
                            rowIndex={virtualRow.index}
                            columnWidth={header.width || DEFAULT_SIZE.COLUMN_WIDTH}
                            columnHeight={virtualRow.size}
                            leftPosition={leftPosition}
                            header={header as IHeader<TData>}
                            zIndexColumn={1000 - index}
                          />
                        );
                      })}

                      {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
                        return (
                          <VirtualTableCell
                            key={'td-regular' + virtualColumn.key}
                            position='absolute'
                            rowData={item}
                            rowIndex={virtualRow.index}
                            columnWidth={virtualColumn.size}
                            columnHeight={virtualRow.size}
                            leftPosition={virtualColumn.start + totalStickyWidth}
                            header={regularHeaders[virtualColumn.index]}
                            zIndexColumn={800 - virtualColumn.index}
                          />
                        );
                      })}
                    </>
                  ) : (
                    <td
                      colSpan={[...stickyHeaders, ...regularHeaders].length}
                      className='border-b border-gray-200 bg-white'
                    >
                      <div style={{ height: expandedContentHeight, width: sumHeaderWidth }}>
                        {renderExpandedRow?.(item as TData)}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TableProvider>
  );
}
