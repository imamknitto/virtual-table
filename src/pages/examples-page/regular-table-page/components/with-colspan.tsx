import { memo, useMemo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { generateEmployeeData } from '../utils/data-generator';
import { getEmployeeHeaders } from '../utils/table-headers';
import { CODE_EXAMPLE_WITH_COLSPAN } from '../utils/contstants';
import CodeBlock from './code-block';

function WithColspan() {
  const [showCode, setShowCode] = useState(false);

  const data = useMemo(() => generateEmployeeData(), []);
  const headers = useMemo(() => getEmployeeHeaders({ withColspan: true }), []);

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>With Group Header (Colspan)</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='h-80'>
        <KnittoTable useRegularTable data={data} headers={headers} rowKey='id' />
      </div>

      {showCode && (
        <div className='mt-4'>
          <CodeBlock code={CODE_EXAMPLE_WITH_COLSPAN} title='Regular Table with Group Headers (Colspan) Example' />
        </div>
      )}
    </section>
  );
}

export default memo(WithColspan);
