import { memo, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type SalesData } from '../utils';
import { getSalesHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type ComplexGroupingSectionProps = {
  data: SalesData[];
};

const ComplexGroupingSection = ({ data }: ComplexGroupingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getSalesHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Complex Header Grouping</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg'>
        <p className='text-sm text-green-800 dark:text-green-200'>
          <strong>Example:</strong> Sales report table with quarterly data grouped under "Quarterly
          Sales" and summary metrics grouped under "Summary" with calculated values.
        </p>
      </div>

      <div className='h-96'>
        <VirtualTable
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLES.complex} title='Complex Header Grouping Example' />}
    </section>
  );
};

export default memo(ComplexGroupingSection);

