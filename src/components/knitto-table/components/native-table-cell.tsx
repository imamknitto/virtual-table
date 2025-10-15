import { forwardRef, memo, type ReactNode } from 'react';
import clsx from 'clsx';

interface ITableCell extends React.TdHTMLAttributes<HTMLTableCellElement> {
  columnWidth: number;
  maxColumnWidth?: number;
  columnHeight: number;
  cellValue?: ReactNode;
  rowSpan?: number;
}

const NativeTableCell = forwardRef((props: ITableCell, ref: React.Ref<HTMLTableCellElement>) => {
  const { columnWidth, maxColumnWidth, columnHeight, cellValue, rowSpan, className, children, style, ...rest } = props;

  return (
    <td
      ref={ref}
      rowSpan={rowSpan}
      className={clsx(
        'px-1.5',
        'border-b border-[#D2D2D4]',
        '!text-xs',
        'global-report-content',
        'content-center',
        className,
      )}
      style={{
        width: columnWidth,
        minWidth: columnWidth,
        maxWidth: maxColumnWidth || columnWidth,
        height: columnHeight,
        ...style,
      }}
      {...rest}
    >
      {cellValue || children}
    </td>
  );
});

export default memo(NativeTableCell);
