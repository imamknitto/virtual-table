import { Link } from 'react-router-dom';

export const InstallationPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Installation</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Get started with Knitto Table in your project.
        </p>
      </div>

      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>npm</h2>
          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto'>
                <code className='text-sm'>npm install knitto-virtual-table</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>yarn</h2>
          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto'>
                <code className='text-sm'>yarn add knitto-virtual-table</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>pnpm</h2>
          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto'>
                <code className='text-sm'>pnpm add knitto-virtual-table</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>Peer Dependencies</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Knitto Table requires the following peer dependencies:
        </p>
        <ul className='space-y-2 text-sm'>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary rounded-full mr-3'></span>
            React 18.0.0 or higher
          </li>
          <li className='flex items-center'>
            <span className='w-2 h-2 bg-primary rounded-full mr-3'></span>
            @tanstack/react-virtual 3.0.0 or higher
          </li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Next Steps</h2>
        <p className='text-muted-foreground'>
          Once you've installed the package, you can start using it in your project. Check out the{' '}
          <Link to='/docs/quick-start' className='text-primary hover:underline'>
            Quick Start
          </Link>{' '}
          guide to get up and running quickly.
        </p>
      </div>

      {/* Additional content to test scrolling */}
      <div className='space-y-6 mt-12'>
        <h2 className='text-2xl font-semibold tracking-tight'>Additional Information</h2>

        <section>
          <h3 className='text-xl font-semibold mb-4'>System Requirements</h3>
          <div className='space-y-3'>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>Node.js</h4>
              <p className='text-sm text-muted-foreground'>Version 16.0.0 or higher is required.</p>
            </div>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>React</h4>
              <p className='text-sm text-muted-foreground'>Version 18.0.0 or higher is required.</p>
            </div>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>TypeScript</h4>
              <p className='text-sm text-muted-foreground'>Version 4.5.0 or higher is recommended.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-xl font-semibold mb-4'>Browser Support</h3>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>Modern Browsers</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Chrome 90+</li>
                <li>• Firefox 88+</li>
                <li>• Safari 14+</li>
                <li>• Edge 90+</li>
              </ul>
            </div>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>Mobile Browsers</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• iOS Safari 14+</li>
                <li>• Chrome Mobile 90+</li>
                <li>• Samsung Internet 13+</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-xl font-semibold mb-4'>Troubleshooting</h3>
          <div className='space-y-4'>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>Common Issues</h4>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>
                  <strong>Issue:</strong> Module not found error
                </p>
                <p>
                  <strong>Solution:</strong> Make sure you've installed the package correctly and restarted
                  your development server.
                </p>
              </div>
            </div>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-semibold mb-2'>Performance Issues</h4>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>
                  <strong>Issue:</strong> Slow rendering with large datasets
                </p>
                <p>
                  <strong>Solution:</strong> Ensure you're using the latest version and check your data
                  structure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
