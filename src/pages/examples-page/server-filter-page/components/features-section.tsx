import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Server Filter Features</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🚀 Performance Benefits</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Server-side filtering reduces client-side processing</li>
            <li>• Handles large datasets efficiently</li>
            <li>• Optimized database queries</li>
            <li>• Reduced network payload</li>
            <li>• Better memory management</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔧 Filter Types</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>
              • <strong>Search:</strong> Text-based filtering
            </li>
            <li>
              • <strong>Selection:</strong> Multi-select dropdown filters
            </li>
            <li>
              • <strong>Advanced:</strong> Complex filter conditions
            </li>
            <li>
              • <strong>Sorting:</strong> Server-side column sorting
            </li>
            <li>
              • <strong>Combined:</strong> Multiple filters simultaneously
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

