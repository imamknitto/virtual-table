import { useState } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data for basic expand example
const generateEmployeeData = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    country: faker.location.country(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      { min: 2, max: 5 },
    ),
    projects: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => ({
      name: faker.company.buzzPhrase(),
      status: faker.helpers.arrayElement(['Active', 'Completed', 'On Hold']),
      progress: faker.number.int({ min: 0, max: 100 }),
    })),
  }));
};

// Generate sample data for nested table example
const generateCompanyData = () => {
  return Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    companyName: faker.company.name(),
    industry: faker.commerce.department(),
    revenue: faker.number.int({ min: 1000000, max: 100000000 }),
    employees: faker.number.int({ min: 10, max: 1000 }),
    founded: faker.date.past({ years: 50 }).getFullYear(),
    ceo: faker.person.fullName(),
    headquarters: faker.location.city(),
    departments: Array.from({ length: faker.number.int({ min: 3, max: 8 }) }, () => ({
      name: faker.commerce.department(),
      manager: faker.person.fullName(),
      employees: faker.number.int({ min: 5, max: 50 }),
      budget: faker.number.int({ min: 100000, max: 5000000 }),
      teams: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => ({
        name: faker.company.buzzPhrase(),
        lead: faker.person.fullName(),
        members: faker.number.int({ min: 3, max: 15 }),
        projects: faker.number.int({ min: 1, max: 8 }),
        status: faker.helpers.arrayElement(['Active', 'Inactive', 'Planning']),
      })),
    })),
  }));
};

