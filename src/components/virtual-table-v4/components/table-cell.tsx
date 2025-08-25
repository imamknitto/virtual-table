import { forwardRef, memo } from 'react';
import clsx from 'clsx';

interface ITableCell extends React.TdHTMLAttributes<HTMLTableCellElement> {
  columnWidth: number;
  leftPosition: number;
  columnHeight: number;
  cellValue?: React.ReactNode;
}

const TableCell = forwardRef((props: ITableCell, ref: React.Ref<HTMLTableCellElement>) => {
  const {
    columnWidth,
    leftPosition,
    columnHeight,
    cellValue,
    className,
    children,
    style,
    ...rest
  } = props;

  return (
    <td
      ref={ref}
      className={clsx('border-r border-b border-gray-200 px-1.5 cursor-pointer text-xs content-center', className)}
      style={{
        position: 'absolute',
        transform: `translateX(${leftPosition}px)`,
        width: columnWidth,
        height: columnHeight,
        ...style,
      }}
      {...rest}
    >
      {cellValue || children}
    </td>
  );
});

export default memo(TableCell);
