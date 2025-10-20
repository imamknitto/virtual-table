import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLE_BASIC, CODE_EXAMPLE_WITH_CUSTOM_CELL } from '../utils/constants';
import type { Product } from '../utils/types';
import { getBasicHeaders, getAdvancedHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type PreviewSectionProps = {
  data: Product[];
};

const PreviewSection = ({ data }: PreviewSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'basic' | 'advanced'>('basic');

  const basicHeaders = getBasicHeaders();
  const advancedHeaders = getAdvancedHeaders();

  const currentHeaders = selectedMode === 'basic' ? basicHeaders : advancedHeaders;
  const currentCode = selectedMode === 'basic' ? CODE_EXAMPLE_BASIC : CODE_EXAMPLE_WITH_CUSTOM_CELL;

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium'>Example:</label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value as 'basic' | 'advanced')}
              className='rounded-md border border-input bg-background px-3 py-1 text-sm'
            >
              <option value='basic'>Basic Example</option>
              <option value='advanced'>Advanced Example</option>
            </select>
          </div>
          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>
      </div>

      <div className='space-y-4'>
        <div className='rounded-lg border bg-muted/20 p-4'>
          <div className='mb-4 rounded-lg border border-yellow-500 bg-yellow-50 p-4'>
            <div className='flex items-start gap-2'>
              <span className='text-yellow-600 font-bold'>⚠️</span>
              <div>
                <h4 className='font-semibold text-yellow-800 mb-1'>Important Configuration</h4>
                <p className='text-sm text-yellow-700'>
                  To use dynamic row height, you must set{' '}
                  <code className='bg-yellow-100 px-1 py-0.5 rounded'>
                    enableColumnVirtualization=&#123;false&#125;
                  </code>{' '}
                  and{' '}
                  <code className='bg-yellow-100 px-1 py-0.5 rounded'>
                    useDynamicRowHeight=&#123;true&#125;
                  </code>
                </p>
              </div>
            </div>
          </div>

          <h3 className='text-lg font-semibold mb-2'>
            {selectedMode === 'basic' ? 'Basic Dynamic Row Height' : 'Advanced with Multiple Line Content'}
          </h3>
          <p className='text-sm text-muted-foreground mb-4'>
            {selectedMode === 'basic'
              ? 'Simple example with one dynamic column that expands based on content length.'
              : 'Advanced example with multiple dynamic columns including lists and multi-line text.'}
          </p>

          <div className='h-[500px]'>
            <KnittoTable
              data={data}
              filterHeight={32}
              headerHeight={40}
              headerMode='double'
              headers={currentHeaders}
              rowHeight={32}
              rowKey='id'
              enableColumnVirtualization={false}
              useDynamicRowHeight={true}
            />
          </div>
        </div>

        {showCode && (
          <div>
            <CodeBlock
              code={currentCode}
              title={`${selectedMode === 'basic' ? 'Basic' : 'Advanced'} Dynamic Row Height Example`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(PreviewSection);
