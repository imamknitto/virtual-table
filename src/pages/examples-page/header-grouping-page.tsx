import { useState } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data for employee table
const generateEmployeeData = () => {
  return Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    performance: faker.number.int({ min: 1, max: 5 }),
    manager: faker.person.fullName(),
    location: faker.location.city(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      { min: 2, max: 5 },
    ),
  }));
};

// Generate sample data for sales report
const generateSalesData = () => {
  return Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    product: faker.commerce.productName(),
    category: faker.commerce.department(),
    q1Sales: faker.number.int({ min: 10000, max: 100000 }),
    q2Sales: faker.number.int({ min: 10000, max: 100000 }),
    q3Sales: faker.number.int({ min: 10000, max: 100000 }),
    q4Sales: faker.number.int({ min: 10000, max: 100000 }),
    totalSales: 0, // Will be calculated
    profit: faker.number.int({ min: 5000, max: 50000 }),
    margin: 0, // Will be calculated
    region: faker.location.state(),
    salesRep: faker.person.fullName(),
  })).map((item) => ({
    ...item,
    totalSales: item.q1Sales + item.q2Sales + item.q3Sales + item.q4Sales,
    margin: Math.round((item.profit / item.totalSales) * 100),
  }));
};

const HeaderGroupingPage = () => {
  const [employeeData] = useState(generateEmployeeData());
  const [salesData] = useState(generateSalesData());
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);
  const [showCode4, setShowCode4] = useState(false);

  // Example 1: Basic Header Grouping - Employee Information
  const employeeHeaders: IHeader<(typeof employeeData)[0]>[] = [
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => `$${item.salary.toLocaleString()}`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
  ];

  // Example 2: Complex Header Grouping - Sales Report
  const salesHeaders: IHeader<(typeof salesData)[0]>[] = [
    { key: 'product', caption: 'Product', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'group-header-quarterly',
      caption: 'Quarterly Sales',
      children: [
        {
          key: 'q1Sales',
          caption: 'Q1',
          width: 100,
          renderCell: (item) => `$${item.q1Sales.toLocaleString()}`,
        },
        {
          key: 'q2Sales',
          caption: 'Q2',
          width: 100,
          renderCell: (item) => `$${item.q2Sales.toLocaleString()}`,
        },
        {
          key: 'q3Sales',
          caption: 'Q3',
          width: 100,
          renderCell: (item) => `$${item.q3Sales.toLocaleString()}`,
        },
        {
          key: 'q4Sales',
          caption: 'Q4',
          width: 100,
          renderCell: (item) => `$${item.q4Sales.toLocaleString()}`,
        },
      ],
    },
    {
      key: 'group-header-summary',
      caption: 'Summary',
      children: [
        {
          key: 'totalSales',
          caption: 'Total Sales',
          width: 120,
          renderCell: (item) => `$${item.totalSales.toLocaleString()}`,
        },
        {
          key: 'profit',
          caption: 'Profit',
          width: 100,
          renderCell: (item) => `$${item.profit.toLocaleString()}`,
        },
        { key: 'margin', caption: 'Margin %', width: 100, renderCell: (item) => `${item.margin}%` },
      ],
    },
    {
      key: 'group-header-team',
      caption: 'Team',
      children: [
        { key: 'region', caption: 'Region', width: 100 },
        { key: 'salesRep', caption: 'Sales Rep', width: 120 },
      ],
    },
  ];

  // Example 3: Nested Header Grouping with Filters
  const complexHeaders: IHeader<(typeof employeeData)[0]>[] = [
    { key: 'name', caption: 'Name', width: 180 },
    { key: 'email', caption: 'Email', width: 220 },
    {
      key: 'group-header-personal',
      caption: 'Personal Information',
      width: 350,
      children: [
        { key: 'phone', caption: 'Phone', width: 120 },
        { key: 'location', caption: 'Location', width: 120 },
        { key: 'startDate', caption: 'Start Date', width: 110 },
      ],
    },
    {
      key: 'group-header-professional',
      caption: 'Professional Details',
      width: 450,
      children: [
        {
          key: 'group-header-role',
          caption: 'Role',
          width: 225,
          children: [
            { key: 'department', caption: 'Department', width: 115 },
            { key: 'position', caption: 'Position', width: 110 },
          ],
        },
        {
          key: 'group-header-performance',
          caption: 'Performance',
          width: 225,
          children: [
            { key: 'manager', caption: 'Manager', width: 115 },
            { key: 'performance', caption: 'Rating', width: 110 },
          ],
        },
      ],
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => `$${item.salary.toLocaleString()}`,
    },
  ];

  // Example 4: Header Grouping with Freeze Columns
  const freezeGroupHeaders: IHeader<(typeof employeeData)[0]>[] = [
    {
      key: 'group-header-basic',
      caption: 'Basic Info',
      freeze: 'left',
      width: 300,
      children: [
        { key: 'name', caption: 'Name', width: 150 },
        { key: 'email', caption: 'Email', width: 150 },
      ],
    },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      width: 300,
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      width: 400,
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      width: 200,
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => `$${item.salary.toLocaleString()}`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    {
      key: 'group-header-actions',
      caption: 'Actions',
      freeze: 'right',
      width: 120,
      children: [{ key: 'startDate', caption: 'Start Date', width: 120 }],
    },
  ];

  const codeExample1 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const EmployeeTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      width: 300,
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      width: 400,
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      width: 200,
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
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

  const codeExample2 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const SalesReportTable = () => {
  const [data] = useState(generateSalesData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'product', caption: 'Product', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'group-header-quarterly',
      caption: 'Quarterly Sales',
      width: 400,
      children: [
        { key: 'q1Sales', caption: 'Q1', width: 100 },
        { key: 'q2Sales', caption: 'Q2', width: 100 },
        { key: 'q3Sales', caption: 'Q3', width: 100 },
        { key: 'q4Sales', caption: 'Q4', width: 100 },
      ],
    },
    {
      key: 'group-header-summary',
      caption: 'Summary',
      width: 300,
      children: [
        { key: 'totalSales', caption: 'Total Sales', width: 120 },
        { key: 'profit', caption: 'Profit', width: 100 },
        { key: 'margin', caption: 'Margin %', width: 80 },
      ],
    },
    {
      key: 'group-header-team',
      caption: 'Team',
      width: 200,
      children: [
        { key: 'region', caption: 'Region', width: 100 },
        { key: 'salesRep', caption: 'Sales Rep', width: 100 },
      ],
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

  const codeExample3 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const ComplexGroupingTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'name', caption: 'Name', width: 180 },
    { key: 'email', caption: 'Email', width: 220 },
    {
      key: 'group-header-personal',
      caption: 'Personal Information',
      width: 350,
      children: [
        { key: 'phone', caption: 'Phone', width: 120 },
        { key: 'location', caption: 'Location', width: 120 },
        { key: 'startDate', caption: 'Start Date', width: 110 },
      ],
    },
    {
      key: 'group-header-professional',
      caption: 'Professional Details',
      width: 450,
      children: [
        {
          key: 'group-header-role',
          caption: 'Role',
          width: 225,
          children: [
            { key: 'department', caption: 'Department', width: 115 },
            { key: 'position', caption: 'Position', width: 110 },
          ],
        },
        {
          key: 'group-header-performance',
          caption: 'Performance',
          width: 225,
          children: [
            { key: 'manager', caption: 'Manager', width: 115 },
            { key: 'performance', caption: 'Rating', width: 110 },
          ],
        },
      ],
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
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

  const codeExample4 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const FreezeGroupingTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    {
      key: 'group-header-basic',
      caption: 'Basic Info',
      freeze: 'left',
      width: 300,
      children: [
        { key: 'name', caption: 'Name', width: 150 },
        { key: 'email', caption: 'Email', width: 150 },
      ],
    },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      width: 300,
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      width: 400,
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      width: 200,
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    {
      key: 'group-header-actions',
      caption: 'Actions',
      freeze: 'right',
      width: 120,
      children: [
        { key: 'startDate', caption: 'Start Date', width: 120 },
      ],
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
        <h1 className='text-4xl font-bold tracking-tight'>Header Grouping</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to create grouped headers in your virtual table to organize related columns and improve
          data presentation with hierarchical header structures.
        </p>
      </div>

      {/* Example 1: Basic Header Grouping */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Basic Header Grouping</h2>
          <button
            onClick={() => setShowCode1(!showCode1)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode1 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
          <p className='text-sm text-blue-800'>
            <strong>Example:</strong> Employee table with grouped headers organizing related information into
            logical sections: Contact Information, Work Details, and Financial data.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={employeeHeaders}
            data={employeeData}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
          />
        </div>

        {showCode1 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Basic Header Grouping Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample1}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 2: Complex Header Grouping */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Complex Header Grouping</h2>
          <button
            onClick={() => setShowCode2(!showCode2)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode2 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
          <p className='text-sm text-green-800'>
            <strong>Example:</strong> Sales report table with quarterly data grouped under "Quarterly Sales"
            and summary metrics grouped under "Summary" with calculated values.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={salesHeaders}
            data={salesData}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
          />
        </div>

        {showCode2 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Complex Header Grouping Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample2}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 3: Nested Header Grouping */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Nested Header Grouping</h2>
          <button
            onClick={() => setShowCode3(!showCode3)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode3 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg'>
          <p className='text-sm text-purple-800'>
            <strong>Example:</strong> Employee table with nested header groups showing how to create
            multi-level header hierarchies for complex data organization.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={complexHeaders}
            data={employeeData.slice(0, 15)}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
          />
        </div>

        {showCode3 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Nested Header Grouping Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample3}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 4: Header Grouping with Freeze Columns */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Header Grouping with Freeze Columns</h2>
          <button
            onClick={() => setShowCode4(!showCode4)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode4 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg'>
          <p className='text-sm text-orange-800'>
            <strong>Example:</strong> Employee table combining header grouping with freeze columns. Basic Info
            is frozen on the left, Actions are frozen on the right, while other grouped columns scroll
            horizontally.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={freezeGroupHeaders}
            data={employeeData}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
          />
        </div>

        {showCode4 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Header Grouping with Freeze Columns Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample4}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Key Naming Convention */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Key Naming Convention</h2>
        <div className='mb-6 p-6 bg-yellow-50 border border-yellow-200 rounded-lg'>
          <div className='flex items-start space-x-3'>
            <div className='flex-shrink-0'>
              <div className='w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm font-bold'>!</span>
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-yellow-800 mb-2'>Important: Key Naming for Group Headers</h3>
              <p className='text-sm text-yellow-700 mb-3'>
                To create a header group, you <strong>MUST</strong> use a key that starts with{' '}
                <code className='bg-yellow-100 px-2 py-1 rounded text-xs font-mono'>group-header-</code>{' '}
                prefix.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-600 font-bold'>✅</span>
                  <code className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono'>
                    group-header-contact
                  </code>
                  <span className='text-sm text-yellow-700'>- Creates a group header</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-600 font-bold'>✅</span>
                  <code className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono'>
                    group-header-financial
                  </code>
                  <span className='text-sm text-yellow-700'>- Creates a group header</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-red-600 font-bold'>❌</span>
                  <code className='bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono'>
                    contact-info
                  </code>
                  <span className='text-sm text-yellow-700'>- Will be treated as regular column</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-red-600 font-bold'>❌</span>
                  <code className='bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono'>
                    financial-data
                  </code>
                  <span className='text-sm text-yellow-700'>- Will be treated as regular column</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔑 Key Requirements</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • Must start with <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-</code>
              </li>
              <li>• Must be unique across all headers</li>
              <li>• Cannot be a data property key</li>
              <li>• Use descriptive names after the prefix</li>
              <li>• Follow kebab-case convention</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>📝 Naming Examples</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-contact</code>
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-personal-info</code>
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-quarterly-sales</code>
              </li>
              <li>
                •{' '}
                <code className='bg-muted px-1 py-0.5 rounded text-xs'>group-header-performance-metrics</code>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Header Grouping Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>✅ Core Features</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Create logical groupings of related columns</li>
              <li>• Support for unlimited nesting levels</li>
              <li>• Automatic width calculation for grouped columns</li>
              <li>• Responsive header resizing with grouped columns</li>
              <li>• Works with all table features (filters, sorting, etc.)</li>
              <li>• Compatible with freeze columns (left/right)</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎨 Customization</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Custom group header captions</li>
              <li>• Individual column styling within groups</li>
              <li>• Flexible width distribution</li>
              <li>• Integration with freeze columns</li>
              <li>• TypeScript support for nested structures</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Best Practices</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>📋 Header Design</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>
                • <strong className='text-red-600'>ALWAYS</strong> use{' '}
                <code className='bg-red-100 text-red-800 px-1 py-0.5 rounded text-xs'>group-header-</code>{' '}
                prefix for group keys
              </li>
              <li>• Use descriptive group names that clearly indicate content</li>
              <li>• Keep group names concise but meaningful</li>
              <li>• Limit nesting to 2-3 levels for better readability</li>
              <li>• Ensure consistent width distribution within groups</li>
              <li>• Consider user workflow when organizing columns</li>
              <li>• Freeze important groups (like ID, Name) for better UX</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>⚡ Performance</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Group headers don't impact virtual scrolling performance</li>
              <li>• Width calculations are optimized for grouped columns</li>
              <li>• Resize operations work efficiently with nested structures</li>
              <li>• Filter and sort operations work seamlessly with groups</li>
              <li>• Memory usage remains optimal with complex groupings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Reference</h2>
        <div className='border rounded-lg overflow-hidden'>
          <div className='bg-muted px-4 py-2 border-b'>
            <span className='text-sm font-medium'>Header Grouping Props</span>
          </div>
          <div className='p-4 space-y-4'>
            <div>
              <h4 className='font-medium text-sm mb-2'>children</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Array of child headers that belong to this group. Each child can also have its own children
                for nested grouping.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>
                children?: Omit&lt;IHeader&lt;TData&gt;, 'freeze'&gt;[]
              </code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>key</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                <strong className='text-red-600'>CRITICAL:</strong> For group headers, the key{' '}
                <strong>MUST</strong> start with{' '}
                <code className='bg-red-100 text-red-800 px-1 py-0.5 rounded text-xs'>group-header-</code>{' '}
                prefix. This is how the virtual table identifies and renders grouped headers.
              </p>
              <div className='mb-2 p-2 bg-red-50 border border-red-200 rounded text-xs'>
                <strong>Examples:</strong>
                <br />✅ <code className='text-green-700'>group-header-contact</code>
                <br />✅ <code className='text-green-700'>group-header-financial</code>
                <br />❌ <code className='text-red-700'>contact-info</code> (will be treated as regular
                column)
              </div>
              <code className='text-xs bg-muted px-2 py-1 rounded'>
                key: keyof TData | 'expand' | 'action' | 'row-selection' | (string & object)
              </code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>caption</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Display text for the group header. This appears in the top row of the grouped columns.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>caption: string</code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>width</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Total width of the group. This should equal the sum of all child column widths.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>width?: number</code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>freeze</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Freeze the entire group to the left or right side of the table. Useful for keeping important
                grouped columns visible while scrolling.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>freeze?: 'left' | 'right'</code>
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
              href='/docs/examples/freeze-column'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Freeze Columns
            </a>
            <a
              href='/docs/examples/header-customization'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Header Customization
            </a>
            <a
              href='/docs/examples/expand-row'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Expand Row
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderGroupingPage;
