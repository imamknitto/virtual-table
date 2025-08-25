import { forwardRef, memo, type ReactNode } from 'react';
import clsx from 'clsx';

interface TableHeadProps extends React.ThHTMLAttributes<React.ComponentRef<'th'>> {
  width: number;
  height: number;
  leftPosition: number;
  headValue?: ReactNode;
}

const TableHead = forwardRef<React.ComponentRef<'th'>, TableHeadProps>(
  ({ width, height, leftPosition, headValue, className, children, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={clsx(
          'font-semibold border-r border-b border-gray-200 px-1.5 bg-gray-50 text-xs content-center',
          className,
        )}
        style={{
          position: 'absolute',
          transform: `translateX(${leftPosition}px)`,
          top: 0,
          height,
          width,
        }}
        {...props}
      >
        {headValue || children}
      </th>
    );
  },
);

export default memo(TableHead);
