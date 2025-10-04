import { useState, useEffect, useCallback } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import type { TSortOrder, TFilterAdvanceConfig } from '../../components/virtual-table/lib/types';

// Types for our API data
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type CombinedData = User & {
  posts?: Post[];
  postCount: number;
};

const ServerFilterPage = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Server filter states
  const [filters, setFilters] = useState({
    search: {} as Record<string, string>,
    sort: { key: null as string | null, order: 'unset' as TSortOrder },
    selection: {} as Record<string, string[]>,
    advance: {} as Record<string, { config_name: TFilterAdvanceConfig; value: string }>,
  });

  // Fetch data from API
  const fetchData = useCallback(
    async (filterParams?: {
      search?: Record<string, string>;
      sort?: { key: string; order: TSortOrder };
      selection?: Record<string, string[]>;
      advance?: Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
    }) => {
      setLoading(true);
      try {
        // Fetch users
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await usersResponse.json();

        // Fetch posts to get post counts
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await postsResponse.json();

        // Combine data
        const combinedData: CombinedData[] = users.map((user) => {
          const userPosts = posts.filter((post) => post.userId === user.id);
          return {
            ...user,
            postCount: userPosts.length,
            posts: userPosts.slice(0, 3), // Show only first 3 posts
          };
        });

        // Apply server-side filtering
        let filteredData = combinedData;

        // Apply search filter
        if (filterParams?.search) {
          Object.entries(filterParams.search).forEach(([key, value]) => {
            if (value) {
              filteredData = filteredData.filter((item) =>
                String(item[key as keyof CombinedData] || '')
                  .toLowerCase()
                  .includes(value.toLowerCase()),
              );
            }
          });
        }

        // Apply selection filter
        if (filterParams?.selection) {
          Object.entries(filterParams.selection).forEach(([key, values]) => {
            if (values.length > 0) {
              filteredData = filteredData.filter((item) =>
                values.includes(String(item[key as keyof CombinedData])),
              );
            }
          });
        }

        // Apply advance filter
        if (filterParams?.advance) {
          Object.entries(filterParams.advance).forEach(([key, filter]) => {
            if (filter.value) {
              filteredData = filteredData.filter((item) => {
                const itemValue = String(item[key as keyof CombinedData] || '').toLowerCase();
                const filterValue = filter.value.toLowerCase();

                switch (filter.config_name) {
                  case 'equal':
                    return itemValue === filterValue;
                  case 'notEqual':
                    return itemValue !== filterValue;
                  case 'startsWith':
                    return itemValue.startsWith(filterValue);
                  case 'endsWith':
                    return itemValue.endsWith(filterValue);
                  case 'contains':
                    return itemValue.includes(filterValue);
                  case 'notContains':
                    return !itemValue.includes(filterValue);
                  default:
                    return true;
                }
              });
            }
          });
        }

        // Apply sorting
        if (filterParams?.sort?.key && filterParams.sort.order !== 'unset') {
          filteredData.sort((a, b) => {
            const sortKey = filterParams.sort!.key as keyof CombinedData;
            const aVal = a[sortKey];
            const bVal = b[sortKey];

            if (aVal == null || bVal == null) return 0;
            if (aVal < bVal) return filterParams.sort!.order === 'asc' ? -1 : 1;
            if (aVal > bVal) return filterParams.sort!.order === 'asc' ? 1 : -1;
            return 0;
          });
        }

        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Define table headers
  const headers: IHeader<CombinedData>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    {
      key: 'name',
      caption: 'Name',
      width: 180,
      filterSelectionOptions: ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack'],
    },
    {
      key: 'username',
      caption: 'Username',
      width: 120,
      filterSelectionOptions: ['Bret', 'Antonette', 'Samantha', 'Karianne'],
    },
    { key: 'email', caption: 'Email', width: 200 },
    {
      key: 'phone',
      caption: 'Phone',
      width: 150,
      filterSelectionOptions: ['1-770-736-8031 x56442', '010-692-6593 x09125', '1-463-123-4447'],
    },
    {
      key: 'website',
      caption: 'Website',
      width: 120,
      filterSelectionOptions: ['hildegard.org', 'anastasia.net', 'ramiro.info', 'kale.biz'],
    },
    {
      key: 'address' as keyof CombinedData,
      caption: 'City',
      width: 120,
      filterSelectionOptions: ['Gwenborough', 'Wisokyburgh', 'McKenziehaven', 'South Elvis'],
      renderCell: (item) => item.address.city,
    },
    {
      key: 'company' as keyof CombinedData,
      caption: 'Company',
      width: 150,
      filterSelectionOptions: ['Romaguera-Crona', 'Deckow-Crist', 'Romaguera-Jacobson', 'Robel-Corkery'],
      renderCell: (item) => item.company.name,
    },
    {
      key: 'postCount',
      caption: 'Posts',
      width: 80,
      renderCell: (item) => <span className='font-semibold text-blue-600'>{item.postCount}</span>,
    },
  ];

  // Handle filter changes
  const handleFilterChange = useCallback(
    (filterType: 'sort' | 'search' | 'selection' | 'advance', data: unknown) => {
      const newFilters = { ...filters };

      if (filterType === 'sort') {
        newFilters.sort = data as { key: string | null; order: TSortOrder };
      } else if (filterType === 'search') {
        newFilters.search = data as Record<string, string>;
      } else if (filterType === 'selection') {
        newFilters.selection = data as Record<string, string[]>;
      } else if (filterType === 'advance') {
        newFilters.advance = data as Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
      }

      setFilters(newFilters);

      // Only fetch with valid sort key
      const fetchParams = {
        ...newFilters,
        sort: newFilters.sort.key ? { key: newFilters.sort.key, order: newFilters.sort.order } : undefined,
      };

      fetchData(fetchParams);
    },
    [filters, fetchData],
  );

  const codeExample = `import { useState, useEffect, useCallback } from 'react';
import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import type { TSortOrder, TFilterAdvanceConfig } from '@knitto/virtual-table/lib/types';

// Types for our API data
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type CombinedData = User & {
  postCount: number;
};

const ServerFilterTable = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Server filter states
  const [filters, setFilters] = useState({
    search: {} as Record<string, string>,
    sort: { key: null as string | null, order: 'unset' as TSortOrder },
    selection: {} as Record<string, string[]>,
    advance: {} as Record<string, { config_name: TFilterAdvanceConfig; value: string }>,
  });

  // Fetch data from API with server-side filtering
  const fetchData = useCallback(async (filterParams?: {
    search?: Record<string, string>;
    sort?: { key: string; order: TSortOrder };
    selection?: Record<string, string[]>;
    advance?: Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
  }) => {
    setLoading(true);
    try {
      // Fetch users from API
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users: User[] = await usersResponse.json();

      // Fetch posts to get post counts
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();

      // Combine data
      const combinedData: CombinedData[] = users.map(user => ({
        ...user,
        postCount: posts.filter(post => post.userId === user.id).length,
      }));

      // Apply server-side filtering
      let filteredData = combinedData;

      // Apply search filter
      if (filterParams?.search) {
        Object.entries(filterParams.search).forEach(([key, value]) => {
          if (value) {
            filteredData = filteredData.filter(item => 
              String(item[key as keyof CombinedData] || '').toLowerCase()
                .includes(value.toLowerCase())
            );
          }
        });
      }

      // Apply selection filter
      if (filterParams?.selection) {
        Object.entries(filterParams.selection).forEach(([key, values]) => {
          if (values.length > 0) {
            filteredData = filteredData.filter(item => 
              values.includes(String(item[key as keyof CombinedData]))
            );
          }
        });
      }

      // Apply advance filter
      if (filterParams?.advance) {
        Object.entries(filterParams.advance).forEach(([key, filter]) => {
          if (filter.value) {
            filteredData = filteredData.filter(item => {
              const itemValue = String(item[key as keyof CombinedData] || '').toLowerCase();
              const filterValue = filter.value.toLowerCase();
              
              switch (filter.config_name) {
                case 'equal': return itemValue === filterValue;
                case 'notEqual': return itemValue !== filterValue;
                case 'startsWith': return itemValue.startsWith(filterValue);
                case 'endsWith': return itemValue.endsWith(filterValue);
                case 'contains': return itemValue.includes(filterValue);
                case 'notContains': return !itemValue.includes(filterValue);
                default: return true;
              }
            });
          }
        });
      }

      // Apply sorting
      if (filterParams?.sort?.key && filterParams.sort.order !== 'unset') {
        filteredData.sort((a, b) => {
          const sortKey = filterParams.sort!.key as keyof CombinedData;
          const aVal = a[sortKey];
          const bVal = b[sortKey];
          
          if (aVal == null || bVal == null) return 0;
          if (aVal < bVal) return filterParams.sort!.order === 'asc' ? -1 : 1;
          if (aVal > bVal) return filterParams.sort!.order === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Define table headers with filter options
  const headers: IHeader<CombinedData>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { 
      key: 'name', 
      caption: 'Name', 
      width: 180,
      filterSelectionOptions: ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']
    },
    { key: 'username', caption: 'Username', width: 120 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'website', caption: 'Website', width: 120 },
    { 
      key: 'address.city', 
      caption: 'City', 
      width: 120,
      filterSelectionOptions: ['Gwenborough', 'Wisokyburgh', 'McKenziehaven']
    },
    { 
      key: 'company.name', 
      caption: 'Company', 
      width: 150,
      filterSelectionOptions: ['Romaguera-Crona', 'Deckow-Crist', 'Romaguera-Jacobson']
    },
    { 
      key: 'postCount', 
      caption: 'Posts', 
      width: 80,
      renderCell: (item) => (
        <span className="font-semibold text-blue-600">{item.postCount}</span>
      )
    },
  ];

  // Handle filter changes
  const handleFilterChange = useCallback((filterType: 'sort' | 'search' | 'selection' | 'advance', data: unknown) => {
    const newFilters = { ...filters };
    
    if (filterType === 'sort') {
      newFilters.sort = data as { key: string | null; order: TSortOrder };
    } else if (filterType === 'search') {
      newFilters.search = data as Record<string, string>;
    } else if (filterType === 'selection') {
      newFilters.selection = data as Record<string, string[]>;
    } else if (filterType === 'advance') {
      newFilters.advance = data as Record<string, { config_name: TFilterAdvanceConfig; value: string }>;
    }
    
    setFilters(newFilters);
    
    // Only fetch with valid sort key
    const fetchParams = {
      ...newFilters,
      sort: newFilters.sort.key ? { key: newFilters.sort.key, order: newFilters.sort.order } : undefined
    };
    
    fetchData(fetchParams);
  }, [filters, fetchData]);

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      isLoading={loading}
      useServerFilter={{
        sort: true,
        search: true,
        selection: true,
        advance: true,
      }}
      onChangeFilter={{
        sort: (key, sortBy) => handleFilterChange('sort', { key, order: sortBy }),
        search: (searchData) => handleFilterChange('search', searchData),
        selection: (selectionData) => handleFilterChange('selection', selectionData),
        advance: (advanceData) => handleFilterChange('advance', advanceData),
      }}
    />
  );
};

export default ServerFilterTable;`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Server Filter</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement server-side filtering with Knitto Table using real API data. All filtering,
          sorting, and searching is handled on the server for optimal performance.
        </p>
      </div>

      {/* Preview Section */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
          <button
            onClick={() => setShowCode(!showCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={headers}
            data={data}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            isLoading={loading}
            useServerFilter={{
              sort: true,
              search: true,
              selection: true,
              advance: true,
            }}
            onChangeFilter={{
              sort: (key, sortBy) => handleFilterChange('sort', { key, order: sortBy }),
              search: (searchData) => handleFilterChange('search', searchData),
              selection: (selectionData) => handleFilterChange('selection', selectionData),
              advance: (advanceData) => handleFilterChange('advance', advanceData),
            }}
          />
        </div>
      </section>

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Server Filter Implementation</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Server Filter Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🚀 Performance Benefits</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Server-side filtering reduces client-side processing</li>
              <li>• Handles large datasets efficiently</li>
              <li>• Optimized database queries</li>
              <li>• Reduced network payload</li>
              <li>• Better memory management</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔧 Filter Types</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • <strong>Search:</strong> Text-based filtering
              </li>
              <li>
                • <strong>Selection:</strong> Multi-select dropdown filters
              </li>
              <li>
                • <strong>Advanced:</strong> Complex filter conditions
              </li>
              <li>
                • <strong>Sorting:</strong> Server-side column sorting
              </li>
              <li>
                • <strong>Combined:</strong> Multiple filters simultaneously
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Integration</h2>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📡 Data Source</h3>
          <p className='text-sm text-muted-foreground mb-3'>
            This example uses <strong>JSONPlaceholder API</strong> - a free fake REST API for testing and
            prototyping:
          </p>
          <ul className='text-sm text-muted-foreground space-y-1 mb-4'>
            <li>
              • <code className='bg-muted px-1 rounded'>https://jsonplaceholder.typicode.com/users</code> -
              User data
            </li>
            <li>
              • <code className='bg-muted px-1 rounded'>https://jsonplaceholder.typicode.com/posts</code> -
              Post data
            </li>
          </ul>
          <div className='bg-blue-50 border border-blue-200 rounded p-3'>
            <p className='text-sm text-blue-800'>
              <strong>💡 Tip:</strong> Replace the API endpoints with your own backend API to implement real
              server filtering. The filtering logic can be adapted to work with any REST API or GraphQL
              endpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Implementation Guide</h2>
        <div className='space-y-4'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>1. Enable Server Filtering</h3>
            <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
              <code>{`useServerFilter={{
  sort: true,        // Enable server-side sorting
  search: true,      // Enable server-side search
  selection: true,   // Enable server-side selection filter
  advance: true,     // Enable server-side advance filter
}}`}</code>
            </pre>
          </div>

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>2. Handle Filter Changes</h3>
            <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
              <code>{`onChangeFilter={{
  sort: (key, sortBy) => {
    // Handle sorting - make API call with sort parameters
    fetchData({ sort: { key, order: sortBy } });
  },
  search: (searchData) => {
    // Handle search - make API call with search parameters
    fetchData({ search: searchData });
  },
  selection: (selectionData) => {
    // Handle selection filter - make API call with filter parameters
    fetchData({ selection: selectionData });
  },
  advance: (advanceData) => {
    // Handle advance filter - make API call with complex filter parameters
    fetchData({ advance: advanceData });
  },
}}`}</code>
            </pre>
          </div>

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>3. Server-Side Processing</h3>
            <p className='text-sm text-muted-foreground mb-2'>
              In your API endpoint, process the filter parameters:
            </p>
            <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
              <code>{`// Example API endpoint logic
app.get('/api/users', (req, res) => {
  const { search, sort, selection, advance } = req.query;
  
  let query = db.users.find();
  
  // Apply search filters
  if (search) {
    Object.entries(search).forEach(([field, value]) => {
      query = query.where(field).contains(value);
    });
  }
  
  // Apply selection filters
  if (selection) {
    Object.entries(selection).forEach(([field, values]) => {
      query = query.where(field).in(values);
    });
  }
  
  // Apply sorting
  if (sort) {
    query = query.orderBy(sort.key, sort.order);
  }
  
  const results = query.exec();
  res.json(results);
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>🚀 Next Steps</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Ready to explore more advanced features? Check out these examples:
          </p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='/docs/examples/large-dataset'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Large Dataset
            </a>
            <a
              href='/docs/examples/freeze-column'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Freeze Columns
            </a>
            <a
              href='/docs/examples/header-grouping'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Header Grouping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServerFilterPage;
