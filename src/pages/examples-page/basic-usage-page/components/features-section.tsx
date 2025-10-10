import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Core Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Virtual scrolling for performance</li>
            <li>• Column resizing</li>
            <li>• Sorting (click column headers)</li>
            <li>• Search functionality</li>
            <li>• Filter visibility toggle</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎨 Customization</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Custom cell rendering</li>
            <li>• Configurable row heights</li>
            <li>• Header modes (single/double)</li>
            <li>• Responsive design</li>
            <li>• TypeScript support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

