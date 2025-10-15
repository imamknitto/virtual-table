import { memo, useMemo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { useServerFilter } from '../hooks';
import { CODE_EXAMPLES, renderPostCount } from '../utils';
import { getUserHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

const PreviewSection = () => {
  const [showCode, setShowCode] = useState(false);
  const { data, loading, handleFilterChange } = useServerFilter();
  
  const headers = useMemo(() => {
    const baseHeaders = getUserHeaders();
    // Add renderCell for postCount
    return baseHeaders.map((header) =>
      header.key === 'postCount' ? { ...header, renderCell: renderPostCount } : header,
    );
  }, []);

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
          isLoading={loading}
          onChangeFilter={{
            sort: (key, sortBy) => handleFilterChange('sort', { key, order: sortBy }),
            search: (searchData) => handleFilterChange('search', searchData),
            selection: (selectionData) => handleFilterChange('selection', selectionData),
            advance: (advanceData) => handleFilterChange('advance', advanceData),
          }}
          rowHeight={32}
          rowKey='id'
          useServerFilter={{
            sort: true,
            search: true,
            selection: true,
            advance: true,
          }}
        />
      </div>

      {showCode && <CodeBlock code={CODE_EXAMPLES.main} title='Server Filter Implementation' />}
    </section>
  );
};

export default memo(PreviewSection);

