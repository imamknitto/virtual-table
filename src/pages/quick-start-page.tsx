import { Link } from 'react-router-dom';

export const QuickStartPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Quick Start</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to use Knitto Table in your project with a simple example.
        </p>
      </div>

      <div className='space-y-6'>
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Basic Usage</h2>
          <p className='text-muted-foreground mt-2'>Here's a simple example of how to use Knitto Table:</p>

          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto text-sm'>
                <code>{`import { KnittoTable } from 'knitto-virtual-table';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function App() {
  const data: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
    // ... more data
  ];

  const headers = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'age', caption: 'Age', width: 100 },
  ];

  return (
    <div className="h-[400px] w-full">
      <KnittoTable<User>
        data={data}
        headers={headers}
        rowKey="id"
        headerMode="double"
        rowHeight={32}
        headerHeight={32}
      />
    </div>
  );
}`}</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>With Row Selection</h2>
          <p className='text-muted-foreground mt-2'>Enable row selection with checkboxes:</p>

          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto text-sm'>
                <code>{`import { KnittoTable } from 'knitto-virtual-table';

function App() {
  const headers = [
    { key: 'row-selection', caption: '', width: 50 },
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
  ];

  const handleSelectionChange = (selectedRows, deselectedRows, isSelectAll) => {
    console.log('Selected:', selectedRows);
    console.log('Deselected:', deselectedRows);
    console.log('Select All:', isSelectAll);
  };

  return (
    <div className="h-[400px] w-full">
      <KnittoTable<User>
        data={data}
        headers={headers}
        rowKey="id"
        onChangeCheckboxRowSelection={handleSelectionChange}
      />
    </div>
  );
}`}</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>With Filtering</h2>
          <p className='text-muted-foreground mt-2'>Enable advanced filtering capabilities:</p>

          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto text-sm'>
                <code>{`import { KnittoTable } from 'knitto-virtual-table';

function App() {
  const headers = [
    { 
      key: 'name', 
      caption: 'Name', 
      width: 200,
      filterSelectionOptions: ['John', 'Jane', 'Bob', 'Alice']
    },
    { 
      key: 'email', 
      caption: 'Email', 
      width: 250 
    },
    { 
      key: 'age', 
      caption: 'Age', 
      width: 100 
    },
  ];

  const handleFilterChange = {
    sort: (key, sortBy) => console.log('Sort:', key, sortBy),
    search: (data) => console.log('Search:', data),
    selection: (data) => console.log('Selection:', data),
    advance: (data) => console.log('Advance:', data),
  };

  return (
    <div className="h-[400px] w-full">
      <KnittoTable<User>
        data={data}
        headers={headers}
        rowKey="id"
        onChangeFilter={handleFilterChange}
      />
    </div>
  );
}`}</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Regular Table Mode</h2>
          <p className='text-muted-foreground mt-2'>
            Use native HTML table elements for better accessibility and row grouping functionality:
          </p>

          <div className='mt-4'>
            <div className='relative'>
              <pre className='bg-muted rounded-lg p-4 overflow-x-auto text-sm'>
                <code>{`import { KnittoTable } from 'knitto-virtual-table';

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
}

function App() {
  const data: Product[] = [
    { id: 1, category: 'Electronics', name: 'Laptop', price: 999 },
    { id: 2, category: 'Electronics', name: 'Phone', price: 699 },
    { id: 3, category: 'Books', name: 'React Guide', price: 29 },
    { id: 4, category: 'Books', name: 'TypeScript', price: 39 },
  ];

  const headers = [
    { 
      key: 'category', 
      caption: 'Category', 
      width: 150,
      enableRowSpan: true,
      hideFilter: { sort: true }
    },
    { key: 'name', caption: 'Product Name', width: 200 },
    { key: 'price', caption: 'Price', width: 100 },
  ];

  return (
    <div className="h-[400px] w-full">
      <KnittoTable<Product>
        data={data}
        headers={headers}
        rowKey="id"
        useRegularTable={true}
        headerMode="double"
        rowHeight={32}
        headerHeight={32}
      />
    </div>
  );
}`}</code>
              </pre>
              <button className='absolute right-2 top-2 p-2 hover:bg-muted-foreground/10 rounded-md'>
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
            <h4 className='font-semibold text-green-900 mb-2'>✨ Key Benefits:</h4>
            <ul className='text-sm text-green-800 space-y-1'>
              <li>• <strong>Row Grouping:</strong> Automatic cell merging with <code className='bg-green-100 px-1 rounded'>enableRowSpan: true</code></li>
              <li>• <strong>Accessibility:</strong> Native HTML table elements for better screen reader support</li>
              <li>• <strong>Semantic HTML:</strong> Proper table structure for SEO and accessibility</li>
              <li>• <strong>Perfect for:</strong> Small to medium datasets with grouped data</li>
            </ul>
          </div>
        </section>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Pro Tips</h3>
        <div className='text-sm text-muted-foreground space-y-2'>
          <p>
            <strong>Virtualized Mode (Default):</strong> For large datasets (10,000+ rows), Knitto Table automatically handles virtualization to ensure
            smooth scrolling and optimal performance. Built-in filtering, sorting, and row selection work
            seamlessly with virtualized data!
          </p>
          <p>
            <strong>Regular Table Mode:</strong> Use <code className='bg-muted px-1 rounded'>useRegularTable=&#123;true&#125;</code> for better accessibility,
            row grouping with <code className='bg-muted px-1 rounded'>enableRowSpan: true</code>, and semantic HTML structure. Perfect for smaller datasets!
          </p>
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>What's Next?</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Link
            to='/docs/examples'
            className='block p-4 border rounded-lg hover:bg-accent transition-colors'
          >
            <h3 className='font-semibold mb-2'>Examples</h3>
            <p className='text-sm text-muted-foreground'>Explore more examples and use cases.</p>
          </Link>
          <Link
            to='/docs/api/props'
            className='block p-4 border rounded-lg hover:bg-accent transition-colors'
          >
            <h3 className='font-semibold mb-2'>API Reference</h3>
            <p className='text-sm text-muted-foreground'>
              Learn about all available components and their props.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
