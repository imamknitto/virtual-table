import { memo } from 'react';
import { PERFORMANCE_DATA } from '../utils';
import { KnittoTable, type IHeader } from '../../../../components/knitto-table';

const performanceHeaders: IHeader<(typeof PERFORMANCE_DATA)[0]>[] = [
  { key: 'metric', caption: 'Metric', width: 200 },
  { key: 'value', caption: 'Value', width: 150 },
  { key: 'description', caption: 'Description', width: 300 },
];

const PerformanceOverview = () => {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Performance Overview</h2>
      <div className='mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
        <p className='text-sm text-blue-800'>
          <strong>Virtual Table Performance:</strong> The virtual table is specifically designed to
          handle massive datasets efficiently. It uses virtual scrolling to render only visible
          rows, maintaining constant memory usage regardless of dataset size.
        </p>
      </div>

      <div className='h-64'>
        <KnittoTable
          data={PERFORMANCE_DATA}
          filterHeight={32}
          headerHeight={40}
          headers={performanceHeaders}
          rowHeight={40}
          rowKey='metric'
        />
      </div>
    </section>
  );
};

export default memo(PerformanceOverview);

