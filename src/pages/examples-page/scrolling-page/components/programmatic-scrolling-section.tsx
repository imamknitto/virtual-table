import { memo, useRef, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type ProgrammaticScrollingSectionProps = {
  data: Employee[];
};

const ProgrammaticScrollingSection = ({ data }: ProgrammaticScrollingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const headers = getEmployeeHeaders();

  const scrollToTop = () => {
    tableRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    tableRef.current?.scrollTo({
      top: tableRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToPosition = (top: number, left: number = 0) => {
    tableRef.current?.scrollTo({ top, left, behavior: 'smooth' });
  };

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Programmatic Scrolling with Ref</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg'>
        <p className='text-sm text-green-800 dark:text-green-200'>
          <strong>Programmatic Scrolling:</strong> Use the{' '}
          <code className='bg-green-100 dark:bg-green-900 px-1 rounded'>ref</code> prop to access
          the table's scroll element and implement programmatic scrolling. Great for navigation,
          search results, or user-controlled scrolling.
        </p>
      </div>

      <div className='mb-4 flex flex-wrap gap-2'>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          onClick={scrollToTop}
        >
          📍 Scroll to Top
        </button>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          onClick={scrollToBottom}
        >
          📍 Scroll to Bottom
        </button>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          onClick={() => scrollToPosition(500)}
        >
          📍 Scroll to 500px
        </button>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          onClick={() => scrollToPosition(1000, 200)}
        >
          📍 Scroll to (1000px, 200px)
        </button>
      </div>

      <div className='h-96'>
        <VirtualTable
          data={data}
          filterHeight={32}
          headerHeight={40}
          headers={headers}
          ref={tableRef}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && (
        <CodeBlock
          code={CODE_EXAMPLES.programmaticScrolling}
          title='Programmatic Scrolling Implementation'
        />
      )}
    </section>
  );
};

export default memo(ProgrammaticScrollingSection);

