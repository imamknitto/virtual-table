import { memo } from 'react';

const FilterTypesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Filter Types Overview</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='border rounded-lg p-4 bg-blue-50 dark:bg-blue-950'>
          <h3 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>🔍 Search Filter</h3>
          <p className='text-sm text-blue-800 dark:text-blue-300 mb-2'>Text-based search input</p>
          <p className='text-xs text-blue-600 dark:text-blue-400'>
            Use for: Names, emails, addresses
          </p>
        </div>
        <div className='border rounded-lg p-4 bg-green-50 dark:bg-green-950'>
          <h3 className='font-semibold text-green-900 dark:text-green-200 mb-2'>
            📋 Selection Filter
          </h3>
          <p className='text-sm text-green-800 dark:text-green-300 mb-2'>Multi-select dropdown</p>
          <p className='text-xs text-green-600 dark:text-green-400'>
            Use for: Categories, status, departments
          </p>
        </div>
        <div className='border rounded-lg p-4 bg-purple-50 dark:bg-purple-950'>
          <h3 className='font-semibold text-purple-900 dark:text-purple-200 mb-2'>
            ⚡ Advanced Filter
          </h3>
          <p className='text-sm text-purple-800 dark:text-purple-300 mb-2'>
            Complex filtering options
          </p>
          <p className='text-xs text-purple-600 dark:text-purple-400'>
            Use for: Numbers, dates, custom logic
          </p>
        </div>
        <div className='border rounded-lg p-4 bg-orange-50 dark:bg-orange-950'>
          <h3 className='font-semibold text-orange-900 dark:text-orange-200 mb-2'>
            🔄 Sort Filter
          </h3>
          <p className='text-sm text-orange-800 dark:text-orange-300 mb-2'>
            Ascending/descending sort
          </p>
          <p className='text-xs text-orange-600 dark:text-orange-400'>Use for: All sortable columns</p>
        </div>
      </div>
    </section>
  );
};

export default memo(FilterTypesSection);

