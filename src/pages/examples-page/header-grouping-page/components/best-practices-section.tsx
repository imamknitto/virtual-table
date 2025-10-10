import { memo } from 'react';

const BestPracticesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Best Practices</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📋 Header Design</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>
              • <strong className='text-red-600 dark:text-red-400'>ALWAYS</strong> use{' '}
              <code className='bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-1 py-0.5 rounded text-xs'>
                group-header-
              </code>{' '}
              prefix for group keys
            </li>
            <li>• Use descriptive group names that clearly indicate content</li>
            <li>• Keep group names concise but meaningful</li>
            <li>• Limit nesting to 2-3 levels for better readability</li>
            <li>• Ensure consistent width distribution within groups</li>
            <li>• Consider user workflow when organizing columns</li>
            <li>• Freeze important groups (like ID, Name) for better UX</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚡ Performance</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Group headers don't impact virtual scrolling performance</li>
            <li>• Width calculations are optimized for grouped columns</li>
            <li>• Resize operations work efficiently with nested structures</li>
            <li>• Filter and sort operations work seamlessly with groups</li>
            <li>• Memory usage remains optimal with complex groupings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(BestPracticesSection);

