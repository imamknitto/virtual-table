import { memo } from 'react';

const UsageTipsSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
      <div className='space-y-4'>
        <div className='border rounded-lg p-4 bg-blue-50 dark:bg-blue-950'>
          <h3 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>💡 Best Practices</h3>
          <ul className='text-sm text-blue-800 dark:text-blue-300 space-y-1'>
            <li>
              • Use <strong>search filters</strong> for text-based columns (names, emails, addresses)
            </li>
            <li>
              • Use <strong>selection filters</strong> for categorical data (status, department,
              type)
            </li>
            <li>
              • Use <strong>advanced filters</strong> for numeric data (salary, age, dates)
            </li>
            <li>
              • Always keep <strong>sort</strong> enabled for better user experience
            </li>
            <li>• Provide meaningful options for selection filters</li>
            <li>• Use custom headers to improve visual hierarchy</li>
            <li>• Choose appropriate header modes based on your use case</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950'>
          <h3 className='font-semibold text-yellow-900 dark:text-yellow-200 mb-2'>
            ⚠️ Important Notes
          </h3>
          <ul className='text-sm text-yellow-800 dark:text-yellow-300 space-y-1'>
            <li>
              • <code>filterSelectionOptions</code> is required for selection filters to work
            </li>
            <li>
              • Set <code>hideFilter</code> properties to <code>true</code> to hide specific filters
            </li>
            <li>• Global filter visibility can be toggled via the header action menu</li>
            <li>• Filter state is preserved when toggling visibility</li>
            <li>
              • Use <code>headerMode="double"</code> to show filters in a separate row
            </li>
            <li>• Custom headers should maintain consistent styling</li>
            <li>• Test filter combinations to ensure good UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(UsageTipsSection);

