import { Link } from 'react-router-dom';

export const IntroductionPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Introduction</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Welcome to the official documentation for Knitto Virtual Table.
        </p>
      </div>

      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>What is Knitto Virtual Table?</h2>
          <p className='text-muted-foreground mt-2'>
            Knitto Virtual Table is a high-performance, feature-rich virtual table component for React
            applications. Built with TypeScript and powered by @tanstack/react-virtual, it's designed to
            efficiently render massive datasets by only rendering the rows and columns visible in the
            viewport, providing smooth scrolling and optimal performance even with millions of rows.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Key Features</h2>
          <div className='grid gap-4 md:grid-cols-2 mt-4'>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>High Performance</h3>
                  <p className='text-sm text-muted-foreground'>
                    Virtualization ensures smooth scrolling with large datasets
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>Customizable</h3>
                  <p className='text-sm text-muted-foreground'>Flexible styling and theming options</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>TypeScript Support</h3>
                  <p className='text-sm text-muted-foreground'>
                    Full TypeScript support with type definitions
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>Advanced Filtering</h3>
                  <p className='text-sm text-muted-foreground'>
                    Search, selection, and advanced filtering with multiple operators
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>Column Management</h3>
                  <p className='text-sm text-muted-foreground'>
                    Freeze columns, resize, hide/show, and nested headers
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <svg className='w-3 h-3 text-primary' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='font-semibold'>Row Selection</h3>
                  <p className='text-sm text-muted-foreground'>
                    Single and multi-row selection with checkbox support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>When to Use</h2>
          <div className='mt-4 space-y-4'>
            <div className='p-4 border rounded-lg'>
              <h3 className='font-semibold mb-2'>✅ Perfect for:</h3>
              <ul className='space-y-1 text-sm text-muted-foreground'>
                <li>• Large datasets (1,000+ rows)</li>
                <li>• Data-heavy applications</li>
                <li>• Real-time data updates</li>
                <li>• Financial or analytics dashboards</li>
                <li>• Admin panels with large tables</li>
              </ul>
            </div>

            <div className='p-4 border rounded-lg'>
              <h3 className='font-semibold mb-2'>⚠️ Consider alternatives for:</h3>
              <ul className='space-y-1 text-sm text-muted-foreground'>
                <li>• Simple tables with &lt; 100 rows</li>
                <li>• Static data that rarely changes</li>
                <li>• Tables with complex nested structures</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>🚀 Ready to get started?</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Follow our installation guide to add Knitto Virtual Table to your project and start building
          high-performance data tables.
        </p>
        <Link
          to='/docs/installation'
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
