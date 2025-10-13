import { memo } from 'react';

const ConfigurationSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-6'>Configuration Requirements</h2>

      <div className='space-y-6'>
        {/* Required Props */}
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
            <span className='text-red-500'>*</span>
            Required Props
          </h3>

          <div className='space-y-4'>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <code className='bg-muted px-2 py-1 rounded text-sm font-mono'>
                  enableColumnVirtualization=&#123;false&#125;
                </code>
                <span className='text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded'>Required</span>
              </div>
              <p className='text-sm text-muted-foreground ml-2'>
                Column virtualization must be disabled to use dynamic row heights. This is because dynamic
                heights require all columns to be rendered for proper measurement.
              </p>
            </div>

            <div>
              <div className='flex items-center gap-2 mb-2'>
                <code className='bg-muted px-2 py-1 rounded text-sm font-mono'>
                  useDynamicRowHeight=&#123;true&#125;
                </code>
                <span className='text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded'>Required</span>
              </div>
              <p className='text-sm text-muted-foreground ml-2'>
                Enables the dynamic row height feature. The table will automatically measure and adjust row
                heights based on content.
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className='rounded-lg border bg-card p-6'>
          <h3 className='text-lg font-semibold mb-4'>Best Practices</h3>

          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <div>
                <h4 className='font-medium text-sm mb-1'>Use Custom Cell Renderers</h4>
                <p className='text-sm text-muted-foreground'>
                  Implement <code className='bg-muted px-1 rounded text-xs'>renderCell</code> to control how
                  content wraps and displays.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <div>
                <h4 className='font-medium text-sm mb-1'>Add Padding to Dynamic Cells</h4>
                <p className='text-sm text-muted-foreground'>
                  Include vertical padding (py-2 or similar) to ensure proper spacing around dynamic content.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <div>
                <h4 className='font-medium text-sm mb-1'>Use whitespace-normal for Text Wrapping</h4>
                <p className='text-sm text-muted-foreground'>
                  Apply <code className='bg-muted px-1 rounded text-xs'>whitespace-normal</code> and{' '}
                  <code className='bg-muted px-1 rounded text-xs'>break-words</code> classes for proper text
                  wrapping.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <span className='text-green-500 mt-1'>✓</span>
              <div>
                <h4 className='font-medium text-sm mb-1'>Combine with Freeze Columns</h4>
                <p className='text-sm text-muted-foreground'>
                  Dynamic row height works perfectly with frozen columns for better UX.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className='rounded-lg border border-yellow-200 bg-yellow-50 p-6'>
          <h3 className='text-lg font-semibold mb-4 text-yellow-800'>Limitations</h3>

          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <span className='text-yellow-600 mt-1'>⚠️</span>
              <div>
                <h4 className='font-medium text-sm mb-1 text-yellow-800'>
                  Cannot Use with Column Virtualization
                </h4>
                <p className='text-sm text-yellow-700'>
                  If you enable column virtualization, dynamic row height will not work. Choose based on your
                  needs: performance (column virtualization) or flexibility (dynamic heights).
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <span className='text-yellow-600 mt-1'>⚠️</span>
              <div>
                <h4 className='font-medium text-sm mb-1 text-yellow-800'>Performance Consideration</h4>
                <p className='text-sm text-yellow-700'>
                  With many columns, rendering all columns (required for dynamic height) may impact performance.
                  Best used with moderate column counts (&lt; 15 columns).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ConfigurationSection);
