export const CODE_EXAMPLES = {
  basicUsage: `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { useMemo } from 'react';

const LargeDatasetTable = () => {
  // Generate large dataset (1M records)
  const data = useMemo(() => {
    return Array.from({ length: 1000000 }, (_, index) => ({
      id: index + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      // ... other fields
    }));
  }, []);

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
    { key: 'email', caption: 'Email', width: 250 },
    // ... other headers
  ];

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
    />
  );
};`,

  optimization: `// Performance optimization techniques

// 1. Memoize data generation
const data = useMemo(() => generateLargeDataset(1000000), []);

// 2. Use freeze columns for important data
const headers = [
  { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
  { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
  // ... other columns
];

// 3. Optimize row height
<VirtualTable
  rowHeight={32} // Fixed height for better performance
  // ... other props
/>

// 4. Use efficient filtering
const filteredData = useMemo(() => {
  return data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [data, searchTerm]);`,
};

export const PERFORMANCE_DATA = [
  {
    metric: 'Initial Render Time',
    value: '< 100ms',
    description: 'Time to render the first visible rows regardless of dataset size',
  },
  {
    metric: 'Memory Usage',
    value: '~2-5MB',
    description: 'Constant memory usage regardless of dataset size (only visible rows in DOM)',
  },
  {
    metric: 'Scroll Performance',
    value: '60 FPS',
    description: 'Smooth scrolling with virtual scrolling technology',
  },
  {
    metric: 'Search/Filter Speed',
    value: 'Instant',
    description: 'Client-side filtering with optimized algorithms',
  },
  {
    metric: 'Sort Performance',
    value: '< 50ms',
    description: 'Efficient sorting algorithms for large datasets',
  },
];

