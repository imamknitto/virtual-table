import { memo, useCallback, useRef, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type Employee, type ScrollPosition } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type ScrollTrackingSectionProps = {
  data: Employee[];
};

const ScrollTrackingSection = ({ data }: ScrollTrackingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ scrollTop: 0, scrollLeft: 0 });
  const [scrollEvents, setScrollEvents] = useState<string[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const headers = getEmployeeHeaders();

  const handleScroll = useCallback((scrollTop: number, scrollLeft: number) => {
    setScrollPosition({ scrollTop, scrollLeft });
    setScrollEvents((prev) => [
      `Scroll: Top=${Math.round(scrollTop)}, Left=${Math.round(scrollLeft)}`,
      ...prev.slice(0, 4),
    ]);
  }, []);

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Scroll Tracking with onScroll Prop</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg'>
        <p className='text-sm text-blue-800 dark:text-blue-200'>
          <strong>Scroll Tracking:</strong> Use the{' '}
          <code className='bg-blue-100 dark:bg-blue-900 px-1 rounded'>onScroll</code> prop to track
          scroll position in real-time. Perfect for implementing scroll-based features like sticky
          headers, progress indicators, or analytics.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Table */}
        <div className='lg:col-span-2'>
          <div className='h-96'>
            <VirtualTable
              data={data}
              filterHeight={32}
              headerHeight={40}
              headers={headers}
              onScroll={handleScroll}
              ref={tableRef}
              rowHeight={32}
              rowKey='id'
            />
          </div>
        </div>

        {/* Scroll Info */}
        <div className='space-y-4'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-3'>Current Scroll Position</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Scroll Top:</strong> {Math.round(scrollPosition.scrollTop)}px
              </p>
              <p>
                <strong>Scroll Left:</strong> {Math.round(scrollPosition.scrollLeft)}px
              </p>
            </div>
          </div>

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-3'>Scroll Events</h3>
            <div className='text-sm space-y-1 max-h-32 overflow-y-auto'>
              {scrollEvents.length > 0 ? (
                scrollEvents.map((event, index) => (
                  <p key={index} className='text-xs bg-muted px-2 py-1 rounded'>
                    {event}
                  </p>
                ))
              ) : (
                <p className='text-muted-foreground'>No scroll events yet</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.scrollTracking} title='Scroll Tracking Implementation' />
      )}
    </section>
  );
};

export default memo(ScrollTrackingSection);

