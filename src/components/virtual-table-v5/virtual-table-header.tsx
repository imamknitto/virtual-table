import { forwardRef, memo, type ReactNode } from 'react';
import clsx from 'clsx';
import { useVirtualizerContext } from './context/virtualizer-context';
import { useSelectionContext } from './context/selection-context';
import { useHeaderContext } from './context/header-context';
import { useUIContext } from './context/ui-context';
import { DEFAULT_SIZE, findChildRecursive } from './lib';
import { HeaderCaption, ResizeIndicator, RowCheckbox, TableFilter, TableHead } from './components';

interface IVirtualTableHeader extends React.HTMLAttributes<HTMLDivElement> {
  headerMode: 'single' | 'double';
}

const VirtualTableHeader = forwardRef((props: IVirtualTableHeader, ref: React.Ref<HTMLDivElement>) => {
  const { headerMode, className, ...propRest } = props;

  const { columnVirtualizer, columnVirtualItems, containerWidth } = useVirtualizerContext();
  const {
    columns,
    updateColumn,
    updateChildColumn,
    updateFreezeChildColumn,
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

  const handleResizeChildColumn = (
    e: React.MouseEvent,
    args: {
      parentKey: string;
      childKey: string;
      parentVirtualIndex?: number;
      freezeType?: 'left' | 'right';
    },
  ) => {
    e.preventDefault();
    const { parentKey, childKey, parentVirtualIndex, freezeType } = args;
    const startX = e.clientX;

    const parent =
      freezeType === 'left'
        ? freezeLeftColumns.find((c) => c.key === parentKey)
        : freezeType === 'right'
        ? freezeRightColumns.find((c) => c.key === parentKey)
        : columns.find((c) => c.key === parentKey);

    if (!parent) return;

    // Gunakan fungsi rekursif untuk mencari child
    const child = findChildRecursive(parent, childKey);

    if (!child) return;

    const startChildWidth = child.width ?? 0;
    const startParentWidth = parent.width ?? 0;

    const resizeLine = document.getElementById('resize-line')!;
    resizeLine.style.display = 'block';
    resizeLine.style.left = `${e.clientX}px`;

    const onMouseMove = (ev: MouseEvent) => {
      resizeLine.style.left = `${ev.clientX}px`;
    };

    const onMouseUp = (ev: MouseEvent) => {
      resizeLine.style.display = 'none';
      const delta = ev.clientX - startX;
      const newChildWidth = Math.max(50, startChildWidth + delta);

      if (freezeType) {
        updateFreezeChildColumn(parentKey as string, childKey as string, freezeType, {
          width: newChildWidth,
        });
      } else {
        const newParentWidth = Math.max(50, startParentWidth - startChildWidth + newChildWidth);
        updateChildColumn(parentKey as string, childKey as string, { width: newChildWidth });
        if (typeof parentVirtualIndex === 'number') {
          columnVirtualizer?.resizeItem(parentVirtualIndex, newParentWidth);
        }
      }

      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const isSingleHeader = headerMode === 'single';
  const { calcHeaderTotalHeight } = useUIContext();
  type HeaderNode = (typeof columns)[number];

  const renderNestedVirtualNode = (node: HeaderNode, rootTopLevelKey: string, parentVirtualIndex: number) => {
    const isLeaf = !node.children || node.children.length === 0;

    if (isLeaf) {
      return (
        <div
          key={'table-head-group-' + String(node.key)}
          className={clsx(
            'group/outer relative border-r nth-last-[1]:border-r-transparent border-gray-200 flex h-full',
            { 'flex-row justify-between items-center px-1': isSingleHeader },
            { 'flex-col justify-between items-start': !isSingleHeader },
          )}
          style={{ width: node.width! }}
        >
          <>
            <HeaderCaption
              isSingleHeader={isSingleHeader}
              isFilterVisible={isFilterVisible}
              headerKey={node?.key}
              caption={node?.caption}
            />

            {isFilterVisible && (
              <TableFilter
                headerMode={headerMode}
                headerKey={node?.key}
                filterSelectionOptions={node?.filterSelectionOptions || []}
              />
            )}

            <ResizeIndicator
              handleMouseDown={(e) => {
                handleResizeChildColumn(e, {
                  parentKey: rootTopLevelKey,
                  childKey: node.key as string,
                  parentVirtualIndex,
                });
              }}
            />
          </>
        </div>
      );
    }

    return (
      <div
        key={'table-head-group-node-' + String(node.key)}
        className={clsx(
          'relative border-r nth-last-[1]:border-r-transparent border-gray-200 !px-0 flex flex-col h-full',
          { 'group/outer': !node.children },
        )}
        style={{ width: node.width! }}
      >
        <div
          className='w-full border-b border-gray-200 text-center content-center flex items-center justify-center'
          style={{ minHeight: DEFAULT_SIZE.GROUP_HEADER_HEIGHT }}
        >
          {node.caption}
        </div>

        <div className='flex-1 w-full flex min-h-0'>
          {node.children?.map((child) =>
            renderNestedVirtualNode(child as HeaderNode, rootTopLevelKey, parentVirtualIndex),
          )}
        </div>
      </div>
    );
  };

  const renderNestedFrozenNode = (
    node: HeaderNode,
    rootTopLevelKey: string,
    freezeType: 'left' | 'right',
    parentIndex: number,
  ) => {
    const isLeaf = !node.children || node.children.length === 0;

    if (isLeaf) {
      return (
        <div
          key={'table-head-freeze-' + freezeType + '-group-' + String(node.key)}
          className={clsx(
            'group/outer relative border-r nth-last-[1]:border-r-transparent border-gray-200 flex h-full',
            { 'flex-row justify-between items-center px-1': isSingleHeader },
            { 'flex-col justify-between items-start': !isSingleHeader },
          )}
          style={{ width: node.width! }}
        >
          <>
            <HeaderCaption
              isSingleHeader={isSingleHeader}
              isFilterVisible={isFilterVisible}
              headerKey={node?.key}
              caption={node?.caption}
            />

            {isFilterVisible && (
              <TableFilter
                headerMode={headerMode}
                headerKey={node?.key}
                filterSelectionOptions={node?.filterSelectionOptions || []}
              />
            )}

            <ResizeIndicator
              handleMouseDown={(e) =>
                handleResizeChildColumn(e, {
                  parentKey: rootTopLevelKey,
                  childKey: node.key as string,
                  freezeType,
                })
              }
            />
          </>
        </div>
      );
    }

    return (
      <div
        key={'table-head-freeze-' + freezeType + '-group-node-' + String(node.key)}
        className='relative border-r nth-last-[1]:border-r-transparent border-gray-200 !px-0 flex flex-col'
        style={{ width: node.width! }}
      >
        <div
          className='w-full border-b border-gray-200 text-center content-center flex items-center justify-center'
          style={{ minHeight: DEFAULT_SIZE.GROUP_HEADER_HEIGHT }}
        >
          {node.caption}
        </div>
        <div className='flex-1 w-full flex min-h-0'>
          {node.children?.map((child) =>
            renderNestedFrozenNode(child as HeaderNode, rootTopLevelKey, freezeType, parentIndex),
          )}
        </div>
      </div>
    );
  };

  const renderFreezeLeftColumns = () => {
    return freezeLeftColumns.map((column, freezeLeftIdx) => {
      const isCheckboxHeader = column.key === 'row-selection';
      const isExpandHeader = column.key === 'expand';
      const isActionHeader = column.key === 'action';
      const isGroupHeader = column.key.startsWith('group-header-');

      return (
        <TableHead
          key={'table-head-freeze-left-' + column.key}
          className={clsx('flex size-full relative h-max', {
            'group/outer': !isGroupHeader,
            '!px-0 flex flex-col': isGroupHeader,
            'flex-row justify-between items-center': isSingleHeader && !isGroupHeader,
            'flex-col justify-between items-start !px-0': !isSingleHeader || isGroupHeader,
          })}
          style={{
            position: 'absolute',
            transform: `translateX(${freezeColLeftPositions[freezeLeftIdx]}px)`,
            height: calcHeaderTotalHeight,
            width: column.width!,
            top: 0,
          }}
        >
          {isGroupHeader && (
            <>
              <div
                className='w-full border-b border-gray-200 text-center content-center'
                style={{ height: DEFAULT_SIZE.GROUP_HEADER_HEIGHT }}
              >
                {column.caption}
              </div>

              <div className='flex-1 w-full flex min-h-0'>
                {column.children?.map((child) =>
                  renderNestedFrozenNode(child as HeaderNode, column.key as string, 'left', freezeLeftIdx),
                )}
              </div>
            </>
          )}

          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && !isGroupHeader && (
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
    return freezeRightColumns.map((column, freezeRightIdx) => {
      const isCheckboxHeader = column.key === 'row-selection';
      const isExpandHeader = column.key === 'expand';
      const isActionHeader = column.key === 'action';
      const isGroupHeader = column.key.startsWith('group-header-');

      return (
        <TableHead
          key={'table-head-freeze-left-' + column.key}
          className={clsx('flex size-full relative nth-[1]:!border-l', {
            'group/outer': !isGroupHeader,
            '!px-0 flex flex-col': isGroupHeader,
            'flex-row justify-between items-center': isSingleHeader && !isGroupHeader,
            'flex-col justify-between items-start !px-0': !isSingleHeader || isGroupHeader,
          })}
          style={{
            position: 'absolute',
            transform: `translateX(${freezeColRightPositions[freezeRightIdx]}px)`,
            height: calcHeaderTotalHeight,
            width: column.width!,
            top: 0,
          }}
        >
          {isGroupHeader && (
            <>
              <div
                className='w-full border-b border-gray-200 text-center content-center'
                style={{ height: DEFAULT_SIZE.GROUP_HEADER_HEIGHT }}
              >
                {column.caption}
              </div>

              <div className='flex-1 w-full flex min-h-0'>
                {column.children?.map((child) =>
                  renderNestedFrozenNode(child as HeaderNode, column.key as string, 'right', freezeRightIdx),
                )}
              </div>
            </>
          )}

          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && !isGroupHeader && (
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

              <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, freezeRightIdx, 'right')} />
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
      const isGroupHeader = header?.key.startsWith('group-header-');

      return (
        <TableHead
          key={'table-head-' + column.key}
          className={clsx('flex size-full relative', {
            'group/outer': !isGroupHeader,
            '!px-0 flex flex-col': isGroupHeader,
            'flex-row justify-between items-center': isSingleHeader && !isGroupHeader,
            'flex-col justify-between items-start !px-0': !isSingleHeader && !isGroupHeader,
            'border-r-transparent': isLastIndex && freezeRightColumnsWidth > 0,
          })}
          style={{
            position: 'absolute',
            transform: `translateX(${column.start + freezeLeftColumnsWidth}px)`,
            height: calcHeaderTotalHeight,
            width: column.size,
            top: 0,
          }}
        >
          {isGroupHeader && (
            <>
              <div
                className='w-full border-b border-gray-200 text-center content-center'
                style={{ height: DEFAULT_SIZE.GROUP_HEADER_HEIGHT }}
              >
                {header.caption}
              </div>

              <div className='flex-1 w-full flex min-h-0'>
                {header.children?.map((child) =>
                  renderNestedVirtualNode(child as HeaderNode, header.key as string, column.index),
                )}
              </div>
            </>
          )}

          {!isCheckboxHeader && !isExpandHeader && !isActionHeader && !isGroupHeader && (
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
      <div className='relative flex h-full' style={{ width: calcTotalTableWidth }}>
        <div className='sticky left-0 z-20 h-full' style={{ width: freezeLeftColumnsWidth }}>
          {renderFreezeLeftColumns()}
        </div>

        <div className='sticky z-20 h-full' style={{ left: containerWidth - freezeRightColumnsWidth }}>
          {renderFreezeRightColumns()}
        </div>

        {renderVirtualizedColumns()}
      </div>
    </div>
  );
});

export default memo(VirtualTableHeader) as (props: IVirtualTableHeader) => ReactNode;
