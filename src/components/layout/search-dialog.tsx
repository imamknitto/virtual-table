import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

type SearchResult = {
  title: string;
  href: string;
  category: string;
  keywords: string[];
};

type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const searchIndex: SearchResult[] = [
  // Getting Started
  {
    title: 'Introduction',
    href: '/docs/introduction',
    category: 'Getting Started',
    keywords: ['intro', 'overview', 'getting started', 'welcome', 'about'],
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    category: 'Getting Started',
    keywords: ['install', 'setup', 'npm', 'pnpm', 'yarn', 'package'],
  },
  {
    title: 'Quick Start',
    href: '/docs/quick-start',
    category: 'Getting Started',
    keywords: ['quick', 'start', 'begin', 'tutorial', 'first steps'],
  },
  // Examples
  {
    title: 'Basic Usage',
    href: '/docs/examples/basic-usage',
    category: 'Examples',
    keywords: ['basic', 'simple', 'example', 'usage', 'start', 'first table'],
  },
  {
    title: 'Header Customization',
    href: '/docs/examples/header-customization',
    category: 'Examples',
    keywords: ['header', 'customize', 'style', 'custom header', 'column header'],
  },
  {
    title: 'Header Grouping',
    href: '/docs/examples/header-grouping',
    category: 'Examples',
    keywords: ['header', 'group', 'grouping', 'nested', 'multi-level'],
  },
  {
    title: 'Custom Render Cell',
    href: '/docs/examples/custom-render-cell',
    category: 'Examples',
    keywords: ['cell', 'render', 'custom', 'component', 'cell content'],
  },
  {
    title: 'Checkbox Selection',
    href: '/docs/examples/checkbox-selection',
    category: 'Examples',
    keywords: ['checkbox', 'select', 'selection', 'multi-select', 'check'],
  },
  {
    title: 'Click Row Action',
    href: '/docs/examples/click-row-action',
    category: 'Examples',
    keywords: ['click', 'row', 'action', 'event', 'onclick', 'interaction'],
  },
  {
    title: 'Freeze Column',
    href: '/docs/examples/freeze-column',
    category: 'Examples',
    keywords: ['freeze', 'pin', 'sticky', 'fixed', 'column', 'lock'],
  },
  {
    title: 'Expand Row',
    href: '/docs/examples/expand-row',
    category: 'Examples',
    keywords: ['expand', 'collapse', 'detail', 'nested', 'expandable'],
  },
  {
    title: 'Footer',
    href: '/docs/examples/footer',
    category: 'Examples',
    keywords: ['footer', 'summary', 'total', 'aggregate', 'bottom'],
  },
  {
    title: 'Scrolling',
    href: '/docs/examples/scrolling',
    category: 'Examples',
    keywords: ['scroll', 'virtual', 'performance', 'large data'],
  },
  {
    title: 'Server Filter',
    href: '/docs/examples/server-filter',
    category: 'Examples',
    keywords: ['filter', 'search', 'server', 'backend', 'api'],
  },
  {
    title: 'Large Dataset',
    href: '/docs/examples/large-dataset',
    category: 'Examples',
    keywords: ['large', 'dataset', 'big', 'performance', 'virtual', 'many rows'],
  },
  // API Reference
  {
    title: 'Props',
    href: '/docs/api/props',
    category: 'API Reference',
    keywords: ['props', 'api', 'properties', 'parameters', 'options'],
  },
  {
    title: 'Methods',
    href: '/docs/api/methods',
    category: 'API Reference',
    keywords: ['methods', 'api', 'functions', 'ref', 'imperative'],
  },
];

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchIndex;

    const lowerQuery = query.toLowerCase();
    return searchIndex
      .map((item) => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const keywordMatch = item.keywords.some((keyword) => keyword.includes(lowerQuery));
        const categoryMatch = item.category.toLowerCase().includes(lowerQuery);

        // Calculate relevance score
        let score = 0;
        if (item.title.toLowerCase().startsWith(lowerQuery)) score += 10;
        else if (titleMatch) score += 5;
        if (keywordMatch) score += 3;
        if (categoryMatch) score += 2;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  const handleSelect = useCallback(
    (href: string) => {
      navigate(href);
      onClose();
      setQuery('');
      setSelectedIndex(0);
    },
    [navigate, onClose],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredResults[selectedIndex].href);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [filteredResults, selectedIndex, handleSelect, onClose],
  );

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Reset query when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[10vh]'
      onClick={onClose}
    >
      <div
        className='w-full max-w-2xl mx-4 bg-background rounded-lg shadow-2xl border overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className='flex items-center border-b px-4 py-3'>
          <svg
            className='h-5 w-5 text-muted-foreground'
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
          <input
            autoFocus
            className='flex-1 ml-3 bg-transparent outline-none text-foreground placeholder:text-muted-foreground'
            placeholder='Search documentation...'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className='hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100'>
            ESC
          </kbd>
        </div>

        {/* Search Results */}
        <div className='max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/30'>
          {filteredResults.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-12 px-4'>
              <svg
                className='h-12 w-12 text-muted-foreground/50 mb-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
              <p className='text-sm text-muted-foreground'>
                {query ? 'No results found' : 'Type to search documentation'}
              </p>
            </div>
          ) : (
            <div className='py-2'>
              {/* Group by category */}
              {['Getting Started', 'Examples', 'API Reference'].map((category) => {
                const categoryResults = filteredResults.filter((result) => result.category === category);
                if (categoryResults.length === 0) return null;

                return (
                  <div key={category} className='mb-2'>
                    <div className='px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide'>
                      {category}
                    </div>
                    {categoryResults.map((result) => {
                      const globalIndex = filteredResults.indexOf(result);
                      const isSelected = globalIndex === selectedIndex;

                      return (
                        <button
                          key={result.href}
                          className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                            isSelected ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
                          }`}
                          onClick={() => handleSelect(result.href)}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                        >
                          <div className='flex items-center space-x-3'>
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded ${
                                isSelected ? 'bg-primary/20' : 'bg-muted'
                              }`}
                            >
                              <svg
                                className={`h-4 w-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                />
                              </svg>
                            </div>
                            <div>
                              <div className='font-medium text-sm'>{result.title}</div>
                              <div className='text-xs text-muted-foreground'>{result.href}</div>
                            </div>
                          </div>
                          {isSelected && (
                            <kbd className='hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100'>
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className='border-t px-4 py-2 flex items-center justify-between text-xs text-muted-foreground'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <kbd className='inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
                ↑
              </kbd>
              <kbd className='inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
                ↓
              </kbd>
              <span className='ml-1'>to navigate</span>
            </div>
            <div className='flex items-center gap-1'>
              <kbd className='inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
                ↵
              </kbd>
              <span className='ml-1'>to select</span>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <kbd className='inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
              ESC
            </kbd>
            <span className='ml-1'>to close</span>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default memo(SearchDialog);
