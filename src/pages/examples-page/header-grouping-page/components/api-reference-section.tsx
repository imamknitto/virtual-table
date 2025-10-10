import { memo } from 'react';

const ApiReferenceSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Reference</h2>
      <div className='border rounded-lg overflow-hidden'>
        <div className='bg-muted px-4 py-2 border-b'>
          <span className='text-sm font-medium'>Header Grouping Props</span>
        </div>
        <div className='p-4 space-y-4'>
          <div>
            <h4 className='font-medium text-sm mb-2'>children</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Array of child headers that belong to this group. Each child can also have its own
              children for nested grouping.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>
              children?: Omit&lt;IHeader&lt;TData&gt;, 'freeze'&gt;[]
            </code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>key</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              <strong className='text-red-600 dark:text-red-400'>CRITICAL:</strong> For group
              headers, the key <strong>MUST</strong> start with{' '}
              <code className='bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-1 py-0.5 rounded text-xs'>
                group-header-
              </code>{' '}
              prefix. This is how the virtual table identifies and renders grouped headers.
            </p>
            <div className='mb-2 p-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded text-xs'>
              <strong>Examples:</strong>
              <br />✅ <code className='text-green-700 dark:text-green-400'>group-header-contact</code>
              <br />✅ <code className='text-green-700 dark:text-green-400'>group-header-financial</code>
              <br />❌ <code className='text-red-700 dark:text-red-400'>contact-info</code> (will be
              treated as regular column)
            </div>
            <code className='text-xs bg-muted px-2 py-1 rounded'>
              key: keyof TData | 'expand' | 'action' | 'row-selection' | (string & object)
            </code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>caption</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Display text for the group header. This appears in the top row of the grouped columns.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>caption: string</code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>width</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Total width of the group. This should equal the sum of all child column widths.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>width?: number</code>
          </div>
          <div>
            <h4 className='font-medium text-sm mb-2'>freeze</h4>
            <p className='text-sm text-muted-foreground mb-2'>
              Freeze the entire group to the left or right side of the table. Useful for keeping
              important grouped columns visible while scrolling.
            </p>
            <code className='text-xs bg-muted px-2 py-1 rounded'>freeze?: 'left' | 'right'</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ApiReferenceSection);

