import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎨 Custom Components</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Status badges with color coding</li>
            <li>• Progress bars with dynamic colors</li>
            <li>• Avatar cells with initials</li>
            <li>• Action buttons with state management</li>
            <li>• Skills tags and formatted values</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚡ Performance & Styling</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Efficient virtualization with custom cells</li>
            <li>• Conditional styling based on data</li>
            <li>• Lightweight components for optimal performance</li>
            <li>• TypeScript support with proper typing</li>
            <li>• Responsive design patterns</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