const ExpandRowPage = () => {
  const [employeeData] = useState(generateEmployeeData());
  const [companyData] = useState(generateCompanyData());
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);

  // Example 1: Basic Expand Row with Employee Details
  const employeeHeaders: IHeader<(typeof employeeData)[0]>[] = [
    { key: 'expand', caption: '', width: 50 },
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
  ];

  const renderEmployeeExpandedContent = (employee: (typeof employeeData)[0]) => (
    <div className='p-4 bg-gray-50 border-l-4 border-blue-500'>
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <h4 className='font-semibold text-lg mb-3 text-gray-800'>Personal Information</h4>
          <div className='space-y-2 text-sm'>
            <div>
              <span className='font-medium'>Phone:</span> {employee.phone}
            </div>
            <div>
              <span className='font-medium'>Address:</span> {employee.address}
            </div>
            <div>
              <span className='font-medium'>City:</span> {employee.city}
            </div>
            <div>
              <span className='font-medium'>Country:</span> {employee.country}
            </div>
          </div>
        </div>
        <div>
          <h4 className='font-semibold text-lg mb-3 text-gray-800'>Skills & Projects</h4>
          <div className='space-y-3'>
            <div>
              <span className='font-medium text-sm'>Skills:</span>
              <div className='flex flex-wrap gap-1 mt-1'>
                {employee.skills.map((skill, idx) => (
                  <span key={idx} className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className='font-medium text-sm'>Current Projects:</span>
              <div className='mt-1 space-y-1'>
                {employee.projects.map((project, idx) => (
                  <div key={idx} className='text-xs'>
                    <span className='font-medium'>{project.name}</span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded text-xs ${
                        project.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'Completed'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {project.status}
                    </span>
                    <div className='mt-1'>
                      <div className='w-full bg-gray-200 rounded-full h-1.5'>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full'
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className='text-xs text-gray-600'>{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Example 2: Nested Table with Company Departments
  const companyHeaders: IHeader<(typeof companyData)[0]>[] = [
    { key: 'expand', caption: '', width: 50 },
    { key: 'companyName', caption: 'Company', width: 200 },
    { key: 'industry', caption: 'Industry', width: 150 },
    {
      key: 'revenue',
      caption: 'Revenue',
      width: 150,
      renderCell: (item) => `$${(item.revenue / 1000000).toFixed(1)}M`,
    },
    { key: 'employees', caption: 'Employees', width: 120 },
    { key: 'founded', caption: 'Founded', width: 100 },
    { key: 'ceo', caption: 'CEO', width: 180 },
    { key: 'headquarters', caption: 'Headquarters', width: 150 },
  ];

  const renderCompanyExpandedContent = (company: (typeof companyData)[0]) => {
    // Define headers for the nested table (departments)
    const departmentHeaders: IHeader<(typeof company.departments)[0]>[] = [
      { key: 'expand', caption: '', width: 50 },
      { key: 'name', caption: 'Department', width: 200 },
      { key: 'manager', caption: 'Manager', width: 200 },
      { key: 'employees', caption: 'Employees', width: 120, renderCell: (item) => item.employees.toString() },
      {
        key: 'budget',
        caption: 'Budget',
        width: 150,
        renderCell: (item) => `$${item.budget.toLocaleString()}`,
      },
    ];

    // Render function for department teams (nested-nested table)
    const renderDepartmentTeams = (department: (typeof company.departments)[0]) => {
      const teamHeaders: IHeader<(typeof department.teams)[0]>[] = [
        { key: 'name', caption: 'Team Name', width: 200 },
        { key: 'lead', caption: 'Team Lead', width: 180 },
        { key: 'members', caption: 'Members', width: 100, renderCell: (item) => item.members.toString() },
        { key: 'projects', caption: 'Projects', width: 100, renderCell: (item) => item.projects.toString() },
        { 
          key: 'status', 
          caption: 'Status', 
          width: 120, 
          renderCell: (item) => (
            <span className={`px-2 py-1 rounded text-xs ${
              item.status === 'Active' ? 'bg-green-100 text-green-800' :
              item.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {item.status}
            </span>
          )
        },
      ];

      return (
        <div className='p-3 bg-blue-50 border-l-4 border-blue-400 ml-4'>
          <h5 className='font-medium text-sm mb-3 text-blue-800'>{department.name} Teams</h5>
          <div className='h-48'>
            <VirtualTable
              headers={teamHeaders}
              data={department.teams}
              rowKey='name'
              headerMode='single'
              rowHeight={24}
              headerHeight={28}
              hideHeader={false}
            />
          </div>
        </div>
      );
    };

    return (
      <div className='p-4 bg-gray-50 border-l-4 border-green-500'>
        <h4 className='font-semibold text-lg mb-4 text-gray-800'>Company Departments</h4>
        <div className='h-64'>
          <VirtualTable
            headers={departmentHeaders}
            data={company.departments}
            rowKey='name'
            headerMode='single'
            rowHeight={28}
            headerHeight={32}
            hideHeader={false}
            onRenderExpandedContent={renderDepartmentTeams}
          />
        </div>
      </div>
    );
  };

  // Example 3: Custom Expand Toggle
  const customEmployeeHeaders: IHeader<(typeof employeeData)[0]>[] = [
    {
      key: 'expand',
      caption: '',
      width: 100,
      renderExpandToggle: (_item, isExpanded) => (
        <div className='flex justify-center items-center w-full h-full'>
          <button
            data-action='expand'
            className={`px-1 py-1 rounded text-xs font-medium transition-colors ${
              isExpanded
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }`}
            type='button'
            aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      ),
    },
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
  ];

  const codeExample1 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const EmployeeTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'expand', caption: '', width: 50 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'department', caption: 'Department', width: 150 },
    { key: 'position', caption: 'Position', width: 180 },
    { 
      key: 'salary', 
      caption: 'Salary', 
      width: 120, 
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\` 
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
  ];

  const renderExpandedContent = (employee) => (
    <div className="p-4 bg-gray-50 border-l-4 border-blue-500">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-lg mb-3">Personal Information</h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Phone:</span> {employee.phone}</div>
            <div><span className="font-medium">Address:</span> {employee.address}</div>
            <div><span className="font-medium">City:</span> {employee.city}</div>
            <div><span className="font-medium">Country:</span> {employee.country}</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Skills & Projects</h4>
          {/* Skills and projects content */}
        </div>
      </div>
    </div>
  );

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`;

  const codeExample2 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const CompanyTable = () => {
  const [data] = useState(generateCompanyData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'expand', caption: '', width: 50 },
    { key: 'companyName', caption: 'Company', width: 200 },
    { key: 'industry', caption: 'Industry', width: 150 },
    { key: 'revenue', caption: 'Revenue', width: 150 },
    { key: 'employees', caption: 'Employees', width: 120 },
    { key: 'founded', caption: 'Founded', width: 100 },
    { key: 'ceo', caption: 'CEO', width: 180 },
    { key: 'headquarters', caption: 'Headquarters', width: 150 },
  ];

  const renderExpandedContent = (company) => {
    // Define headers for the nested table (departments)
    const departmentHeaders: IHeader<(typeof company.departments)[0]>[] = [
      { key: 'expand', caption: '', width: 50 },
      { key: 'name', caption: 'Department', width: 200 },
      { key: 'manager', caption: 'Manager', width: 200 },
      { key: 'employees', caption: 'Employees', width: 120 },
      { 
        key: 'budget', 
        caption: 'Budget', 
        width: 150, 
        renderCell: (item) => \`$\${item.budget.toLocaleString()}\` 
      },
    ];

    // Render function for department teams (nested-nested table)
    const renderDepartmentTeams = (department) => {
      const teamHeaders: IHeader<(typeof department.teams)[0]>[] = [
        { key: 'name', caption: 'Team Name', width: 200 },
        { key: 'lead', caption: 'Team Lead', width: 180 },
        { key: 'members', caption: 'Members', width: 100 },
        { key: 'projects', caption: 'Projects', width: 100 },
        { 
          key: 'status', 
          caption: 'Status', 
          width: 120, 
          renderCell: (item) => (
            <span className={\`px-2 py-1 rounded text-xs \${
              item.status === 'Active' ? 'bg-green-100 text-green-800' :
              item.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
              'bg-yellow-100 text-yellow-800'
            }\`}>
              {item.status}
            </span>
          )
        },
      ];

      return (
        <div className="p-3 bg-blue-50 border-l-4 border-blue-400 ml-4">
          <h5 className="font-medium text-sm mb-3 text-blue-800">{department.name} Teams</h5>
          <div className="h-48">
            <VirtualTable
              headers={teamHeaders}
              data={department.teams}
              rowKey="name"
              headerMode="single"
              rowHeight={24}
              headerHeight={28}
              hideHeader={false}
            />
          </div>
        </div>
      );
    };

    return (
      <div className="p-4 bg-gray-50 border-l-4 border-green-500">
        <h4 className="font-semibold text-lg mb-4">Company Departments</h4>
        <div className="h-64">
          <VirtualTable
            headers={departmentHeaders}
            data={company.departments}
            rowKey="name"
            headerMode="single"
            rowHeight={28}
            headerHeight={32}
            hideHeader={false}
            onRenderExpandedContent={renderDepartmentTeams}
          />
        </div>
      </div>
    );
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
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`;

  const codeExample3 = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const CustomExpandTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { 
      key: 'expand', 
      caption: '', 
      width: 80,
      renderExpandToggle: (item, isExpanded) => (
        <div className="flex justify-center items-center w-full h-full">
          <button
            data-action="expand"
            className={\`px-3 py-1 rounded text-xs font-medium transition-colors \${
              isExpanded 
                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }\`}
            type="button"
            aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      )
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'department', caption: 'Department', width: 150 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'salary', caption: 'Salary', width: 120 },
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
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Expand Row</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement expandable rows in your virtual table with detailed content, nested tables,
          and custom expand toggles.
        </p>
      </div>

      {/* Example 1: Basic Expand Row */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Basic Expand Row</h2>
          <button
            onClick={() => setShowCode1(!showCode1)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode1 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
          <p className='text-sm text-blue-800'>
            <strong>Example:</strong> Employee table with expandable rows showing detailed personal
            information, skills, and current projects.
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
            onRenderExpandedContent={renderEmployeeExpandedContent}
          />
        </div>

        {showCode1 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Basic Expand Row Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample1}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 2: Nested Table */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Nested Table in Expand Row</h2>
          <button
            onClick={() => setShowCode2(!showCode2)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode2 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
          <p className='text-sm text-green-800'>
            <strong>Example:</strong> Company table with expandable rows containing nested VirtualTable
            components. Each department can be expanded to show teams, demonstrating recursive expand functionality.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={companyHeaders}
            data={companyData}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            onRenderExpandedContent={renderCompanyExpandedContent}
          />
        </div>

        {showCode2 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Nested Table Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample2}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Example 3: Custom Expand Toggle */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Custom Expand Toggle</h2>
          <button
            onClick={() => setShowCode3(!showCode3)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode3 ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg'>
          <p className='text-sm text-purple-800'>
            <strong>Example:</strong> Employee table with custom expand toggle buttons instead of default
            chevron icons.
          </p>
        </div>

        <div className='h-96'>
          <VirtualTable
            headers={customEmployeeHeaders}
            data={employeeData.slice(0, 10)}
            rowKey='id'
            headerMode='double'
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            onRenderExpandedContent={renderEmployeeExpandedContent}
          />
        </div>

        {showCode3 && (
          <div className='mt-4 border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Custom Expand Toggle Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample3}</code>
            </pre>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Expand Row Features</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>✅ Core Features</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Click expand button to show/hide row details</li>
              <li>• Custom expand content with any React components</li>
              <li>• Nested tables and complex layouts supported</li>
              <li>• Smooth expand/collapse animations</li>
              <li>• Virtual scrolling works with expanded rows</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎨 Customization</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Custom expand toggle buttons</li>
              <li>• Flexible content rendering</li>
              <li>• Styled expand content areas</li>
              <li>• Integration with existing table features</li>
              <li>• TypeScript support for all props</li>
            </ul>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Reference</h2>
        <div className='border rounded-lg overflow-hidden'>
          <div className='bg-muted px-4 py-2 border-b'>
            <span className='text-sm font-medium'>Expand Row Props</span>
          </div>
          <div className='p-4 space-y-4'>
            <div>
              <h4 className='font-medium text-sm mb-2'>onRenderExpandedContent</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Function that renders the expanded content for each row.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>
                onRenderExpandedContent?: (item: TData) =&gt; React.ReactNode
              </code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>renderExpandToggle</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Custom function to render the expand/collapse toggle button.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>
                renderExpandToggle?: (item: TData, isExpanded: boolean) =&gt; React.ReactNode
              </code>
            </div>
            <div>
              <h4 className='font-medium text-sm mb-2'>onRowExpand</h4>
              <p className='text-sm text-muted-foreground mb-2'>
                Callback function called when a row is expanded or collapsed.
              </p>
              <code className='text-xs bg-muted px-2 py-1 rounded'>
                onRowExpand?: (item: TData) =&gt; void
              </code>
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
              href='/docs/examples/checkbox-selection'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Checkbox Selection
            </a>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpandRowPage;
