export const CODE_EXAMPLES = {
  scrollTracking: `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
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
    <KnittoTable
      ref={tableRef}
      headers={headers}
      data={data}
      rowKey="id"
      onScroll={handleScroll}
    />
  );
};`,

  programmaticScrolling: `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
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
      
      <KnittoTable
        ref={tableRef}
        headers={headers}
        data={data}
        rowKey="id"
      />
    </div>
  );
};`,

  infiniteScroll: `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
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
    <KnittoTable
      headers={headers}
      data={data}
      rowKey="id"
      onScrollTouchBottom={handleScrollTouchBottom}
    />
  );
};`,
};

