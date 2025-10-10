import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🖱️ Single Click</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Row selection and highlighting</li>
            <li>• Access to row data and position</li>
            <li>• Perfect for detail views</li>
            <li>• Conditional styling support</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🖱️🖱️ Double Click</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Quick edit mode activation</li>
            <li>• Modal or page navigation</li>
            <li>• Bypass expand button clicks</li>
            <li>• Full context information</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🖱️ Right Click</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Context menu positioning</li>
            <li>• Mouse coordinates provided</li>
            <li>• Action menus and shortcuts</li>
            <li>• Flexible menu implementations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

