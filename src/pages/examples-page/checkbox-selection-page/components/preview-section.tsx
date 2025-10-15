import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLE, type Employee } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type PreviewSectionProps = {
  data: Employee[];
  onCheckboxSelection: (
    selectedRows: (string | number)[],
    deselectedRows: (string | number)[],
    isSelectAll: boolean,
  ) => void;
};

const PreviewSection = ({ data, onCheckboxSelection }: PreviewSectionProps) => {
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
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          onChangeCheckboxRowSelection={onCheckboxSelection}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLE} title='Checkbox Selection Example' />}
    </section>
  );
};

export default memo(PreviewSection);

