import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Freeze Column Features</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔒 Left Freeze</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Keep important columns visible when scrolling horizontally</li>
            <li>• Perfect for ID, Name, or primary identifiers</li>
            <li>• Maintains sticky positioning on the left side</li>
            <li>• Supports custom cell rendering</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔒 Right Freeze</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Keep action columns or totals always visible</li>
            <li>• Ideal for status, actions, or calculated values</li>
            <li>• Sticky positioning on the right side</li>
            <li>• Works seamlessly with virtual scrolling</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

