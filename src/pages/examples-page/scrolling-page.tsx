import { useState, useRef, useCallback } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Sample data type
type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive';
  location: string;
  manager: string;
  performance: number;
};

// Generate sample data
const generateEmployeeData = (count: number = 100): Employee[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    status: faker.helpers.arrayElement(['active', 'inactive']) as Employee['status'],
    location: faker.location.city(),
    manager: faker.person.fullName(),
    performance: faker.number.int({ min: 1, max: 5 }),
  }));
};

const ScrollingPage = () => {
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);

  // State for scroll tracking
  const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0, scrollLeft: 0 });
  const [scrollEvents, setScrollEvents] = useState<string[]>([]);
  const [bottomTouchCount, setBottomTouchCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Data state
  const [data, setData] = useState(() => generateEmployeeData(50));

  // Refs for table access
  const tableRef1 = useRef<HTMLDivElement>(null);
  const tableRef2 = useRef<HTMLDivElement>(null);

  // Define table headers
  const headers: IHeader<Employee>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'department', caption: 'Department', width: 150 },
    { key: 'position', caption: 'Position', width: 180 },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => `$${item.salary.toLocaleString()}`,
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
    { key: 'location', caption: 'Location', width: 150 },
    { key: 'manager', caption: 'Manager', width: 180 },
    { key: 'performance', caption: 'Rating', width: 100 },
    { key: 'status', caption: 'Status', width: 100 },
  ];

  // Scroll event handlers
  const handleScroll = useCallback((scrollTop: number, scrollLeft: number) => {
    setScrollPosition({ scrollTop, scrollLeft });
    setScrollEvents((prev) => [
      `Scroll: Top=${Math.round(scrollTop)}, Left=${Math.round(scrollLeft)}`,
      ...prev.slice(0, 4),
    ]);
  }, []);

  const handleScrollTouchBottom = useCallback(() => {
    setBottomTouchCount((prev) => prev + 1);
    setScrollEvents((prev) => [`Bottom reached! (${bottomTouchCount + 1} times)`, ...prev.slice(0, 4)]);

    // Simulate loading more data
    setIsLoadingMore(true);
    setTimeout(() => {
      const newData = generateEmployeeData(20);
      setData((prev) => [...prev, ...newData]);
      setIsLoadingMore(false);
    }, 1000);
  }, [bottomTouchCount]);

  // Programmatic scroll functions
  const scrollToTop = () => {
    tableRef2.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    tableRef2.current?.scrollTo({
      top: tableRef2.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToPosition = (top: number, left: number = 0) => {
    tableRef2.current?.scrollTo({ top, left, behavior: 'smooth' });
  };

  // Code examples
  const codeExample1 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useRef, useCallback } from 'react';

const ScrollTrackingTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ 
    scrollTop: 0, 
    scrollLeft: 0 
  });

  // Track scroll position
  const handleScroll = useCallback((scrollTop: number, scrollLeft: number) => {
    setScrollPosition({ scrollTop, scrollLeft });
    console.log('Scroll position:', { scrollTop, scrollLeft });
  }, []);

  const headers: IHeader<Employee>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    // ... other headers
  ];

  return (
    <VirtualTable
      ref={tableRef}
      headers={headers}
      data={data}
      rowKey="id"
      onScroll={handleScroll}
    />
  );
};`;

  const codeExample2 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useRef } from 'react';

const ProgrammaticScrollTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  // Programmatic scroll functions
  const scrollToTop = () => {
    tableRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    tableRef.current?.scrollTo({ 
      top: tableRef.current.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const scrollToPosition = (top: number, left: number = 0) => {
    tableRef.current?.scrollTo({ top, left, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button onClick={scrollToTop}>Scroll to Top</button>
        <button onClick={scrollToBottom}>Scroll to Bottom</button>
        <button onClick={() => scrollToPosition(500)}>Scroll to 500px</button>
      </div>
      
      <VirtualTable
        ref={tableRef}
        headers={headers}
        data={data}
        rowKey="id"
      />
    </div>
  );
};`;

  const codeExample3 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useCallback, useState } from 'react';

