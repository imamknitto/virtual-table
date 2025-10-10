import { memo } from 'react';

const UsageTipsSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
      <div className='space-y-4'>
        <div className='p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg'>
          <h4 className='font-semibold text-blue-900 dark:text-blue-300 mb-2'>
            Performance Optimization
          </h4>
          <p className='text-sm text-blue-800 dark:text-blue-400'>
            Use memoized footer components to prevent unnecessary re-renders when data changes.
            Consider using useMemo for expensive calculations in footer components.
          </p>
        </div>
        <div className='p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg'>
          <h4 className='font-semibold text-green-900 dark:text-green-300 mb-2'>Visual Design</h4>
          <p className='text-sm text-green-800 dark:text-green-400'>
            Use different background colors and typography to distinguish footer cells from regular
            table cells. Consider adding borders or shadows to create visual separation.
          </p>
        </div>
        <div className='p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg'>
          <h4 className='font-semibold text-yellow-900 dark:text-yellow-300 mb-2'>
            Data Accessibility
          </h4>
          <p className='text-sm text-yellow-800 dark:text-yellow-400'>
            Ensure footer calculations are accessible to screen readers by using proper ARIA labels
            and semantic HTML elements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(UsageTipsSection);

