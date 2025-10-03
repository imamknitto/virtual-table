import { useState } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data using Faker.js
const generateSampleData = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']),
    experience: faker.helpers.arrayElement(['Junior', 'Mid', 'Senior', 'Lead']),
    location: faker.helpers.arrayElement(['Remote', 'On-site', 'Hybrid']),
  }));
};

const FilterVisibilityPage = () => {
  const [data] = useState(generateSampleData());
  const [showCode, setShowCode] = useState(false);

  // Define table headers with different filter configurations
  const headers: IHeader<(typeof data)[0]>[] = [
    {
      key: 'id',
      caption: 'ID',
      width: 80,
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: true,
        filterAdvance: true,
      },
    },
    {
      key: 'name',
      caption: 'Name',
      width: 200,
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: true,
        filterAdvance: true,
      },
    },
    {
      key: 'email',
      caption: 'Email',
      width: 250,
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: true,
        filterAdvance: false,
      },
    },
    {
      key: 'company',
      caption: 'Company',
      width: 200,
      filterSelectionOptions: Array.from(new Set(data.map((item) => item.company))),
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: false,
        filterAdvance: true,
      },
    },
    {
      key: 'position',
      caption: 'Position',
      width: 180,
      filterSelectionOptions: Array.from(new Set(data.map((item) => item.position))),
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: false,
        filterAdvance: true,
      },
    },
    {
      key: 'department',
      caption: 'Department',
      width: 120,
      filterSelectionOptions: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'],
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: false,
        filterAdvance: true,
      },
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      filterSelectionOptions: ['Active', 'Inactive', 'Pending'],
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: false,
        filterAdvance: true,
      },
    },
    {
      key: 'experience',
      caption: 'Experience',
      width: 100,
      filterSelectionOptions: ['Junior', 'Mid', 'Senior', 'Lead'],
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: false,
        filterAdvance: false,
      },
    },
    {
      key: 'location',
      caption: 'Location',
      width: 100,
      filterSelectionOptions: ['Remote', 'On-site', 'Hybrid'],
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: false,
        filterAdvance: false,
      },
    },
    {
      key: 'city',
      caption: 'City',
      width: 150,
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: true,
        filterAdvance: false,
      },
    },
    {
      key: 'country',
      caption: 'Country',
      width: 120,
      hideFilter: {
        sort: false,
        search: false,
        filterSelection: true,
        filterAdvance: false,
      },
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => `$${item.salary.toLocaleString()}`,
      hideFilter: {
        sort: false,
        search: true,
        filterSelection: true,
        filterAdvance: false,
      },
    },
  ];

  const codeExample = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data
const generateSampleData = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    experience: faker.helpers.arrayElement(['Junior', 'Mid', 'Senior', 'Lead']),
    location: faker.helpers.arrayElement(['Remote', 'On-site', 'Hybrid']),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
  }));
};