const InfiniteScrollTable = () => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // Handle scroll to bottom for infinite loading
  const handleScrollTouchBottom = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate API call
    fetchMoreData()
      .then(newData => {
        setData(prev => [...prev, ...newData]);
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      onScrollTouchBottom={handleScrollTouchBottom}
    />
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Scrolling Features</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement advanced scrolling features with the Virtual Table, including scroll
          tracking, programmatic scrolling, and infinite scroll functionality.
        </p>
      </div>

      {/* Example 1: Scroll Tracking with onScroll prop */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Scroll Tracking with onScroll Prop</h2>
          <button
            onClick={() => setShowCode1(!showCode1)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode1 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
          <p className='text-sm text-blue-800'>
            <strong>Scroll Tracking:</strong> Use the{' '}
            <code className='bg-blue-100 px-1 rounded'>onScroll</code> prop to track scroll position in
            real-time. Perfect for implementing scroll-based features like sticky headers, progress
            indicators, or analytics.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Table */}
          <div className='lg:col-span-2'>
            <div className='h-96'>
              <VirtualTable
                ref={tableRef1}
                headers={headers}
                data={data}
                rowKey='id'
                onScroll={handleScroll}
                rowHeight={32}
                headerHeight={40}
                filterHeight={32}
              />
            </div>
          </div>

          {/* Scroll Info */}
          <div className='space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Current Scroll Position</h3>
              <div className='text-sm space-y-1'>
                <p>
                  <strong>Scroll Top:</strong> {Math.round(scrollPosition.scrollTop)}px
                </p>
                <p>
                  <strong>Scroll Left:</strong> {Math.round(scrollPosition.scrollLeft)}px
                </p>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Scroll Events</h3>
              <div className='text-sm space-y-1 max-h-32 overflow-y-auto'>
                {scrollEvents.length > 0 ? (
                  scrollEvents.map((event, index) => (
                    <p key={index} className='text-xs bg-muted px-2 py-1 rounded'>
                      {event}
                    </p>
                  ))
                ) : (
                  <p className='text-muted-foreground'>No scroll events yet</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {showCode1 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Scroll Tracking Implementation</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample1}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 2: Programmatic Scrolling with ref */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Programmatic Scrolling with Ref</h2>
          <button
            onClick={() => setShowCode2(!showCode2)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode2 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
          <p className='text-sm text-green-800'>
            <strong>Programmatic Scrolling:</strong> Use the{' '}
            <code className='bg-green-100 px-1 rounded'>ref</code> prop to access the table's scroll element
            and implement programmatic scrolling. Great for navigation, search results, or user-controlled
            scrolling.
          </p>
        </div>

        <div className='mb-4 flex flex-wrap gap-2'>
          <button
            onClick={scrollToTop}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          >
            📍 Scroll to Top
          </button>
          <button
            onClick={scrollToBottom}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          >
            📍 Scroll to Bottom
          </button>
          <button
            onClick={() => scrollToPosition(500)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          >
            📍 Scroll to 500px
          </button>
          <button
            onClick={() => scrollToPosition(1000, 200)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
          >
            📍 Scroll to (1000px, 200px)
          </button>
        </div>

        <div className='h-96'>
          <VirtualTable
            ref={tableRef2}
            headers={headers}
            data={data}
            rowKey='id'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
          />
        </div>

        {showCode2 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Programmatic Scrolling Implementation</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample2}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 3: Scroll Touch Bottom for Infinite Loading */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Scroll Touch Bottom for Infinite Loading</h2>
          <button
            onClick={() => setShowCode3(!showCode3)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode3 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg'>
          <p className='text-sm text-orange-800'>
            <strong>Infinite Scroll:</strong> Use the{' '}
            <code className='bg-orange-100 px-1 rounded'>onScrollTouchBottom</code> prop to detect when users
            scroll near the bottom. Perfect for implementing infinite loading, pagination, or lazy loading of
            data.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Table */}
          <div className='lg:col-span-2'>
            <div className='h-96'>
              <VirtualTable
                headers={headers}
                data={data}
                rowKey='id'
                isLoading={isLoadingMore}
                onScrollTouchBottom={handleScrollTouchBottom}
                rowHeight={32}
                headerHeight={40}
                filterHeight={32}
              />
            </div>
          </div>

          {/* Stats */}
          <div className='space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Infinite Scroll Stats</h3>
              <div className='text-sm space-y-1'>
                <p>
                  <strong>Total Records:</strong> {data.length}
                </p>
                <p>
                  <strong>Bottom Touches:</strong> {bottomTouchCount}
                </p>
                <p>
                  <strong>Loading:</strong> {isLoadingMore ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>How it Works</h3>
              <div className='text-sm space-y-2'>
                <p>• Scroll to the bottom of the table</p>
                <p>• New data will be loaded automatically</p>
                <p>• Threshold: 100px from bottom</p>
                <p>• Throttled to prevent excessive calls</p>
              </div>
            </div>
          </div>
        </div>

        {showCode3 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Infinite Scroll Implementation</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample3}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Scrolling Features Overview</h2>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>📊 Scroll Tracking</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Real-time scroll position tracking</li>
              <li>• Both vertical and horizontal scroll</li>
              <li>• Perfect for analytics and UX features</li>
              <li>• Optimized with throttling</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎯 Programmatic Control</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Access table scroll element via ref</li>
              <li>• Smooth scrolling animations</li>
              <li>• Precise position control</li>
              <li>• Great for navigation features</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>♾️ Infinite Loading</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Bottom detection with threshold</li>
              <li>• Performance optimized</li>
              <li>• Throttled to prevent spam</li>
              <li>• Perfect for large datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>⚡ Performance Tips</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Here are some best practices for implementing scrolling features efficiently:
          </p>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <h4 className='font-medium mb-2'>Scroll Event Optimization</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Use throttling or debouncing for scroll events</li>
                <li>• Implement passive event listeners</li>
                <li>• Use requestAnimationFrame for smooth updates</li>
                <li>• Avoid heavy computations in scroll handlers</li>
              </ul>
            </div>
            <div>
              <h4 className='font-medium mb-2'>Infinite Loading Best Practices</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Set appropriate threshold values (50-100px)</li>
                <li>• Implement loading states and error handling</li>
                <li>• Consider data pagination for very large datasets</li>
                <li>• Use virtual scrolling for optimal performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>🚀 Next Steps</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Ready to implement advanced scrolling features? Explore these related examples:
          </p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='/docs/examples/large-dataset'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Large Datasets
            </a>
            <a
              href='/docs/examples/freeze-column'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Freeze Columns
            </a>
            <a
              href='/docs/examples/click-row-action'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Row Actions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollingPage;
