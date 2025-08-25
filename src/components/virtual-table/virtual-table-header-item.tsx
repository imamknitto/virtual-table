import { memo, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import { ResizeIndicator } from './components';
import { useResizableColumn } from './hooks';
import { useTableContext } from './context/table-context';
import HeaderCaption from './components/header-caption';
import HeaderFilter from './components/header-filter';
import { DEFAULT_SIZE, type IHeader } from './lib';

type IVirtualTableHeaderItem<TData> = {
  position: 'absolute' | 'sticky';
  header: IHeader<TData>;
  headerIndex: number;
  headerWidth: number;
  leftPosition: number;
};

const VirtualTableHeaderItem = <TData,>(props: IVirtualTableHeaderItem<TData>) => {
  const { header, headerIndex, position, headerWidth, leftPosition } = props;
  
  // Optimize context calls by getting all needed values in one selector
  const contextValues = useTableContext((ctx) => ({
    outerTableheight: ctx.outerTableheight,
    isFilterVisible: ctx.isFilterVisible,
    headerHeight: ctx.headerHeight,
    handleResizeColumn: ctx.handleResizeColumn,
  }));

  const { outerTableheight, isFilterVisible, headerHeight, handleResizeColumn } = contextValues;

  // Memoize resize handler dengan useCallback yang lebih spesifik
  const handleResizeMouseUp = useCallback((newSize: number) => {
    handleResizeColumn(header.key.toString(), headerIndex, newSize);
  }, [handleResizeColumn, header.key, headerIndex]);

  const { boxRef, handleMouseDown, resizableWidth, isTempResize } = useResizableColumn({
    columnIndex: headerIndex,
    currentWidth: headerWidth,
    keyName: header.key as string,
    onMouseUp: handleResizeMouseUp,
  });

  // Memoize expensive computations
  const columnConfig = useMemo(() => ({
    isSelectAllColumn: header.key === 'row-selection',
    isStickyRightColumn: header.sticky === 'right',
    preventResizeColumn: header.key !== 'expand' && header.key !== 'row-selection',
    showFilter: header.key !== 'expand' && header.key !== 'row-selection' && header.key !== 'action',
  }), [header.key, header.sticky]);

  const { isSelectAllColumn, isStickyRightColumn, preventResizeColumn, showFilter } = columnConfig;

  const calculatedHeaderHeight = useMemo(() => 
    headerHeight + (isFilterVisible ? DEFAULT_SIZE.FILTER_HEIGHT : 0),
    [headerHeight, isFilterVisible]
  );

  // Memoize styles dengan dependencies yang lebih spesifik
  const headerStyle = useMemo(() => ({
    position,
    height: calculatedHeaderHeight,
    width: `${headerWidth}px`,
    left: `${leftPosition}px`,
    zIndex: position === 'absolute' ? 800 - headerIndex : 1000,
  }), [position, calculatedHeaderHeight, headerWidth, leftPosition, headerIndex]);

  const innerStyle = useMemo(() => ({
    ...(isStickyRightColumn && { boxShadow: '-1px 0px 0px 0px #e5e7eb' })
  }), [isStickyRightColumn]);

  const innerClassName = useMemo(() => clsx(
    'size-full relative flex flex-col border-r border-gray-200 text-xs',
    isFilterVisible && 'border-b',
  ), [isFilterVisible]);

  // Memoize resize indicator props untuk mengurangi re-render
  const resizeIndicatorProps = useMemo(() => ({
    onMouseDown: handleMouseDown,
    isMoving: isTempResize,
    left: isTempResize ? resizableWidth : headerWidth,
    outerTableHeight: outerTableheight,
  }), [handleMouseDown, isTempResize, resizableWidth, headerWidth, outerTableheight]);

  return (
    <th
      ref={boxRef}
      className={clsx('group/outer bg-gray-50')}
      style={headerStyle}
    >
      <div className={innerClassName} style={innerStyle}>
        <HeaderCaption
          isShowFilter={showFilter}
          headerCaption={header.caption}
          headerKey={header.key as string}
        />

        {isFilterVisible && !isSelectAllColumn && (
          <HeaderFilter isShowFilter={showFilter} headerKey={header.key as string} />
        )}

        {preventResizeColumn && (
          <ResizeIndicator
            {...resizeIndicatorProps}
          />
        )}
      </div>
    </th>
  );
};

export default memo(VirtualTableHeaderItem) as typeof VirtualTableHeaderItem;