const FilterVisibilityTable = () => {
  const [data] = useState(generateSampleData());

  // Define table headers with different filter configurations
  const headers: IHeader<(typeof data)[0]>[] = [
    { 
      key: 'id', 
      caption: 'ID', 
      width: 80,
      hideFilter: {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: true,  // Hide filter selection
        filterAdvance: true,    // Hide advanced filter
      }
    },
    { 
      key: 'name', 
      caption: 'Name', 
      width: 200,
      hideFilter: {
        sort: false,        // Show sort
        search: false,      // Show search
        filterSelection: true,  // Hide filter selection
        filterAdvance: true,    // Hide advanced filter
      }
    },
    { 
      key: 'company', 
      caption: 'Company', 
      width: 200,
      filterSelectionOptions: Array.from(new Set(data.map(item => item.company))),
      hideFilter: {
        sort: false,        // Show sort
        search: false,      // Show search
        filterSelection: false, // Show filter selection
        filterAdvance: true,    // Hide advanced filter
      }
    },
    { 
      key: 'department', 
      caption: 'Department', 
      width: 120,
      filterSelectionOptions: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'],
      hideFilter: {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: false, // Show filter selection
        filterAdvance: true,    // Hide advanced filter
      }
    },
    { 
      key: 'experience', 
      caption: 'Experience', 
      width: 100,
      filterSelectionOptions: ['Junior', 'Mid', 'Senior', 'Lead'],
      hideFilter: {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: false, // Show filter selection
        filterAdvance: false,   // Show advanced filter
      }
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
      hideFilter: {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: true,  // Hide filter selection
        filterAdvance: false,   // Show advanced filter
      }
    },
  ];

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
    />
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Filter Visibility Control</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to control the visibility of different filter types in your virtual table headers. You can
          show or hide individual filter components per column.
        </p>
      </div>

      {/* Filter Types Overview */}
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='border rounded-lg p-4 bg-blue-50'>
          <h3 className='font-semibold text-blue-900 mb-2'>🔍 Search Filter</h3>
          <p className='text-sm text-blue-800 mb-2'>Text-based search input</p>
          <p className='text-xs text-blue-600'>Use for: Names, emails, addresses</p>
        </div>
        <div className='border rounded-lg p-4 bg-green-50'>
          <h3 className='font-semibold text-green-900 mb-2'>📋 Selection Filter</h3>
          <p className='text-sm text-green-800 mb-2'>Multi-select dropdown</p>
          <p className='text-xs text-green-600'>Use for: Categories, status, departments</p>
        </div>
        <div className='border rounded-lg p-4 bg-purple-50'>
          <h3 className='font-semibold text-purple-900 mb-2'>⚡ Advanced Filter</h3>
          <p className='text-sm text-purple-800 mb-2'>Complex filtering options</p>
          <p className='text-xs text-purple-600'>Use for: Numbers, dates, custom logic</p>
        </div>
        <div className='border rounded-lg p-4 bg-orange-50'>
          <h3 className='font-semibold text-orange-900 mb-2'>🔄 Sort Filter</h3>
          <p className='text-sm text-orange-800 mb-2'>Ascending/descending sort</p>
          <p className='text-xs text-orange-600'>Use for: All sortable columns</p>
        </div>
      </div>

      {/* Filter Configuration Examples */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Filter Configuration Examples</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>📊 Column Filter Configurations</h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>ID</span>
                <span className='text-gray-600'>Sort only</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>Name</span>
                <span className='text-gray-600'>Sort + Search</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>Company</span>
                <span className='text-gray-600'>Sort + Search + Selection</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>Department</span>
                <span className='text-gray-600'>Sort + Selection</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>Experience</span>
                <span className='text-gray-600'>Sort + Selection + Advanced</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-16 text-xs bg-gray-100 px-2 py-1 rounded'>Salary</span>
                <span className='text-gray-600'>Sort + Advanced</span>
              </div>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎛️ Filter Control Options</h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2'>
                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>sort: false</code>
                <span className='text-gray-600'>Show sort controls</span>
              </div>
              <div className='flex items-center gap-2'>
                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>search: false</code>
                <span className='text-gray-600'>Show search input</span>
              </div>
              <div className='flex items-center gap-2'>
                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>filterSelection: false</code>
                <span className='text-gray-600'>Show selection dropdown</span>
              </div>
              <div className='flex items-center gap-2'>
                <code className='text-xs bg-gray-100 px-2 py-1 rounded'>filterAdvance: false</code>
                <span className='text-gray-600'>Show advanced filter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          />
        </div>
      </section>

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Filter Visibility Control Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Filter Visibility Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>✅ Filter Types</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • <strong>Search Filter:</strong> Text input for searching
              </li>
              <li>
                • <strong>Selection Filter:</strong> Multi-select dropdown with options
              </li>
              <li>
                • <strong>Advanced Filter:</strong> Complex filtering with operators
              </li>
              <li>
                • <strong>Sort Filter:</strong> Ascending/descending sort controls
              </li>
              <li>
                • <strong>Global Toggle:</strong> Show/hide all filters via header action
              </li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎯 Configuration</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Control each filter type per column</li>
              <li>• Provide options for selection filters</li>
              <li>• Hide unnecessary filters for better UX</li>
              <li>• Maintain consistent filter behavior</li>
              <li>• Support both single and double header modes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
        <div className='space-y-4'>
          <div className='border rounded-lg p-4 bg-blue-50'>
            <h3 className='font-semibold text-blue-900 mb-2'>💡 Best Practices</h3>
            <ul className='text-sm text-blue-800 space-y-1'>
              <li>
                • Use <strong>search filters</strong> for text-based columns (names, emails, addresses)
              </li>
              <li>
                • Use <strong>selection filters</strong> for categorical data (status, department, type)
              </li>
              <li>
                • Use <strong>advanced filters</strong> for numeric data (salary, age, dates)
              </li>
              <li>
                • Always keep <strong>sort</strong> enabled for better user experience
              </li>
              <li>• Provide meaningful options for selection filters</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4 bg-yellow-50'>
            <h3 className='font-semibold text-yellow-900 mb-2'>⚠️ Important Notes</h3>
            <ul className='text-sm text-yellow-800 space-y-1'>
              <li>
                • <code>filterSelectionOptions</code> is required for selection filters to work
              </li>
              <li>
                • Set <code>hideFilter</code> properties to <code>true</code> to hide specific filters
              </li>
              <li>• Global filter visibility can be toggled via the header action menu</li>
              <li>• Filter state is preserved when toggling visibility</li>
              <li>
                • Use <code>headerMode="double"</code> to show filters in a separate row
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filter Combinations */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Common Filter Combinations</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔢 Numeric Columns</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort + Advanced
              </p>
              <p>
                <strong>Hide:</strong> Search, Selection
              </p>
              <p>
                <strong>Example:</strong> Salary, Age, ID
              </p>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>📝 Text Columns</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort + Search
              </p>
              <p>
                <strong>Hide:</strong> Selection, Advanced
              </p>
              <p>
                <strong>Example:</strong> Name, Email, Address
              </p>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🏷️ Category Columns</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort + Selection
              </p>
              <p>
                <strong>Hide:</strong> Search, Advanced
              </p>
              <p>
                <strong>Example:</strong> Department, Status, Type
              </p>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔍 Searchable Categories</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort + Search + Selection
              </p>
              <p>
                <strong>Hide:</strong> Advanced
              </p>
              <p>
                <strong>Example:</strong> Company, Position
              </p>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>⚡ Complex Filters</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort + Selection + Advanced
              </p>
              <p>
                <strong>Hide:</strong> Search
              </p>
              <p>
                <strong>Example:</strong> Experience, Location
              </p>
            </div>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎯 Simple Sort Only</h3>
            <div className='text-sm space-y-1'>
              <p>
                <strong>Use:</strong> Sort only
              </p>
              <p>
                <strong>Hide:</strong> Search, Selection, Advanced
              </p>
              <p>
                <strong>Example:</strong> ID, Simple counters
              </p>
            </div>
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
              href='/docs/examples/server-filter'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Server-side Filtering
            </a>
            <a
              href='/docs/examples/header-grouping'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Header Grouping
            </a>
            <a
              href='/docs/examples/custom-cell'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Custom Cell Rendering
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterVisibilityPage;
