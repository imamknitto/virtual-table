import { memo, useMemo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { BASIC_CODE_EXAMPLE, type SampleData } from '../utils';
import { getBasicHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';
import { CalculationFooter, TotalsFooter } from './footer-components';

type BasicFooterSectionProps = {
  data: SampleData[];
};

const BasicFooterSection = ({ data }: BasicFooterSectionProps) => {
  const [showCode, setShowCode] = useState(false);

  const headers = useMemo(
    () => getBasicHeaders(data, CalculationFooter, TotalsFooter),
    [data],
  );

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Basic Footer with Calculations</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='h-96 border rounded-lg overflow-hidden'>
        <KnittoTable
          classNameOuterTable='border-0'
          data={data}
          filterHeight={32}
          footerHeight={40}
          headerHeight={40}
          headerMode='double'
          headers={headers}
          rowHeight={32}
          rowKey='id'
          useFooter={true}
        />
      </div>

      {showCode && (
        <div className='mt-4'>
          <CodeBlock code={BASIC_CODE_EXAMPLE} title='Basic Footer Example' />
        </div>
      )}
    </section>
  );
};

export default memo(BasicFooterSection);

