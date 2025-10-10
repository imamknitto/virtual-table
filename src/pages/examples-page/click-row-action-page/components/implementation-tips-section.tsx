import { memo } from 'react';

const ImplementationTipsSection = () => {
  return (
    <section>
      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Implementation Tips</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Here are some best practices for implementing click row actions:
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <div>
            <h4 className='font-medium mb-2'>Event Handling</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • Use <code className='bg-muted px-1 rounded'>onClickRow</code> for selection
              </li>
              <li>
                • Use <code className='bg-muted px-1 rounded'>onDoubleClickRow</code> for quick
                actions
              </li>
              <li>
                • Use <code className='bg-muted px-1 rounded'>onRightClickRow</code> for context
                menus
              </li>
              <li>• All handlers receive row data and position info</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium mb-2'>Visual Feedback</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • Use <code className='bg-muted px-1 rounded'>classNameCell</code> for highlighting
              </li>
              <li>• Apply different styles for different states</li>
              <li>• Consider accessibility with color contrast</li>
              <li>• Provide clear visual cues for interactions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ImplementationTipsSection);

