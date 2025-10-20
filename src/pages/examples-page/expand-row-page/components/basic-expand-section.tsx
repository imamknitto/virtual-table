import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';
import { renderEmployeeExpandedContent } from './render-employee-content';

type BasicExpandSectionProps = {
  data: Employee[];
};

const BasicExpandSection = ({ data }: BasicExpandSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getEmployeeHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Basic Expand Row</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg'>
        <p className='text-sm text-blue-800 dark:text-blue-200'>
          <strong>Example:</strong> Employee table with expandable rows showing detailed personal
          information, skills, and current projects.
        </p>
      </div>

      <div className='h-96'>
        <KnittoTable
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          onRenderExpandedContent={renderEmployeeExpandedContent}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLES.basicExpand} title='Basic Expand Row Example' />}
    </section>
  );
};

export default memo(BasicExpandSection);

