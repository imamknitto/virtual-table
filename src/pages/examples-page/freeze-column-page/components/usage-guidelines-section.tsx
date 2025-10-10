import { memo } from 'react';

const UsageGuidelinesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Guidelines</h2>
      <div className='space-y-4'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>💡 Best Practices</h3>
          <ul className='text-sm text-muted-foreground space-y-2'>
            <li>
              <strong>Left Freeze:</strong> Use for primary identifiers (ID, Name) that users need
              to reference while scrolling
            </li>
            <li>
              <strong>Right Freeze:</strong> Use for action buttons, status indicators, or summary
              data
            </li>
            <li>
              <strong>Performance:</strong> Freeze columns don't affect virtual scrolling performance
            </li>
            <li>
              <strong>Responsive:</strong> Freeze columns maintain their behavior across different
              screen sizes
            </li>
          </ul>
        </div>

        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚙️ Implementation</h3>
          <ul className='text-sm text-muted-foreground space-y-2'>
            <li>
              Add <code className='bg-muted px-1 py-0.5 rounded text-xs'>freeze: 'left'</code> or{' '}
              <code className='bg-muted px-1 py-0.5 rounded text-xs'>freeze: 'right'</code> to your
              header configuration
            </li>
            <li>You can have multiple left-freeze columns (they stack from left to right)</li>
            <li>You can have multiple right-freeze columns (they stack from right to left)</li>
            <li>Regular columns scroll normally between the frozen sections</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(UsageGuidelinesSection);

