import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Header Customization</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Single and double header modes</li>
            <li>• Custom header cell rendering</li>
            <li>• Gradient backgrounds and icons</li>
            <li>• Interactive header controls</li>
            <li>• Responsive header layout</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔍 Filter Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Filter selection dropdowns</li>
            <li>• Predefined filter options</li>
            <li>• Dynamic filter toggling</li>
            <li>• Search and sort integration</li>
            <li>• Custom filter styling</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>👁️ Filter Visibility Control</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Individual filter type control</li>
            <li>• Search filter visibility</li>
            <li>• Selection filter visibility</li>
            <li>• Advanced filter visibility</li>
            <li>• Sort control visibility</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎛️ Configuration Options</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Per-column filter configuration</li>
            <li>• Dynamic filter option updates</li>
            <li>• Filter state preservation</li>
            <li>• Global filter toggle support</li>
            <li>• Flexible filter combinations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

