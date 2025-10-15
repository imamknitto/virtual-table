import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getComplexHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type NestedGroupingSectionProps = {
  data: Employee[];
};

const NestedGroupingSection = ({ data }: NestedGroupingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getComplexHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Nested Header Grouping</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg'>
        <p className='text-sm text-purple-800 dark:text-purple-200'>
          <strong>Example:</strong> Employee table with nested header groups showing how to create
          multi-level header hierarchies for complex data organization.
        </p>
      </div>

      <div className='h-96'>
        <KnittoTable
          data={data.slice(0, 15)}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLES.nested} title='Nested Header Grouping Example' />}
    </section>
  );
};

export default memo(NestedGroupingSection);

