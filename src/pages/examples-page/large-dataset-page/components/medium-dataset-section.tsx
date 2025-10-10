import { memo, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type EmployeeData } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type MediumDatasetSectionProps = {
  data: EmployeeData[];
};

const MediumDatasetSection = ({ data }: MediumDatasetSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getEmployeeHeaders();

  return (
    <section className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Medium Dataset (10,000 records)</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
        <p className='text-sm text-green-800'>
          <strong>Example:</strong> 10,000 employee records with freeze columns for ID and Name.
          This demonstrates smooth performance with a substantial dataset.
        </p>
      </div>

      <div className='h-96'>
        <VirtualTable
          data={data}
          filterHeight={32}
          headerHeight={40}
          headers={headers}
          rowHeight={32}
          rowKey='id'
        />
      </div>

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.basicUsage} title='Basic Large Dataset Implementation' />
      )}
    </section>
  );
};

export default memo(MediumDatasetSection);

