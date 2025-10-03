import { useState } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data using Faker.js
const generateSampleData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
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
  }));
};

const CheckboxSelectionPage = () => {
  const [data] = useState(generateSampleData());
  const [showCode, setShowCode] = useState(false);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [deselectedRows, setDeselectedRows] = useState<(string | number)[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // Define table headers with checkbox selection
  const headers: IHeader<(typeof data)[0]>[] = [
    {
      key: 'row-selection',
      caption: '',
      width: 50,
      hideHeaderAction: true,
      hideFilter: {
        sort: true,
        search: true,
        filterSelection: true,
        filterAdvance: true,
      },
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'department', caption: 'Department', width: 120 },
    { key: 'status', caption: 'Status', width: 100 },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => `$${item.salary.toLocaleString()}`,
    },
  ];

  // Handle checkbox selection changes
  const handleCheckboxSelection = (
    selectedRows: (string | number)[],
    deselectedRows: (string | number)[],
    isSelectAll: boolean,
  ) => {
    setSelectedRows(selectedRows);
    setDeselectedRows(deselectedRows);
    setIsSelectAll(isSelectAll);
  };

  const codeExample = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data
const generateSampleData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
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
  }));
};

const CheckboxSelectionTable = () => {
  const [data] = useState(generateSampleData());
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [deselectedRows, setDeselectedRows] = useState<(string | number)[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // Define table headers with checkbox selection
  const headers: IHeader<(typeof data)[0]>[] = [
    { 
      key: 'row-selection', 
      caption: '', 
      width: 50,
      hideHeaderAction: true,
      hideFilter: {
        sort: true,
        search: true,
        filterSelection: true,
        filterAdvance: true,
      }
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'department', caption: 'Department', width: 120 },
    { key: 'status', caption: 'Status', width: 100 },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
    },
  ];

  // Handle checkbox selection changes
  const handleCheckboxSelection = (
    selectedRows: (string | number)[],
    deselectedRows: (string | number)[],
    isSelectAll: boolean
  ) => {
    setSelectedRows(selectedRows);
    setDeselectedRows(deselectedRows);
    setIsSelectAll(isSelectAll);
  };

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onChangeCheckboxRowSelection={handleCheckboxSelection}
    />
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Checkbox Selection</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement checkbox selection in your virtual table with individual row selection and
          select all functionality.
        </p>
      </div>

      {/* Selection Status */}
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='border rounded-lg p-4 bg-blue-50'>
          <h3 className='font-semibold text-blue-900 mb-2'>Selected Rows</h3>
          <p className='text-2xl font-bold text-blue-700'>{selectedRows.length}</p>
          <p className='text-sm text-blue-600 mt-1'>
            {selectedRows.length > 0
              ? `IDs: ${selectedRows.slice(0, 5).join(', ')}${selectedRows.length > 5 ? '...' : ''}`
              : 'No rows selected'}
          </p>
        </div>
        <div className='border rounded-lg p-4 bg-orange-50'>
          <h3 className='font-semibold text-orange-900 mb-2'>Deselected Rows</h3>
          <p className='text-2xl font-bold text-orange-700'>{deselectedRows.length}</p>
          <p className='text-sm text-orange-600 mt-1'>
            {deselectedRows.length > 0
              ? `IDs: ${deselectedRows.slice(0, 5).join(', ')}${deselectedRows.length > 5 ? '...' : ''}`
              : 'No rows deselected'}
          </p>
        </div>
        <div className='border rounded-lg p-4 bg-green-50'>
          <h3 className='font-semibold text-green-900 mb-2'>Select All Status</h3>
          <p className='text-2xl font-bold text-green-700'>{isSelectAll ? 'Active' : 'Inactive'}</p>
          <p className='text-sm text-green-600 mt-1'>
            {isSelectAll ? 'All rows are selected' : 'Individual selection mode'}
          </p>
        </div>
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
            onChangeCheckboxRowSelection={handleCheckboxSelection}
          />
        </div>
      </section>

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Checkbox Selection Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Checkbox Selection Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>✅ Selection Features</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Individual row selection with checkboxes</li>
              <li>• Select all functionality in header</li>
              <li>• Deselect individual rows when "select all" is active</li>
              <li>• Real-time selection state tracking</li>
              <li>• Custom selection change callbacks</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎯 Implementation</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Add \`row-selection\` key to headers</li>
              <li>• Use \`onChangeCheckboxRowSelection\` callback</li>
              <li>• Track selected/deselected rows state</li>
              <li>• Handle select all vs individual selection</li>
              <li>• Customize checkbox column width</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
        <div className='space-y-4'>
          <div className='border rounded-lg p-4 bg-blue-50'>
            <h3 className='font-semibold text-blue-900 mb-2'>💡 Pro Tips</h3>
            <ul className='text-sm text-blue-800 space-y-1'>
              <li>• Use \`hideHeaderAction: true\` and \`hideFilter\` to clean up the checkbox column</li>
              <li>
                • The \`onChangeCheckboxRowSelection\` callback provides three parameters: selected rows,
                deselected rows, and select all status
              </li>
              <li>• When \`isSelectAll\` is true, individual selections are tracked as deselected rows</li>
              <li>• You can implement bulk actions using the selection state</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4 bg-yellow-50'>
            <h3 className='font-semibold text-yellow-900 mb-2'>⚠️ Important Notes</h3>
            <ul className='text-sm text-yellow-800 space-y-1'>
              <li>• The \`row-selection\` key is reserved for checkbox functionality</li>
              <li>• Make sure your \`rowKey\` is unique for each row</li>
              <li>• Selection state is managed internally by the component</li>
              <li>• Use the callback to sync with your application state</li>
            </ul>
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
              href='/docs/examples/action-cell'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Action Cells
            </a>
            <a
              href='/docs/examples/expand-row'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Expand Rows
            </a>
            <a
              href='/docs/examples/freeze-column'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Freeze Columns
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckboxSelectionPage;
