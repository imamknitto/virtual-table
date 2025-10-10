import { memo } from 'react';
import { CODE_EXAMPLES } from '../utils';

const ImplementationGuideSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Implementation Guide</h2>
      <div className='space-y-4'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>1. Enable Server Filtering</h3>
          <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
            <code>{CODE_EXAMPLES.enableServerFilter}</code>
          </pre>
        </div>

        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>2. Handle Filter Changes</h3>
          <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
            <code>{CODE_EXAMPLES.handleFilterChanges}</code>
          </pre>
        </div>

        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>3. Server-Side Processing</h3>
          <p className='text-sm text-muted-foreground mb-2'>
            In your API endpoint, process the filter parameters:
          </p>
          <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
            <code>{CODE_EXAMPLES.serverSideProcessing}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default memo(ImplementationGuideSection);

