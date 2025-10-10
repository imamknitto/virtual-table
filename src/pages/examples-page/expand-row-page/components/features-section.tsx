import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Expand Row Features</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Core Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Click expand button to show/hide row details</li>
            <li>• Custom expand content with any React components</li>
            <li>• Nested tables and complex layouts supported</li>
            <li>• Smooth expand/collapse animations</li>
            <li>• Virtual scrolling works with expanded rows</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎨 Customization</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Custom expand toggle buttons</li>
            <li>• Flexible content rendering</li>
            <li>• Styled expand content areas</li>
            <li>• Integration with existing table features</li>
            <li>• TypeScript support for all props</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

