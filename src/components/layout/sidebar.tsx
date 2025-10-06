import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type NavItem = {
  title: string;
  href?: string;
  items?: NavItem[];
};

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Examples',
    items: [
      { title: 'Basic Usage', href: '/docs/examples/basic-usage' },
      { title: 'Header Customization', href: '/docs/examples/header-customization' },
      { title: 'Header Grouping', href: '/docs/examples/header-grouping' },
      { title: 'Custom Render Cell', href: '/docs/examples/custom-render-cell' },
      { title: 'Checkbox Selection', href: '/docs/examples/checkbox-selection' },
      { title: 'Click Row Action', href: '/docs/examples/click-row-action' },
      { title: 'Freeze Column', href: '/docs/examples/freeze-column' },
      { title: 'Expand Row', href: '/docs/examples/expand-row' },
      { title: 'Footer', href: '/docs/examples/footer' },
      { title: 'Scrolling', href: '/docs/examples/scrolling' },
      { title: 'Server Filter', href: '/docs/examples/server-filter' },
      { title: 'Large Dataset', href: '/docs/examples/large-dataset' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Props', href: '/docs/api/props' },
      { title: 'Methods', href: '/docs/api/methods' },
    ],
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Getting Started']);
  const location = useLocation();

  // Preload route on hover
  const handleMouseEnter = useCallback((href: string) => {
    // Map href to import function
    const routeMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
      '/docs/examples/basic-usage': () => import('../../pages/examples-page/basic-usage-page'),
      '/docs/examples/header-customization': () =>
        import('../../pages/examples-page/header-customization-page'),
      '/docs/examples/header-grouping': () => import('../../pages/examples-page/header-grouping-page'),
      '/docs/examples/custom-render-cell': () => import('../../pages/examples-page/custom-cell-page'),
      '/docs/examples/checkbox-selection': () => import('../../pages/examples-page/checkbox-selection-page'),
      '/docs/examples/click-row-action': () => import('../../pages/examples-page/click-row-action-page'),
      '/docs/examples/freeze-column': () => import('../../pages/examples-page/freeze-column-page'),
      '/docs/examples/expand-row': () => import('../../pages/examples-page/expand-row-page'),
      '/docs/examples/footer': () => import('../../pages/examples-page/footer-page'),
      '/docs/examples/scrolling': () => import('../../pages/examples-page/scrolling-page'),
      '/docs/examples/server-filter': () => import('../../pages/examples-page/server-filter-page'),
      '/docs/examples/large-dataset': () => import('../../pages/examples-page/large-dataset-page'),
      '/docs/api/props': () => import('../../pages/api-reference-page/props-page'),
      '/docs/api/methods': () => import('../../pages/api-reference-page/methods-page'),
      '/docs/examples': () => import('../../pages/examples-page/index'),
    };

    const preloadFn = routeMap[href];
    if (preloadFn) {
      preloadFn().catch(() => {
        // Silently fail if preload fails
      });
    }
  }, []);

  // Auto-expand section based on current route
  useEffect(() => {
    const currentSection = navigation.find((section) =>
      section.items?.some((item) => item.href === location.pathname),
    );

    if (currentSection && !expandedItems.includes(currentSection.title)) {
      setExpandedItems((prev) => [...prev, currentSection.title]);
    }
  }, [location.pathname, expandedItems]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className='fixed inset-0 z-40 bg-black/50 md:hidden' onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/30'>
          <nav className='space-y-1'>
            {navigation.map((section) => (
              <div key={section.title} className='space-y-1'>
                <button
                  className='flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors'
                  onClick={() => toggleExpanded(section.title)}
                >
                  <span>{section.title}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      expandedItems.includes(section.title) ? 'rotate-90' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9 5l7 7-7 7' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-200 ease-in-out ${
                    expandedItems.includes(section.title)
                      ? 'max-h-none opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {section.items && (
                    <div className='ml-4 space-y-1 pb-2'>
                      {section.items.map((item) => {
                        if (!item.href) return null;

                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`block w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                              location.pathname === item.href
                                ? 'bg-blue-900 text-white font-medium'
                                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            }`}
                            onClick={onClose}
                            onMouseEnter={() => item.href && handleMouseEnter(item.href)}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>

          <div className='mt-auto pt-6'>
            <div className='rounded-lg border bg-muted/50 p-4'>
              <h4 className='font-semibold text-sm mb-2'>Need help?</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Check out our community resources or get support.
              </p>
              <a
                className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3'
                href='https://github.com/issues'
                target='_blank'
                rel='noreferrer'
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default memo(Sidebar);
