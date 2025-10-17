import { useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { generateEmployeeData } from '../utils/data-generator';
import { getEmployeeHeaders } from '../utils/table-headers';

function PreviewSection() {
  const [showCode, setShowCode] = useState(false);

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

      <div className='h-80'>
        <KnittoTable useRegularTable data={generateEmployeeData()} headers={getEmployeeHeaders()} rowKey='id' />
      </div>
    </section>
  );
}

export default PreviewSection;
