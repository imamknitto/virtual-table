import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Footer Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Automatic calculations (sum, average, count)</li>
            <li>• Custom footer components</li>
            <li>• Freeze columns support</li>
            <li>• Custom styling and colors</li>
            <li>• Interactive content support</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎨 Customization</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Flexible renderFooter function</li>
            <li>• Configurable footer height</li>
            <li>• TypeScript support</li>
            <li>• Responsive design</li>
            <li>• Performance optimized</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

