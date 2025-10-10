import { memo, useMemo } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLE, type Employee, getEmployeeHeaders } from '../utils';
import CodeBlock from './code-block';

type PreviewSectionProps = {
  data: Employee[];
  headerMode: 'single' | 'double';
  customHeaderEnabled: boolean;
  filterSelectionEnabled: boolean;
  filterVisibilityEnabled: boolean;
  showCode: boolean;
  onToggleCode: () => void;
};

const PreviewSection = ({
  data,
  headerMode,
  customHeaderEnabled,
  filterSelectionEnabled,
  filterVisibilityEnabled,
  showCode,
  onToggleCode,
}: PreviewSectionProps) => {
  const headers = useMemo(
    () =>
      getEmployeeHeaders({
        data,
        customHeaderEnabled,
        filterSelectionEnabled,
        filterVisibilityEnabled,
      }),
    [data, customHeaderEnabled, filterSelectionEnabled, filterVisibilityEnabled],
  );

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Interactive Preview</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={onToggleCode}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='h-96 border rounded-lg overflow-hidden'>
        <VirtualTable
          classNameOuterTable='border-0'
          data={data}
          filterHeight={32}
          headerHeight={40}
          headerMode={headerMode}
          headers={headers}
          rowHeight={36}
          rowKey='id'
          useFooter={false}
        />
      </div>

      {showCode && (
        <div className='mt-4'>
          <CodeBlock code={CODE_EXAMPLE} title='Header & Filter Customization Example' />
        </div>
      )}
    </section>
  );
};

export default memo(PreviewSection);

