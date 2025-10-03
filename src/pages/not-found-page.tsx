import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <div className='text-center space-y-6 max-w-md mx-auto px-4'>
        {/* 404 Illustration */}
        <div className='relative'>
          <div className='text-8xl font-bold text-muted-foreground/20'>404</div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <svg 
              className='w-16 h-16 text-muted-foreground' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth='1.5' 
                d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold'>Page Not Found</h1>
          <p className='text-muted-foreground'>
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            to='/'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
            </svg>
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className='pt-6 border-t'>
          <p className='text-sm text-muted-foreground mb-3'>Maybe you were looking for:</p>
          <div className='flex flex-wrap gap-2 justify-center'>
            <Link 
              to='/docs/introduction' 
              className='text-sm text-primary hover:underline'
            >
              Documentation
            </Link>
            <span className='text-muted-foreground'>•</span>
            <Link 
              to='/docs/examples/basic' 
              className='text-sm text-primary hover:underline'
            >
              Examples
            </Link>
            <span className='text-muted-foreground'>•</span>
            <Link 
              to='/blog' 
              className='text-sm text-primary hover:underline'
            >
              Blog
            </Link>
            <span className='text-muted-foreground'>•</span>
            <Link 
              to='/docs/installation' 
              className='text-sm text-primary hover:underline'
            >
              Installation
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className='pt-4'>
          <p className='text-sm text-muted-foreground mb-2'>Or try searching:</p>
          <div className='flex gap-2 max-w-sm mx-auto'>
            <input
              type='text'
              placeholder='Search documentation...'
              className='flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring'
            />
            <button className='px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
