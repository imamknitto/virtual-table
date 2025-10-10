import { memo, useState, useCallback } from 'react';
import { VirtualTable } from '../../../../components/virtual-table';
import { CODE_EXAMPLES, type EmployeeData, generateDatasetAsync } from '../utils';
import { getEmployeeHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';

const LargeDatasetSection = () => {
  const [showCode, setShowCode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [data, setData] = useState<EmployeeData[]>([]);
  const headers = getEmployeeHeaders();

  const handleGenerateDataset = useCallback(async () => {
    setIsGenerating(true);
    const generatedData = await generateDatasetAsync(100000);
    setData(generatedData);
    setIsGenerating(false);
  }, []);

  return (
    <section className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Large Dataset (100,000 records)</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg'>
        <p className='text-sm text-orange-800'>
          <strong>Example:</strong> 100,000 employee records. Click the button below to generate
          the dataset. Notice how the table maintains smooth performance even with this large
          dataset.
        </p>
      </div>

      <div className='mb-4 flex items-center space-x-4'>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          disabled={isGenerating}
          onClick={handleGenerateDataset}
        >
          {isGenerating ? 'Generating...' : 'Generate 100K Records'}
        </button>
        {data.length > 0 && (
          <span className='text-sm text-muted-foreground'>
            Loaded: {data.length.toLocaleString()} records
          </span>
        )}
      </div>

      {data.length > 0 && (
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
      )}

      {showCode && (
        <CodeBlock code={CODE_EXAMPLES.optimization} title='Performance Optimization Techniques' />
      )}
    </section>
  );
};

export default memo(LargeDatasetSection);

