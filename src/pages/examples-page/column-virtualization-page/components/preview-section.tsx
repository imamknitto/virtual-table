import { memo, useState } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLE_VIRTUALIZED, CODE_EXAMPLE_NON_VIRTUALIZED } from '../utils/constants';
import type { User } from '../utils/types';
import { getVirtualizedHeaders, getNonVirtualizedHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

type PreviewSectionProps = {
  data: User[];
};

const PreviewSection = ({ data }: PreviewSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'virtualized' | 'non-virtualized'>('virtualized');
  
  const virtualizedHeaders = getVirtualizedHeaders();
  const nonVirtualizedHeaders = getNonVirtualizedHeaders();

  const currentHeaders = selectedMode === 'virtualized' ? virtualizedHeaders : nonVirtualizedHeaders;
  const currentCode = selectedMode === 'virtualized' ? CODE_EXAMPLE_VIRTUALIZED : CODE_EXAMPLE_NON_VIRTUALIZED;

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium'>Mode:</label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value as 'virtualized' | 'non-virtualized')}
              className='rounded-md border border-input bg-background px-3 py-1 text-sm'
            >
              <option value='virtualized'>Column Virtualized</option>
              <option value='non-virtualized'>Non-Virtualized</option>
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
          <h3 className='text-lg font-semibold mb-2'>
            {selectedMode === 'virtualized' ? 'Column Virtualization Enabled' : 'Column Virtualization Disabled'}
          </h3>
          <p className='text-sm text-muted-foreground mb-4'>
            {selectedMode === 'virtualized' 
              ? 'Only visible columns are rendered, providing better performance with many columns. Dynamic row height is disabled. This is the default mode.'
              : 'All columns are rendered at once, allowing for dynamic row height but may impact performance with many columns. Disable virtualization by setting enableColumnVirtualization={false}.'
            }
          </p>
          
          <div className='h-96'>
            <VirtualTable
              data={data}
              filterHeight={32}
              headerHeight={40}
              headerMode='double'
              headers={currentHeaders}
              rowHeight={32}
              rowKey='id'
              enableColumnVirtualization={selectedMode === 'virtualized'}
              useDynamicRowHeight={selectedMode === 'non-virtualized'}
            />
          </div>
        </div>

        {showCode && (
          <div>
            <CodeBlock 
              code={currentCode} 
              title={`${selectedMode === 'virtualized' ? 'Virtualized' : 'Non-Virtualized'} Columns Example`} 
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(PreviewSection);
