import { memo } from 'react';

const PerformanceTipsSection = () => {
  return (
    <section>
      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>⚡ Performance Tips</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Here are some best practices for implementing scrolling features efficiently:
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <div>
            <h4 className='font-medium mb-2'>Scroll Event Optimization</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Use throttling or debouncing for scroll events</li>
              <li>• Implement passive event listeners</li>
              <li>• Use requestAnimationFrame for smooth updates</li>
              <li>• Avoid heavy computations in scroll handlers</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-2'>Infinite Loading Best Practices</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Set appropriate threshold values (50-100px)</li>
              <li>• Implement loading states and error handling</li>
              <li>• Consider data pagination for very large datasets</li>
              <li>• Use virtual scrolling for optimal performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PerformanceTipsSection);

