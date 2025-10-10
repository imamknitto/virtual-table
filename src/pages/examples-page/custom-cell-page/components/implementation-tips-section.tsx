import { memo } from 'react';

const ImplementationTipsSection = () => {
  return (
    <section>
      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Implementation Tips</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Here are some best practices for creating custom cells:
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <div>
            <h4 className='font-medium mb-2'>Custom Cell Rendering</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • Use <code className='bg-muted px-1 rounded'>renderCell</code> prop for custom
                content
              </li>
              <li>
                • Access row data:{' '}
                <code className='bg-muted px-1 rounded'>
                  renderCell: (data) =&gt; &lt;Component /&gt;
                </code>
              </li>
              <li>• Keep components lightweight for performance</li>
              <li>• Use React.memo for complex components</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-2'>Conditional Styling</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • Use <code className='bg-muted px-1 rounded'>classNameCell</code> for dynamic
                styling
              </li>
              <li>• Apply styles based on data values</li>
              <li>• Consider row and column indices</li>
              <li>• Use Tailwind CSS for consistent styling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ImplementationTipsSection);

