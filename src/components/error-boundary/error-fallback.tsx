import { memo } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorFallback = () => {
  const error = useRouteError() as Error & { statusText?: string; status?: number };
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const isNotFound = error?.status === 404;

  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <div className='max-w-2xl w-full'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/30 mb-6'>
            <svg
              className='w-12 h-12 text-red-600 dark:text-red-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
          </div>

          <h1 className='text-4xl font-bold tracking-tight mb-4'>
            {isNotFound ? 'Page Not Found' : 'Oops! Something went wrong'}
          </h1>

          <p className='text-xl text-muted-foreground mb-8'>
            {isNotFound
              ? "The page you're looking for doesn't exist or has been moved."
              : "We're sorry, but something unexpected happened. Don't worry, we're on it!"}
          </p>
        </div>

        {/* Error Details */}
        {!isNotFound && (
          <div className='mb-8 border rounded-lg overflow-hidden bg-muted/50'>
            <div className='bg-red-100 dark:bg-red-900/30 border-b border-red-200 dark:border-red-800 px-4 py-3'>
              <h3 className='font-semibold text-red-900 dark:text-red-200'>Error Details</h3>
            </div>
            <div className='p-4'>
              <div className='mb-3'>
                <span className='text-sm font-medium text-muted-foreground'>Error Message:</span>
                <p className='text-sm mt-1 font-mono bg-background p-3 rounded border'>
                  {error?.message || error?.statusText || 'Unknown error occurred'}
                </p>
              </div>
              {error?.stack && (
                <details className='text-xs'>
                  <summary className='cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground'>
                    Stack Trace
                  </summary>
                  <pre className='mt-2 p-3 bg-background rounded border overflow-x-auto text-xs'>
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6'
            onClick={handleGoHome}
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
            Go to Home
          </button>

          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6'
            onClick={handleGoBack}
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
            Go Back
          </button>

          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6'
            onClick={handleReload}
          >
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
            Reload Page
          </button>
        </div>

        {/* Help Section */}
        <div className='mt-12 text-center'>
          <div className='inline-flex items-center gap-2 text-sm text-muted-foreground'>
            <span>Need help?</span>
            <a
              className='text-primary hover:underline font-medium'
              href='https://github.com/imamknitto/virtual-table/issues'
              rel='noreferrer'
              target='_blank'
            >
              Report this issue
            </a>
            <span>or</span>
            <a
              className='text-primary hover:underline font-medium'
              href='/docs/introduction'
              onClick={(e) => {
                e.preventDefault();
                navigate('/docs/introduction');
              }}
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ErrorFallback);

