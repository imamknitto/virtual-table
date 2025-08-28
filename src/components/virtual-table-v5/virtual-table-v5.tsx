import { memo, useMemo, useRef, type ReactNode } from 'react';
import clsx from 'clsx';
import { DEFAULT_SIZE, type IAdjustedHeader, type IVirtualTable } from './lib';
import { HeaderContextProvider } from './context/header-context';
import { VirtualizerContextProvider } from './context/virtualizer-context';
import { SelectionContextProvider } from './context/selection-context';
import { FilterContextProvider } from './context/filter-context';
import UIContextProvider from './context/ui-context';
import VirtualTableHeader from './virtual-table-header';
import VirtualTableFooter from './virtual-table-footer';
import VirtualTableBody from './virtual-table-body';
import ResizeLine from './components/resize-line';
import './lib/style.css';

function VirtualTable5<TData>(virtualTableProps: IVirtualTable<TData>) {
  const {
    rowKey,
    data,
    headers,
    headerMode = 'double',
    rowHeight = DEFAULT_SIZE.ROW_HEIGHT,
    headerHeight = DEFAULT_SIZE.HEADER_HEIGTH,
    filterHeight = DEFAULT_SIZE.FILTER_HEIGHT,
    footerHeight = DEFAULT_SIZE.FOOTER_HEIGHT,
    useFooter = false,
    classNameOuterTable,
    onClickRow,
    onDoubleClickRow,
    onRightClickRow,
    onChangeCheckboxRowSelection,
    onRenderExpandedContent,
  } = virtualTableProps;

  const scrollElementRef = useRef<HTMLDivElement>(null);

  const modifiedHeaders = useMemo(() => {
    return headers.map((header) => ({
      ...header,
      visible: true,
      width: header.width || DEFAULT_SIZE.COLUMN_WIDTH,
    }));
  }, [headers]);

  return (
    <HeaderContextProvider initialColumns={modifiedHeaders as IAdjustedHeader[]}>
      <FilterContextProvider dataSource={data}>
        <VirtualizerContextProvider rowKey={rowKey} scrollElementRef={scrollElementRef}>
          <SelectionContextProvider onChangeCheckboxRowSelection={onChangeCheckboxRowSelection}>
            <UIContextProvider
              filterHeight={filterHeight}
              useFooter={useFooter}
              expandedContent={(data) => onRenderExpandedContent?.(data as TData)}
              headerMode={headerMode}
              headerHeight={headerHeight}
            >
              <div
                ref={scrollElementRef}
                className={clsx(
                  'w-full h-full overflow-auto relative border border-gray-200',
                  classNameOuterTable,
                )}
              >
                <VirtualTableHeader headerMode={headerMode} />

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
              </div>

              <ResizeLine />
            </UIContextProvider>
          </SelectionContextProvider>
        </VirtualizerContextProvider>
      </FilterContextProvider>
    </HeaderContextProvider>
  );
}

export default memo(VirtualTable5) as <TData>(props: IVirtualTable<TData>) => ReactNode;
