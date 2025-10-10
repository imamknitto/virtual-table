import { memo } from 'react';

const FeaturesOverviewSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Scrolling Features Overview</h2>
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📊 Scroll Tracking</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Real-time scroll position tracking</li>
            <li>• Both vertical and horizontal scroll</li>
            <li>• Perfect for analytics and UX features</li>
            <li>• Optimized with throttling</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎯 Programmatic Control</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Access table scroll element via ref</li>
            <li>• Smooth scrolling animations</li>
            <li>• Precise position control</li>
            <li>• Great for navigation features</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>♾️ Infinite Loading</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Bottom detection with threshold</li>
            <li>• Performance optimized</li>
            <li>• Throttled to prevent spam</li>
            <li>• Perfect for large datasets</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesOverviewSection);

