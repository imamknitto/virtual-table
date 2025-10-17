import { useMemo, useRef, useEffect, forwardRef, type ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';

import RegularTable from './regular-table';
import VirtualTable from './virtual-table';

import { HeaderContextProvider } from './context/header-context';
import { VirtualizerContextProvider } from './context/virtualizer-context';
import { FilterContextProvider } from './context/filter-context';
import { SelectionContextProvider } from './context/selection-context';
import { UIContextProvider } from './context/ui-context';

import { useScrollBottomDetection } from './hooks';
import { DEFAULT_SIZE, type IAdjustedHeader, type IKnittoTable } from './lib';

import './lib/style.css';
import { LoadingIndicator, TableScrollWrapper } from './components';

const KnittoTable = forwardRef(<TData,>(props: IKnittoTable<TData>, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    rowKey,
    data,
    headers,
    headerMode = 'double',
    headerHeight = DEFAULT_SIZE.HEADER_HEIGTH,
    filterHeight = DEFAULT_SIZE.FILTER_HEIGHT,
    isLoading = false,
    isResetFilter = false,
    useFooter = false,
    useAutoSizer = true,
    useDynamicRowHeight = false,
    enableColumnVirtualization = true,
    useRegularTable = false,
    useSessionFilter,
    useServerFilter = { sort: false, search: false, selection: false, advance: false },
    classNameOuterTable,
    classNameCell,
    onChangeCheckboxRowSelection,
    onRenderExpandedContent,
    onChangeFilter,
    onScroll,
    onScrollTouchBottom,
  } = props;

  // Local ref for scrollable element
  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  /**
   * Handle ref forwarding
   * - Jika ref adalah function, maka set ref ke scrollElementRef.current
   * - Jika ref adalah mutable ref object, maka set current ke scrollElementRef.current
   */
  useEffect(() => {
    if (!scrollElementRef.current) return;

    if (typeof ref === 'function') {
      ref(scrollElementRef.current);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = scrollElementRef.current;
    }
  }, [ref, scrollElementRef.current]);

  // Setup scroll bottom detection
  useScrollBottomDetection(scrollElementRef, {
    threshold: 100,
    throttleMs: 100,
    onScrollTouchBottom: onScrollTouchBottom || (() => {}),
  });

  /**
   * Process headers with default values
   * - Set visible to true
   * - Set width to DEFAULT_SIZE.COLUMN_WIDTH
   */
  const modifiedHeaders = useMemo(() => {
    return headers.map((header) => ({
      ...header,
      visible: true,
      width: header.width || DEFAULT_SIZE.COLUMN_WIDTH,
    }));
  }, [headers]);

  /**
   * Render Virtual Table
   * - Menggunakan virtualization untuk performa yang lebih baik
   * - Lebih baik untuk dataset besar atau ketika perlu virtualisasi kolom
   */
  const renderVirtualTable = (width?: number, height?: number) => (
    <VirtualizerContextProvider
      rowKey={rowKey}
      scrollElementRef={scrollElementRef}
      enableColumnVirtualization={enableColumnVirtualization}
    >
      <UIContextProvider
        filterHeight={filterHeight}
        useFooter={useFooter}
        expandedContent={(data) => onRenderExpandedContent?.(data as TData)}
        headerMode={headerMode}
        headerHeight={headerHeight}
        classNameCell={classNameCell}
        useDynamicRowHeight={useDynamicRowHeight}
      >
        <TableScrollWrapper
          ref={scrollElementRef}
          isLoading={isLoading}
          classNameOuterTable={classNameOuterTable || ''}
          useAutoSizer={useAutoSizer}
          width={width}
          height={height}
          onScroll={onScroll || (() => {})}
        >
          <VirtualTable {...props} />
        </TableScrollWrapper>
      </UIContextProvider>
    </VirtualizerContextProvider>
  );

  /**
   * Render Regular Table
   * - Menggunakan native HTML table elements
   * - Tidak menggunakan virtualization
   * - Lebih baik untuk dataset kecil atau ketika perlu standar table semantics
   */
  const renderRegularTable = (width?: number, height?: number) => (
    <UIContextProvider
      filterHeight={filterHeight}
      useFooter={useFooter}
      expandedContent={(data) => onRenderExpandedContent?.(data as TData)}
      headerMode={headerMode}
      headerHeight={headerHeight}
      classNameCell={classNameCell}
      useDynamicRowHeight={useDynamicRowHeight}
    >
      <TableScrollWrapper
        ref={scrollElementRef}
        isLoading={isLoading}
        classNameOuterTable={classNameOuterTable || ''}
        useAutoSizer={useAutoSizer}
        width={width}
        height={height}
        onScroll={onScroll || (() => {})}
      >
        <RegularTable {...props} />
      </TableScrollWrapper>
    </UIContextProvider>
  );

  /**
   * Render Table Content
   * - Cek apakah menggunakan regular table atau virtual table
   */
  const renderTableContent = (width?: number, height?: number) => (
    <HeaderContextProvider initialColumns={modifiedHeaders as IAdjustedHeader[]} useRegularTable={useRegularTable}>
      <FilterContextProvider
        dataSource={data}
        useServerFilter={useServerFilter}
        onChangeFilter={onChangeFilter}
        isResetFilter={isResetFilter}
        useSessionFilter={useSessionFilter}
      >
        <SelectionContextProvider onChangeCheckboxRowSelection={onChangeCheckboxRowSelection}>
          {useRegularTable ? renderRegularTable(width, height) : renderVirtualTable(width, height)}
        </SelectionContextProvider>
      </FilterContextProvider>
    </HeaderContextProvider>
  );

  // Render with AutoSizer
  if (useAutoSizer) {
    return (
      <div className='w-full h-full relative'>
        <AutoSizer>{({ width, height }) => renderTableContent(width, height)}</AutoSizer>
        {isLoading && <LoadingIndicator />}
      </div>
    );
  }

  // Render without AutoSizer
  return renderTableContent();
});

export default KnittoTable as <TData>(
  props: IKnittoTable<TData> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReactNode;
