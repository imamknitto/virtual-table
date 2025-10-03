import { Link } from 'react-router-dom';

type HeaderProps = {
  onMenuToggle: () => void;
};

export const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8'>
        {/* Left side - Logo and Navigation */}
        <div className='flex items-center'>
          <Link to='/' className='mr-8 flex items-center space-x-2'>
            <span className='font-bold text-lg'>Knitto Virtual Table</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <Link
              to='/docs/introduction'
              className='transition-colors hover:text-foreground/80 text-foreground/60'
            >
              Documentation
            </Link>
            <Link
              to='/docs/examples'
              className='transition-colors hover:text-foreground/80 text-foreground/60'
            >
              Examples
            </Link>
            <Link to='/blog' className='transition-colors hover:text-foreground/80 text-foreground/60'>
              Blog
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors'
          type='button'
          onClick={onMenuToggle}
        >
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M3 12h18M3 6h18M3 18h18' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
          </svg>
          <span className='sr-only'>Toggle Menu</span>
        </button>

        {/* Right side - Search and Actions */}
        <div className='flex flex-1 items-center justify-end gap-2'>
          {/* Search Button */}
          <div className='hidden sm:block'>
            <button className='inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
              <svg
                className='mr-2 h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
              Search documentation...
              <kbd className='ml-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
                <span className='text-xs'>⌘</span>K
              </kbd>
            </button>
          </div>

          {/* GitHub Button */}
          <a
            className='inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
            href='https://github.com'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              className='mr-2 h-4 w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            <span className='hidden sm:inline'>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
