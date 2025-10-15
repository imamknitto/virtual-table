import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface ITableWrapper {
  isLoading: boolean;
  classNameOuterTable: string;
  useAutoSizer: boolean;
  width?: number;
  height?: number;
  onScroll: (scrollTop: number, scrollLeft: number) => void;
  children: React.ReactNode;
}

const TableScrollWrapper = forwardRef<HTMLDivElement, ITableWrapper>(
  ({ isLoading, classNameOuterTable, useAutoSizer, width, height, onScroll, children }, ref) => {
    return (
      <div
        ref={ref}
        data-table-container
        className={clsx(
          'w-full h-full overflow-auto relative border border-[#8E8F93]',
          isLoading && 'pointer-events-none',
          classNameOuterTable,
        )}
        style={{
          ...(useAutoSizer && width && height ? { width, height } : {}),
          overflowAnchor: 'none',
        }}
        onScroll={(e) => onScroll?.(e.currentTarget.scrollTop, e.currentTarget.scrollLeft)}
      >
        {children}
      </div>
    );
  },
);

TableScrollWrapper.displayName = 'TableScrollWrapper';
export default TableScrollWrapper;
