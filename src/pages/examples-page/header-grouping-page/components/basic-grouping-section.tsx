import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type BasicGroupingSectionProps = {
  data: Employee[];
};

const BasicGroupingSection = ({ data }: BasicGroupingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getEmployeeHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Basic Header Grouping</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg'>
        <p className='text-sm text-blue-800 dark:text-blue-200'>
          <strong>Example:</strong> Employee table with grouped headers organizing related
          information into logical sections: Contact Information, Work Details, and Financial data.
        </p>
      </div>

      <div className='h-96'>
        <KnittoTable
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLES.basic} title='Basic Header Grouping Example' />}
    </section>
  );
};

export default memo(BasicGroupingSection);

