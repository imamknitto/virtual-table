import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getFreezeGroupHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type FreezeGroupingSectionProps = {
  data: Employee[];
};

const FreezeGroupingSection = ({ data }: FreezeGroupingSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getFreezeGroupHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Header Grouping with Freeze Columns</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg'>
        <p className='text-sm text-orange-800 dark:text-orange-200'>
          <strong>Example:</strong> Employee table combining header grouping with freeze columns.
          Basic Info is frozen on the left, Actions are frozen on the right, while other grouped
          columns scroll horizontally.
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

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.freezeGrouping} title='Header Grouping with Freeze Columns Example' />
      )}
    </section>
  );
};

export default memo(FreezeGroupingSection);

