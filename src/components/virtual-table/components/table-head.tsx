import { forwardRef, memo, type ReactNode } from 'react';
import clsx from 'clsx';

interface TableHeadProps extends React.ThHTMLAttributes<HTMLDivElement> {
  headValue?: ReactNode;
}

const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(
  ({ headValue, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'font-semibold border-b border-[#D2D2D4] px-1.5 bg-[#EFF0F6]/50 dark:bg-black/50 backdrop-blur-lg text-xs content-center h-full global-report-title !text-[12px]',
          className,
        )}
        {...props}
      >
        {headValue || children}
      </div>
    );
  },
);

export default memo(TableHead);
