import { memo } from 'react';

const FilterConfigSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Filter Configuration Examples</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📊 Column Filter Configurations</h3>
          <div className='space-y-2 text-sm'>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                ID
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort only</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                Name
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort + Search</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                Company
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort + Search + Selection</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                Department
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort + Selection</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                Experience
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort + Selection + Advanced</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='w-16 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                Salary
              </span>
              <span className='text-gray-600 dark:text-gray-400'>Sort + Advanced</span>
            </div>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎛️ Filter Control Options</h3>
          <div className='space-y-2 text-sm'>
            <div className='flex items-center gap-2'>
              <code className='text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                sort: false
              </code>
              <span className='text-gray-600 dark:text-gray-400'>Show sort controls</span>
            </div>
            <div className='flex items-center gap-2'>
              <code className='text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                search: false
              </code>
              <span className='text-gray-600 dark:text-gray-400'>Show search input</span>
            </div>
            <div className='flex items-center gap-2'>
              <code className='text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                filterSelection: false
              </code>
              <span className='text-gray-600 dark:text-gray-400'>Show selection dropdown</span>
            </div>
            <div className='flex items-center gap-2'>
              <code className='text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded'>
                filterAdvance: false
              </code>
              <span className='text-gray-600 dark:text-gray-400'>Show advanced filter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FilterConfigSection);

