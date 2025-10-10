import { memo } from 'react';

const AdvancedFeaturesSection = () => {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Advanced Features</h2>
      </div>

      <div className='mb-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg'>
        <p className='text-sm text-indigo-800'>
          <strong>Advanced Techniques:</strong> Explore server-side pagination, progressive
          loading, background data processing, and other advanced patterns for handling massive
          datasets.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔄 Server-Side Pagination</h3>
          <p className='text-sm text-muted-foreground'>
            Load data in chunks from the server to handle datasets larger than available memory.
          </p>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📈 Progressive Loading</h3>
          <p className='text-sm text-muted-foreground'>
            Load more data as the user scrolls, providing infinite scroll functionality.
          </p>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚙️ Background Processing</h3>
          <p className='text-sm text-muted-foreground'>
            Use Web Workers to process large datasets without blocking the main thread.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(AdvancedFeaturesSection);

