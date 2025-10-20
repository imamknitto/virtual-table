import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLE, type Employee } from '../utils';
import CodeBlock from './code-block';
import { getEmployeeHeaders } from './table-headers';

type PreviewSectionProps = {
  data: Employee[];
};

const PreviewSection = ({ data }: PreviewSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getEmployeeHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='h-96'>
        <KnittoTable
          classNameCell={(rowData, rowIndex, columnIndex) => {
            if (columnIndex === 4) return 'bg-blue-50 dark:bg-blue-950';
            if (rowData.status === 'inactive') return 'opacity-60';
            if (rowIndex % 2 === 0) return 'bg-gray-50 dark:bg-gray-900';
            return '';
          }}
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          rowHeight={70}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLE} title='Custom Cell Rendering Example' />}
    </section>
  );
};

export default memo(PreviewSection);

