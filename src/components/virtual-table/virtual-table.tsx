import { useMemo, useRef, useEffect, forwardRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import clsx from 'clsx';

import { useScrollBottomDetection } from './hooks';
import { DEFAULT_SIZE, type IAdjustedHeader, type IVirtualTable } from './lib';
import { HeaderContextProvider } from './context/header-context';
import { VirtualizerContextProvider } from './context/virtualizer-context';
import { SelectionContextProvider } from './context/selection-context';
import EmptyDataIndicator from './components/empty-data-indicator';
import { FilterContextProvider } from './context/filter-context';
import LoadingIndicator from './components/loading-indicator';
import VirtualTableHeader from './virtual-table-header';
import VirtualTableFooter from './virtual-table-footer';
import UIContextProvider from './context/ui-context';
import VirtualTableBody from './virtual-table-body';
import './lib/style.css';

function VirtualTableInner<TData>(virtualTableProps: IVirtualTable<TData>, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    rowKey,
    data,
    headers,
    headerMode = 'double',
    rowHeight = DEFAULT_SIZE.ROW_HEIGHT,
    headerHeight = DEFAULT_SIZE.HEADER_HEIGTH,
    filterHeight = DEFAULT_SIZE.FILTER_HEIGHT,
    footerHeight = DEFAULT_SIZE.FOOTER_HEIGHT,
    isLoading = false,
    isResetFilter = false,
    useFooter = false,
    useAutoSizer = true,
    useSessionFilter,
    useServerFilter = { sort: false, search: false, selection: false, advance: false },
    enableColumnVirtualization = true,
    classNameOuterTable,
    classNameCell,
    onClickRow,
    onDoubleClickRow,
    onRightClickRow,
    onChangeCheckboxRowSelection,
    onRenderExpandedContent,
    onChangeFilter,
    onScroll,
    onScrollTouchBottom,
  } = virtualTableProps;

  // Ref lokal untuk elemen scrollable
  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  // Attach ke ref dari forwardRef jika ada
  useEffect(() => {
    if (!scrollElementRef.current) return;

    if (typeof ref === 'function') {
      ref(scrollElementRef.current);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = scrollElementRef.current;
    }
  }, [ref, scrollElementRef.current]);

  useScrollBottomDetection(scrollElementRef, {
    threshold: 100, // Trigger when 100px from bottom
    throttleMs: 100, // Throttle to 100ms for performance
    onScrollTouchBottom: onScrollTouchBottom || (() => {}),
  });

  const modifiedHeaders = useMemo(() => {
    return headers.map((header) => ({
      ...header,
      visible: true,
      width: header.width || DEFAULT_SIZE.COLUMN_WIDTH,
    }));
  }, [headers]);

  const renderTableContent = (width?: number, height?: number) => (
    <HeaderContextProvider initialColumns={modifiedHeaders as IAdjustedHeader[]}>
      <FilterContextProvider
        dataSource={data}
        useServerFilter={useServerFilter}
        onChangeFilter={onChangeFilter}
        isResetFilter={isResetFilter}
        useSessionFilter={useSessionFilter}
      >
        <VirtualizerContextProvider 
          rowKey={rowKey} 
          scrollElementRef={scrollElementRef}
          enableColumnVirtualization={enableColumnVirtualization}
        >
          <SelectionContextProvider onChangeCheckboxRowSelection={onChangeCheckboxRowSelection}>
            <UIContextProvider
              filterHeight={filterHeight}
              useFooter={useFooter}
              expandedContent={(data) => onRenderExpandedContent?.(data as TData)}
              headerMode={headerMode}
              headerHeight={headerHeight}
              classNameCell={classNameCell}
            >
              <div
                ref={scrollElementRef}
                data-table-container
                className={clsx(
                  'w-full h-full overflow-auto relative border border-[#8E8F93]',
                  isLoading && 'pointer-events-none',
                  classNameOuterTable
                )}
                // style={useAutoSizer && width && height ? { width, height } : undefined}
                style={{
                  ...(useAutoSizer && width && height ? { width, height } : {}),
                  scrollbarGutter: 'stable',
                  overflowAnchor: 'none'
                }}
                onScroll={(e) => onScroll?.(e.currentTarget.scrollTop, e.currentTarget.scrollLeft)}
              >
                <VirtualTableHeader />

                <VirtualTableBody
                  headerHeight={headerHeight}
                  footerHeight={footerHeight}
                  filterHeight={filterHeight}
                  rowHeight={rowHeight}
                  headerMode={headerMode}
                  onClickRowToParent={onClickRow}
                  onDoubleClickRowToParent={onDoubleClickRow}
                  onRightClickRowToParent={onRightClickRow}
                />

                {useFooter && <VirtualTableFooter footerHeight={footerHeight} />}
                {!isLoading && <EmptyDataIndicator />}
              </div>
            </UIContextProvider>
          </SelectionContextProvider>
        </VirtualizerContextProvider>
      </FilterContextProvider>
    </HeaderContextProvider>
  );

  if (useAutoSizer) {
    return (
      <div className="w-full h-full relative">
        <AutoSizer>{({ width, height }) => renderTableContent(width, height)}</AutoSizer>

        {isLoading && <LoadingIndicator />}
      </div>
    );
  }

  return renderTableContent();
}

const VirtualTable = forwardRef(VirtualTableInner) as <TData>(
  props: IVirtualTable<TData> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof VirtualTableInner>;

export default VirtualTable;
