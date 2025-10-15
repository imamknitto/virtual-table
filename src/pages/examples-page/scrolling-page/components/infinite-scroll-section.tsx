import { memo, useCallback, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLES, type Employee, generateEmployeeData } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type InfiniteScrollSectionProps = {
  initialData: Employee[];
};

const InfiniteScrollSection = ({ initialData }: InfiniteScrollSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const [data, setData] = useState(initialData);
  const [bottomTouchCount, setBottomTouchCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const headers = getEmployeeHeaders();

  const handleScrollTouchBottom = useCallback(() => {
    setBottomTouchCount((prev) => prev + 1);

    // Simulate loading more data
    setIsLoadingMore(true);
    setTimeout(() => {
      const newData = generateEmployeeData(20);
      setData((prev) => [...prev, ...newData]);
      setIsLoadingMore(false);
    }, 1000);
  }, []);

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          Scroll Touch Bottom for Infinite Loading
        </h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg'>
        <p className='text-sm text-orange-800 dark:text-orange-200'>
          <strong>Infinite Scroll:</strong> Use the{' '}
          <code className='bg-orange-100 dark:bg-orange-900 px-1 rounded'>
            onScrollTouchBottom
          </code>{' '}
          prop to detect when users scroll near the bottom. Perfect for implementing infinite
          loading, pagination, or lazy loading of data.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Table */}
        <div className='lg:col-span-2'>
          <div className='h-96'>
            <KnittoTable
              data={data}
              filterHeight={32}
              headerHeight={40}
              headers={headers}
              isLoading={isLoadingMore}
              onScrollTouchBottom={handleScrollTouchBottom}
              rowHeight={32}
              rowKey='id'
            />
          </div>
        </div>

        {/* Stats */}
        <div className='space-y-4'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-3'>Infinite Scroll Stats</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Total Records:</strong> {data.length}
              </p>
              <p>
                <strong>Bottom Touches:</strong> {bottomTouchCount}
              </p>
              <p>
                <strong>Loading:</strong> {isLoadingMore ? 'Yes' : 'No'}
              </p>
            </div>
          </div>

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-3'>How it Works</h3>
            <div className='text-sm space-y-2'>
              <p>• Scroll to the bottom of the table</p>
              <p>• New data will be loaded automatically</p>
              <p>• Threshold: 100px from bottom</p>
              <p>• Throttled to prevent excessive calls</p>
            </div>
          </div>
        </div>
      </div>

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.infiniteScroll} title='Infinite Scroll Implementation' />
      )}
    </section>
  );
};

export default memo(InfiniteScrollSection);

