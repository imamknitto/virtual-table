import { Link } from 'react-router-dom';

const ExamplesPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Examples</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Explore real-world examples and use cases for Knitto Table.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {/* Basic Usage Example */}
        <div className='rounded-lg border bg-card p-6'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold'>Basic Usage</h3>
          </div>
          <p className='text-sm text-muted-foreground mb-4'>
            Simple table with basic columns and data. Perfect for getting started.
          </p>
          <Link
            to='/docs/examples/basic-usage'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            View Example
            <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>

        {/* Large Dataset Example */}
        <div className='rounded-lg border bg-card p-6'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold'>Large Dataset</h3>
          </div>
          <p className='text-sm text-muted-foreground mb-4'>
            Handle thousands of rows with smooth scrolling and optimal performance.
          </p>
          <Link
            to='/docs/examples/large-dataset'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            View Example
            <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>

        {/* Column Virtualization Example */}
        <div className='rounded-lg border bg-card p-6'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold'>Column Virtualization</h3>
          </div>
          <p className='text-sm text-muted-foreground mb-4'>
            Enable or disable column virtualization to optimize performance and enable advanced features.
          </p>
          <Link
            to='/docs/examples/column-virtualization'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            View Example
            <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>

        {/* Dynamic Row Height Example */}
        <div className='rounded-lg border bg-card p-6'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold'>Dynamic Row Height</h3>
          </div>
          <p className='text-sm text-muted-foreground mb-4'>
            Enable dynamic row heights for flexible content display with automatic height adjustment.
          </p>
          <Link
            to='/docs/examples/dynamic-row-height'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            View Example
            <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>

        {/* Sorting & Filtering Example */}
        <div className='rounded-lg border bg-card p-6'>
          <div className='flex items-center space-x-2 mb-4'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <svg className='w-4 h-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold'>Sorting & Filtering</h3>
          </div>
          <p className='text-sm text-muted-foreground mb-4'>
            Advanced data manipulation with sorting and filtering capabilities.
          </p>
          <Link
            to='/docs/examples/header-customization'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            View Example
            <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Want to contribute?</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Have an interesting use case or example? We'd love to see it! Submit your example to help others
          learn.
        </p>
        <a
          href='https://github.com'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
        >
          Submit Example
        </a>
      </div>
    </div>
  );
};

export default ExamplesPage;
