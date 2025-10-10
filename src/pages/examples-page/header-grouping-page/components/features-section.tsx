import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Header Grouping Features</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Core Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Create logical groupings of related columns</li>
            <li>• Support for unlimited nesting levels</li>
            <li>• Automatic width calculation for grouped columns</li>
            <li>• Responsive header resizing with grouped columns</li>
            <li>• Works with all table features (filters, sorting, etc.)</li>
            <li>• Compatible with freeze columns (left/right)</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎨 Customization</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Custom group header captions</li>
            <li>• Individual column styling within groups</li>
            <li>• Flexible width distribution</li>
            <li>• Integration with freeze columns</li>
            <li>• TypeScript support for nested structures</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

