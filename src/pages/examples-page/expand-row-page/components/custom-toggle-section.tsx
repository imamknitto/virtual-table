import { memo, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type Employee } from '../utils';
import { getCustomEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';
import { renderEmployeeExpandedContent } from './render-employee-content';

type CustomToggleSectionProps = {
  data: Employee[];
};

const CustomToggleSection = ({ data }: CustomToggleSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getCustomEmployeeHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Custom Expand Toggle</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg'>
        <p className='text-sm text-purple-800 dark:text-purple-200'>
          <strong>Example:</strong> Employee table with custom expand toggle buttons instead of
          default chevron icons.
        </p>
      </div>

      <div className='h-96'>
        <VirtualTable
          data={data.slice(0, 10)}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          onRenderExpandedContent={renderEmployeeExpandedContent}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.customToggle} title='Custom Expand Toggle Example' />
      )}
    </section>
  );
};

export default memo(CustomToggleSection);

