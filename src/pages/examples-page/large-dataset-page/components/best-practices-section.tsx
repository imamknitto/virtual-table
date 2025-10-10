import { memo } from 'react';

const BestPracticesSection = () => {
  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Best Practices</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📊 Data Management</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Use memoization to prevent unnecessary data regeneration</li>
            <li>• Implement efficient filtering and sorting algorithms</li>
            <li>• Consider data pagination for datasets &gt; 1M records</li>
            <li>• Use freeze columns for important identifying information</li>
            <li>• Optimize data structure for better performance</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎯 User Experience</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Provide loading indicators for data generation</li>
            <li>• Show dataset size and loading progress</li>
            <li>• Implement search with debouncing</li>
            <li>• Use appropriate row heights for readability</li>
            <li>• Consider virtual scrolling for smooth performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(BestPracticesSection);

