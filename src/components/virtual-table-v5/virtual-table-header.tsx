import { forwardRef, memo, type ReactNode } from 'react';
import clsx from 'clsx';
import { useVirtualizerContext } from './context/virtualizer-context';
import { useSelectionContext } from './context/selection-context';
import { useHeaderContext } from './context/header-context';
import { useUIContext } from './context/ui-context';
import { HeaderCaption, ResizeIndicator, RowCheckbox, TableFilter, TableHead } from './components';

interface IVirtualTableHeader extends React.HTMLAttributes<HTMLDivElement> {
  headerHeight: number;
  filterHeight: number;
  headerMode: 'single' | 'double';
}

const VirtualTableHeader = forwardRef((props: IVirtualTableHeader, ref: React.Ref<HTMLDivElement>) => {
  const { headerMode, headerHeight, filterHeight, className, ...propRest } = props;

  const { columnVirtualizer, columnVirtualItems, containerWidth } = useVirtualizerContext();
  const {
    columns,
    updateColumn,
    updateFreezeColumn,
    isFilterVisible,
    freezeLeftColumns,
    freezeRightColumns,
    freezeLeftColumnsWidth,
    freezeRightColumnsWidth,
  } = useHeaderContext();
  const { selectAll, deselectedRowKeys, toggleSelectAll } = useSelectionContext();
  const { freezeColLeftPositions, freezeColRightPositions, calcTotalTableWidth } = useUIContext();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLTableSectionElement>): void => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const isCheckbox = (target as HTMLInputElement).type === 'checkbox';
    if (!isCheckbox) return;
    toggleSelectAll(!selectAll);
  };

  const handleResizeColumn = (e: React.MouseEvent, index: number, freezeType?: 'left' | 'right') => {
    e.preventDefault();
    const startX = e.clientX;
    let startWidth: number;

    if (freezeType === 'left') {
      startWidth = freezeLeftColumns[index].width!;
    } else if (freezeType === 'right') {
      startWidth = freezeRightColumns[index].width!;
    } else {
      startWidth = columns[index].width!;
    }

    const resizeLine = document.getElementById('resize-line')!;
    resizeLine.style.display = 'block';
    resizeLine.style.left = `${e.clientX}px`;

    const onMouseMove = (ev: MouseEvent) => {
      resizeLine.style.left = `${ev.clientX}px`;
    };

    const onMouseUp = (ev: MouseEvent) => {
      resizeLine.style.display = 'none';
      const delta = ev.clientX - startX;
      const newWidth = Math.max(50, startWidth + delta);

      if (freezeType === 'left') {
        updateFreezeColumn(freezeLeftColumns[index].key, 'left', { width: newWidth });
      } else if (freezeType === 'right') {
        updateFreezeColumn(freezeRightColumns[index].key, 'right', { width: newWidth });
      } else {
        updateColumn(columns[index].key, { width: newWidth });
        columnVirtualizer?.resizeItem(index, newWidth);
      }

      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const isSingleHeader = headerMode === 'single';
  const calcFilterHeight = isFilterVisible ? filterHeight : 0;
  const calcHeaderHeight = isSingleHeader ? headerHeight : headerHeight + calcFilterHeight;

  const renderFreezeLeftColumns = () => {
    return freezeLeftColumns.map((column, freezeLeftIdx) => {
      const isCheckboxHeader = column.key === 'row-selection';
      const isExpandHeader = column.key === 'expand';
      const isActionHeader = column.key === 'action';

      return (
        <TableHead
          key={'table-head-freeze-left-' + column.key}
          className={clsx(
            'flex w-full h-full group/outer relative',
            isSingleHeader
              ? 'flex-row justify-between items-center'
              : 'flex-col justify-between items-start !px-0',
          )}
          style={{
            position: 'absolute',
            transform: `translateX(${freezeColLeftPositions[freezeLeftIdx]}px)`,
            height: calcHeaderHeight,
            width: column.width!,
            top: 0,
          }}
        >
          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && (
            <>
              <HeaderCaption
                isSingleHeader={isSingleHeader}
                headerKey={column.key}
                caption={column.caption}
                isFilterVisible={isFilterVisible}
              />
              {isFilterVisible && (
                <TableFilter
                  headerMode={headerMode}
                  headerKey={column.key}
                  filterSelectionOptions={column.filterSelectionOptions || []}
                />
              )}
              <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, freezeLeftIdx, 'left')} />
            </>
          )}

          {isCheckboxHeader && <RowCheckbox checked={selectAll && !deselectedRowKeys.size} />}
        </TableHead>
      );
    });
  };

  const renderFreezeRightColumns = () => {
    return freezeRightColumns.map((column, freezeLeftIdx) => {
      const isCheckboxHeader = column.key === 'row-selection';
      const isExpandHeader = column.key === 'expand';
      const isActionHeader = column.key === 'action';

      return (
        <TableHead
          key={'table-head-freeze-left-' + column.key}
          className={clsx('flex w-full h-full group/outer relative nth-[1]:!border-l', {
            'flex-row justify-between items-center': isSingleHeader,
            'flex-col justify-between items-start !px-0': !isSingleHeader,
          })}
          style={{
            position: 'absolute',
            transform: `translateX(${freezeColRightPositions[freezeLeftIdx]}px)`,
            height: calcHeaderHeight,
            width: column.width!,
            top: 0,
          }}
        >
          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && (
            <>
              <HeaderCaption
                isSingleHeader={isSingleHeader}
                headerKey={column.key}
                caption={column.caption}
                isFilterVisible={isFilterVisible}
              />
              {isFilterVisible && (
                <TableFilter
                  headerMode={headerMode}
                  headerKey={column.key}
                  filterSelectionOptions={column.filterSelectionOptions || []}
                />
              )}
              <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, freezeLeftIdx, 'right')} />
            </>
          )}

          {isCheckboxHeader && <RowCheckbox checked={selectAll && !deselectedRowKeys.size} />}
        </TableHead>
      );
    });
  };

  const renderVirtualizedColumns = () => {
    return columnVirtualItems?.map((column, columnIndex) => {
      const header = columns[column.index];
      const isCheckboxHeader = header?.key === 'row-selection';
      const isExpandHeader = header?.key === 'expand';
      const isActionHeader = header?.key === 'action';
      const isLastIndex = columnIndex === columnVirtualItems.length - 1;

      return (
        <TableHead
          key={'table-head-' + column.key}
          className={clsx('flex w-full h-full group/outer relative', {
            'flex-row justify-between items-center': isSingleHeader,
            'flex-col justify-between items-start !px-0': !isSingleHeader,
            'border-r-transparent': isLastIndex && freezeRightColumnsWidth > 0,
          })}
          style={{
            position: 'absolute',
            transform: `translateX(${column.start + freezeLeftColumnsWidth}px)`,
            height: calcHeaderHeight,
            width: column.size,
            top: 0,
          }}
        >
          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && (
            <>
              <HeaderCaption
                isSingleHeader={isSingleHeader}
                isFilterVisible={isFilterVisible}
                headerKey={header?.key}
                caption={header?.caption}
              />
              {isFilterVisible && (
                <TableFilter
                  headerMode={headerMode}
                  headerKey={header?.key}
                  filterSelectionOptions={header?.filterSelectionOptions || []}
                />
              )}

              <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, column.index)} />
            </>
          )}
          {isCheckboxHeader && <RowCheckbox checked={selectAll && !deselectedRowKeys.size} />}
        </TableHead>
      );
    });
  };

  return (
    <div
      className={clsx('sticky top-0 z-10', className)}
      onChange={handleCheckboxChange}
      ref={ref as React.Ref<HTMLDivElement>}
      {...propRest}
    >
      <div className='relative flex' style={{ width: calcTotalTableWidth }}>
        <div className='sticky left-0 z-20' style={{ width: freezeLeftColumnsWidth }}>
          {renderFreezeLeftColumns()}
        </div>

        <div className='sticky z-20' style={{ left: containerWidth - freezeRightColumnsWidth }}>
          {renderFreezeRightColumns()}
        </div>

        {renderVirtualizedColumns()}
      </div>
    </div>
  );
});

export default memo(VirtualTableHeader) as (props: IVirtualTableHeader) => ReactNode;
