import { useState, useEffect } from 'react';
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
      { title: 'Checkbox Selection', href: '/docs/examples/checkbox-selection' },
      { title: 'Filter Visibility', href: '/docs/examples/filter-visibility' },
      { title: 'Freeze Column', href: '/docs/examples/freeze-column' },
      { title: 'Custom Render Cell', href: '/docs/examples/custom-render-cell' },
      { title: 'Action Cell', href: '/docs/examples/action-cell' },
      { title: 'Auto Stretch', href: '/docs/examples/auto-stretch' },
      { title: 'Click Row Action', href: '/docs/examples/click-row-action' },
      { title: 'Expand Row', href: '/docs/examples/expand-row' },
      { title: 'Footer', href: '/docs/examples/footer' },
      { title: 'Server Filter', href: '/docs/examples/server-filter' },
      { title: 'Header Grouping', href: '/docs/examples/header-grouping' },
      { title: 'Large Dataset', href: '/docs/examples/large-dataset' },
      { title: 'Comparison', href: '/docs/examples/comparison' },
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

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Getting Started']);
  const location = useLocation();

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
        <div className='flex h-full flex-col overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent'>
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
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    expandedItems.includes(section.title) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
