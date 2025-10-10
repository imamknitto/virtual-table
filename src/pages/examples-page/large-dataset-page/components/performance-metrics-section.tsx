import { memo } from 'react';

const PerformanceMetricsSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Performance Metrics</h2>
      <div className='border rounded-lg overflow-hidden'>
        <div className='bg-muted px-4 py-2 border-b'>
          <span className='text-sm font-medium'>Benchmark Results (1M records)</span>
        </div>
        <div className='p-4'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-green-600'>&lt; 100ms</div>
              <div className='text-sm text-muted-foreground'>Initial Render</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-600'>~2-5MB</div>
              <div className='text-sm text-muted-foreground'>Memory Usage</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-600'>60 FPS</div>
              <div className='text-sm text-muted-foreground'>Scroll Performance</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-orange-600'>&lt; 50ms</div>
              <div className='text-sm text-muted-foreground'>Search/Filter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PerformanceMetricsSection);

