import { memo } from 'react';
import clsx from 'clsx';
import { useVirtualizerContext } from './context/virtualizer-context';
import { useHeaderContext } from './context/header-context';
import { useUIContext } from './context/ui-context';
import TableCell from './components/table-cell';

interface IVirtualTableFooter {
  footerHeight: number;
}

const VirtualTableFooter = (props: IVirtualTableFooter) => {
  const { footerHeight } = props;

  const {
    columns,
    freezeLeftColumnsWidth,
    freezeRightColumnsWidth,
    freezeLeftColumns,
    freezeRightColumns,
    getLeaves,
  } = useHeaderContext();
  const { containerHeight, containerWidth, columnVirtualItems } = useVirtualizerContext();
  const { calcTotalTableWidth, freezeColLeftPositions, freezeColRightPositions } = useUIContext();

  const renderFreezeLeftFooters = () => {
    return freezeLeftColumns.flatMap((column, freezeLeftIdx) => {
      const isGroupHeader = column.key.startsWith('group-header-');

      if (isGroupHeader) {
        let childOffset = 0;

        return getLeaves(column).map((leaf) => {
          const left = freezeColLeftPositions[freezeLeftIdx] + childOffset;
          childOffset += leaf.width || 0;
          return (
            <TableCell
              key={'table-footer-cell-freeze-left-group-' + String(leaf.key)}
              className={clsx('bg-gray-50 border-t truncate !px-0')}
              style={{
                position: 'absolute',
                height: footerHeight,
                transform: `translateX(${left}px)`,
                width: leaf.width!,
                top: 0,
              }}
            >
              {leaf.renderFooter?.()}
            </TableCell>
          );
        });
      }

      return [
        <TableCell
          key={'table-footer-cell-freeze-left-' + String(column.key)}
          className={clsx('bg-gray-50 border-t truncate !px-0')}
          style={{
            position: 'absolute',
            height: footerHeight,
            transform: `translateX(${freezeColLeftPositions[freezeLeftIdx]}px)`,
            width: column.width!,
            top: 0,
          }}
        >
          {column.renderFooter?.()}
        </TableCell>,
      ];
    });
  };

  const renderFreezeRightFooters = () => {
    return freezeRightColumns.flatMap((column, freezeRightIdx) => {
      const isGroupHeader = column.key.startsWith('group-header-');

      if (isGroupHeader) {
        let childOffset = 0;

        return getLeaves(column).map((leaf) => {
          const left = freezeColRightPositions[freezeRightIdx] + childOffset;
          childOffset += leaf.width || 0;
          return (
            <TableCell
              key={'table-footer-cell-freeze-right-group-' + String(leaf.key)}
              className={clsx('bg-gray-50 border-t nth-[1]:!border-l truncate !px-0')}
              style={{
                position: 'absolute',
                height: footerHeight,
                transform: `translateX(${left}px)`,
                width: leaf.width!,
                top: 0,
              }}
            >
              {leaf.renderFooter?.()}
            </TableCell>
          );
        });
      }

      return [
        <TableCell
          key={'table-footer-cell-freeze-right-' + String(column.key)}
          className={clsx('bg-gray-50 border-t nth-[1]:!border-l truncate !px-0')}
          style={{
            position: 'absolute',
            height: footerHeight,
            transform: `translateX(${freezeColRightPositions[freezeRightIdx]}px)`,
            width: column.width!,
            top: 0,
          }}
        >
          {column.renderFooter?.()}
        </TableCell>,
      ];
    });
  };

  const renderVirtualizedFooters = () => {
    return columnVirtualItems.flatMap((column, columnIndex) => {
      const header = columns?.[column.index];
      const isLastIndex = columnIndex === columnVirtualItems.length - 1;
      const isGroupHeader = header?.key.startsWith('group-header-');

      if (isGroupHeader) {
        const baseLeft = column.start + freezeLeftColumnsWidth;
        let childOffset = 0;

        return getLeaves(header).map((leaf) => {
          const left = baseLeft + childOffset;
          childOffset += leaf.width || 0;

          return (
            <TableCell
              key={'table-footer-cell-virtualized-group-' + column.key + '-' + String(leaf.key)}
              data-col-key={String(leaf.key)}
              className={clsx('bg-gray-50 table-cell truncate border-t !px-0', {
                '!border-r-transparent': isLastIndex && freezeRightColumnsWidth > 0,
              })}
              style={{
                position: 'absolute',
                top: 0,
                height: footerHeight,
                transform: `translateX(${left}px)`,
                width: leaf.width!,
              }}
            >
              {leaf.renderFooter?.()}
            </TableCell>
          );
        });
      }

      const cellRender = header?.renderFooter;

      return [
        <TableCell
          key={'table-footer-cell-virtualized-' + column.key}
          data-col-key={column.key}
          className={clsx('bg-gray-50 table-cell truncate border-t !px-0', {
            '!border-r-transparent': isLastIndex && freezeRightColumnsWidth > 0,
          })}
          style={{
            position: 'absolute',
            top: 0,
            height: footerHeight,
            transform: `translateX(${column.start + freezeLeftColumnsWidth}px)`,
            width: column.size,
          }}
        >
          {cellRender && cellRender()}
        </TableCell>,
      ];
    });
  };

  return (
    <div
      className='sticky z-30 bottom-0'
      style={{ height: footerHeight, top: containerHeight - footerHeight }}
    >
      <div className='relative flex' style={{ width: calcTotalTableWidth }}>
        <div className='sticky left-0 z-40' style={{ width: freezeLeftColumnsWidth }}>
          {renderFreezeLeftFooters()}
        </div>
        <div className='sticky z-40' style={{ left: containerWidth - freezeRightColumnsWidth }}>
          {renderFreezeRightFooters()}
        </div>

        {renderVirtualizedFooters()}
      </div>
    </div>
  );
};

export default memo(VirtualTableFooter);
