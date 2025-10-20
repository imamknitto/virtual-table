import { memo, useMemo } from 'react';
import clsx from 'clsx';
import { RowCheckbox, RowExpand, TableCell } from '..';
import type { IAdjustedHeader } from '../../lib';
import { useClassNameCell, useUseDynamicRowHeight } from '../../context/ui-context';

interface IBodyCell<TData> {
  rowKey: string;
  rowData: TData;
  isRowChecked: boolean;
  isRowExpanded: boolean;
  column: IAdjustedHeader;
  isVisible?: boolean;
  isRowHighlighted?: boolean;
  isFirstIndex?: boolean;
  isLastIndex?: boolean;
  position: {
    left: number;
    width: number;
    height: number;
    virtualHeight?: number;
  };
  freezeMode?: 'left' | 'right' | 'none';
  freezeLeftColumnsWidth?: number;
  freezeRightColumnsWidth?: number;
  rowIndex?: number;
  columnIndex?: number;
}

function BodyCell<TData>(bodyCellProps: IBodyCell<TData>) {
  const {
    rowKey,
    rowData,
    isRowChecked,
    isRowExpanded,
    column,
    isVisible = true,
    isRowHighlighted = false,
    isFirstIndex = false,
    isLastIndex = false,
    position,
    freezeMode = 'none',
    freezeLeftColumnsWidth = 0,
    freezeRightColumnsWidth = 0,
    rowIndex = 0,
    columnIndex = 0,
  } = bodyCellProps;

  const classNameCell = useClassNameCell();
  const useDynamicRowHeight = useUseDynamicRowHeight();

  const isCheckboxColumn = column?.key === 'row-selection';
  const isExpandColumn = column?.key === 'expand';

  const cellValue = useMemo(() => String(rowData[column?.key as keyof typeof rowData] || ''), [rowData, column?.key]);
  const cellRender = column?.renderCell;
  const cellExpandToggle = column?.renderExpandToggle;

  // Memoize custom className untuk performa optimal
  const customClassName = useMemo(() => {
    if (!classNameCell) return '';
    return classNameCell(rowData, rowIndex, columnIndex);
  }, [classNameCell, rowData, rowIndex, columnIndex]);

  const classNames = useMemo(() => {
    const baseClasses = {
      'group-hover/row-cells:!bg-[#ECEEFF] dark:group-hover/row-cells:!bg-[#2F3574] group-hover/row-cells:!text-black-100':
        !isRowHighlighted,
      '!hidden': !isVisible,
    };

    if (freezeMode === 'left') {
      return clsx('table-cell border-r bg-white dark:bg-black/50 backdrop-blur-2xl break-words', customClassName, {
        ...baseClasses,
        truncate: !useDynamicRowHeight,
        '!border-b !border-l !border-t !border-y-[#2F3574] nth-[1]:border-l-[#2F3574]': isRowHighlighted,
      });
    }

    if (freezeMode === 'right') {
      return clsx('table-cell border-l bg-white dark:bg-black/50 backdrop-blur-2xl break-words', customClassName, {
        ...baseClasses,
        truncate: !useDynamicRowHeight,
        '!border-y !border-y-[#2F3574]': isRowHighlighted,
        '!border-r !border-r-[#2F3574]': isRowHighlighted && isLastIndex,
      });
    }

    return clsx('table-cell border-r break-words', customClassName, {
      ...baseClasses,
      truncate: !useDynamicRowHeight,
      '!border-r-transparent': isLastIndex && !isRowHighlighted,
      '!border-r-[#2F3574]': isLastIndex && isRowHighlighted && !freezeRightColumnsWidth,
      'border-l border-l-[#2F3574]': isRowHighlighted && !freezeLeftColumnsWidth && isFirstIndex,
      'nth-last-[1]:!border-r-[#2F3574]': isRowHighlighted && !freezeRightColumnsWidth,
      '!border-b !border-t !border-y-[#2F3574]': isRowHighlighted,
    });
  }, [
    freezeMode,
    isRowHighlighted,
    isVisible,
    freezeLeftColumnsWidth,
    freezeRightColumnsWidth,
    isFirstIndex,
    isLastIndex,
    customClassName,
    useDynamicRowHeight,
  ]);

  const cellStyle = useMemo(() => {
    if (useDynamicRowHeight) {
      // For dynamic row height, use flex layout - position.left is ignored
      return {
        flex: `0 0 ${position.width}px`,
        top: 0,
        minWidth: position.width,
        maxWidth: position.width,
        minHeight: position.height,
      };
    }

    // For fixed row height, use absolute positioning
    return {
      position: 'absolute' as const,
      minHeight: position.height,
      transform: `translateX(${position.left}px)`,
      minWidth: position.width,
      width: position.width,
      top: 0,
    };
  }, [position.height, position.left, position.width, useDynamicRowHeight]);

  const cellContent = useMemo(() => {
    if (isCheckboxColumn) return <RowCheckbox checked={isRowChecked} />;

    if (isExpandColumn) {
      if (!cellExpandToggle) {
        return <RowExpand isExpanded={isRowExpanded} />;
      }
      const customExpand = cellExpandToggle(rowData, isRowExpanded);
      if (typeof customExpand === 'undefined' || customExpand === null) {
        return <RowExpand isExpanded={isRowExpanded} />;
      }
      return customExpand;
    }

    return cellRender?.(rowData) || cellValue || '';
  }, [isCheckboxColumn, isExpandColumn, isRowChecked, isRowExpanded, cellRender, rowData, cellValue, cellExpandToggle]);

  return (
    <TableCell
      key={'table-cell-' + String(column.key)}
      data-row-key={rowKey}
      data-row-index={rowIndex}
      data-cell-index={columnIndex}
      data-col-key={String(column.key)}
      className={classNames}
      style={cellStyle}
    >
      {cellContent}
    </TableCell>
  );
}

export default memo(BodyCell) as <TData>(props: IBodyCell<TData>) => React.ReactElement;
