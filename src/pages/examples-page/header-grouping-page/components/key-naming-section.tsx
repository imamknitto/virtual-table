import { memo } from 'react';

const KeyNamingSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Key Naming Convention</h2>
      <div className='mb-6 p-6 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg'>
        <div className='flex items-start space-x-3'>
          <div className='flex-shrink-0'>
            <div className='w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center'>
              <span className='text-white text-sm font-bold'>!</span>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>
              Important: Key Naming for Group Headers
            </h3>
            <p className='text-sm text-yellow-700 dark:text-yellow-300 mb-3'>
              To create a header group, you <strong>MUST</strong> use a key that starts with{' '}
              <code className='bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-xs font-mono'>
                group-header-
              </code>{' '}
              prefix.
            </p>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-600 dark:text-green-400 font-bold'>✅</span>
                <code className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-mono'>
                  group-header-contact
                </code>
                <span className='text-sm text-yellow-700 dark:text-yellow-300'>- Creates a group header</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-green-600 dark:text-green-400 font-bold'>✅</span>
                <code className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-mono'>
                  group-header-financial
                </code>
                <span className='text-sm text-yellow-700 dark:text-yellow-300'>- Creates a group header</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-red-600 dark:text-red-400 font-bold'>❌</span>
                <code className='bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-mono'>
                  contact-info
                </code>
                <span className='text-sm text-yellow-700 dark:text-yellow-300'>
                  - Will be treated as regular column
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-red-600 dark:text-red-400 font-bold'>❌</span>
                <code className='bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-mono'>
                  financial-data
                </code>
                <span className='text-sm text-yellow-700 dark:text-yellow-300'>
                  - Will be treated as regular column
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔑 Key Requirements</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>
              • Must start with{' '}
              <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-</code>
            </li>
            <li>• Must be unique across all headers</li>
            <li>• Cannot be a data property key</li>
            <li>• Use descriptive names after the prefix</li>
            <li>• Follow kebab-case convention</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📝 Naming Examples</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>
              • <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-contact</code>
            </li>
            <li>
              •{' '}
              <code className='bg-muted px-1 py-0.5 rounded text-xs'>
                group-header-personal-info
              </code>
            </li>
            <li>
              •{' '}
              <code className='bg-muted px-1 py-0.5 rounded text-xs'>
                group-header-quarterly-sales
              </code>
            </li>
            <li>
              •{' '}
              <code className='bg-muted px-1 py-0.5 rounded text-xs'>
                group-header-performance-metrics
              </code>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(KeyNamingSection);

