import { memo } from 'react';

const UsageTipsSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
      <div className='space-y-4'>
        <div className='border rounded-lg p-4 bg-blue-50 dark:bg-blue-950'>
          <h3 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>💡 Pro Tips</h3>
          <ul className='text-sm text-blue-800 dark:text-blue-300 space-y-1'>
            <li>• Use `hideHeaderAction: true` and `hideFilter` to clean up the checkbox column</li>
            <li>
              • The `onChangeCheckboxRowSelection` callback provides three parameters: selected
              rows, deselected rows, and select all status
            </li>
            <li>
              • When `isSelectAll` is true, individual selections are tracked as deselected rows
            </li>
            <li>• You can implement bulk actions using the selection state</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950'>
          <h3 className='font-semibold text-yellow-900 dark:text-yellow-200 mb-2'>
            ⚠️ Important Notes
          </h3>
          <ul className='text-sm text-yellow-800 dark:text-yellow-300 space-y-1'>
            <li>• The `row-selection` key is reserved for checkbox functionality</li>
            <li>• Make sure your `rowKey` is unique for each row</li>
            <li>• Selection state is managed internally by the component</li>
            <li>• Use the callback to sync with your application state</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(UsageTipsSection);

