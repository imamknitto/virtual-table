import { memo } from 'react';

const ApiReferenceSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Reference</h2>
      <div className='border rounded-lg overflow-hidden'>
        <div className='bg-muted px-4 py-2 border-b'>
          <span className='text-sm font-medium'>Expand Row Props</span>
        </div>
        <div className='p-4 space-y-4'>
          <div>
            <h4 className='font-medium text-sm mb-2'>onRenderExpandedContent</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Function that renders the expanded content for each row.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>
              onRenderExpandedContent?: (item: TData) =&gt; React.ReactNode
            </code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>renderExpandToggle</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Custom function to render the expand/collapse toggle button.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>
              renderExpandToggle?: (item: TData, isExpanded: boolean) =&gt; React.ReactNode
            </code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>onRowExpand</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Callback function called when a row is expanded or collapsed.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>
              onRowExpand?: (item: TData) =&gt; void
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ApiReferenceSection);

