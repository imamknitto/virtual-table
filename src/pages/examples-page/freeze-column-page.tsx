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
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    department: faker.commerce.department(),
    startDate: faker.date.past().toISOString().split('T')[0],
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
  }));
};

const FreezeColumnPage = () => {
  const [data] = useState(generateSampleData());
  const [showCode, setShowCode] = useState(false);

  // Define table headers with freeze columns
  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'department', caption: 'Department', width: 150 },
    { key: 'startDate', caption: 'Start Date', width: 120 },
    { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      freeze: 'right',
      renderCell: (item) => `$${item.salary.toLocaleString()}`,
    },
  ];

  const codeExample = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data
const generateSampleData = () => {
  return Array.from({ length: 30 }, (_, index) => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    salary: faker.number.int({ min: 30000, max: 150000 }),
  }));
};

const MyTable = () => {
  const [data] = useState(generateSampleData());

  // Define table headers with freeze columns
  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      freeze: 'right',
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
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
        <h1 className='text-4xl font-bold tracking-tight'>Freeze Columns</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to freeze columns on the left or right side of your table for better data navigation.
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
          />
        </div>
      </section>

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Freeze Columns Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Freeze Column Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔒 Left Freeze</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Keep important columns visible when scrolling horizontally</li>
              <li>• Perfect for ID, Name, or primary identifiers</li>
              <li>• Maintains sticky positioning on the left side</li>
              <li>• Supports custom cell rendering</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔒 Right Freeze</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Keep action columns or totals always visible</li>
              <li>• Ideal for status, actions, or calculated values</li>
              <li>• Sticky positioning on the right side</li>
              <li>• Works seamlessly with virtual scrolling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Guidelines</h2>
        <div className='space-y-4'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>💡 Best Practices</h3>
            <ul className='text-sm text-muted-foreground space-y-2'>
              <li>
                <strong>Left Freeze:</strong> Use for primary identifiers (ID, Name) that users need to
                reference while scrolling
              </li>
              <li>
                <strong>Right Freeze:</strong> Use for action buttons, status indicators, or summary data
              </li>
              <li>
                <strong>Performance:</strong> Freeze columns don't affect virtual scrolling performance
              </li>
              <li>
                <strong>Responsive:</strong> Freeze columns maintain their behavior across different screen
                sizes
              </li>
            </ul>
          </div>

          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>⚙️ Implementation</h3>
            <ul className='text-sm text-muted-foreground space-y-2'>
              <li>
                Add <code className='bg-muted px-1 py-0.5 rounded text-xs'>freeze: 'left'</code> or{' '}
                <code className='bg-muted px-1 py-0.5 rounded text-xs'>freeze: 'right'</code> to your header
                configuration
              </li>
              <li>You can have multiple left-freeze columns (they stack from left to right)</li>
              <li>You can have multiple right-freeze columns (they stack from right to left)</li>
              <li>Regular columns scroll normally between the frozen sections</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>🚀 Next Steps</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Ready to explore more advanced table features? Check out these examples:
          </p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='/docs/examples/checkbox-selection'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Checkbox Selection
            </a>
            <a
              href='/docs/examples/expand-row'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Expand Rows
            </a>
            <a
              href='/docs/examples/custom-cell'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Custom Cells
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreezeColumnPage;
