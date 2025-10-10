import { memo } from 'react';

const MemoryManagementSection = () => {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Memory Management</h2>
      </div>

      <div className='mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg'>
        <p className='text-sm text-purple-800'>
          <strong>Memory Optimization:</strong> Learn advanced techniques for managing memory usage
          with very large datasets, including lazy loading, progressive loading, and background
          processing.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🧠 Memory Benefits</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Only visible rows are rendered in DOM</li>
            <li>• Constant memory usage regardless of dataset size</li>
            <li>• Automatic cleanup of off-screen elements</li>
            <li>• Efficient garbage collection</li>
            <li>• No memory leaks with proper implementation</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚡ Performance Tips</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Use memoization for data generation</li>
            <li>• Implement debounced search/filtering</li>
            <li>• Freeze important columns for better UX</li>
            <li>• Use fixed row heights for optimal performance</li>
            <li>• Consider server-side pagination for 1M+ records</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(MemoryManagementSection);

