import { useState } from 'react';
import clsx from 'clsx';
import { VirtualTable, type IHeader } from '../../components/virtual-table';

// Sample data type
type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  performance: number;
  avatar?: string;
  skills: string[];
};

// Sample data
const sampleData: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Senior Developer',
    department: 'Engineering',
    salary: 85000,
    status: 'active',
    joinDate: '2022-01-15',
    performance: 92,
    skills: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
    salary: 95000,
    status: 'active',
    joinDate: '2021-08-20',
    performance: 88,
    skills: ['Strategy', 'Analytics', 'Leadership'],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'UI/UX Designer',
    department: 'Design',
    salary: 75000,
    status: 'pending',
    joinDate: '2023-03-10',
    performance: 85,
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    position: 'Data Analyst',
    department: 'Analytics',
    salary: 70000,
    status: 'inactive',
    joinDate: '2020-11-05',
    performance: 78,
    skills: ['Python', 'SQL', 'Tableau'],
  },
  {
    id: 5,
    name: 'David Brown',
    position: 'DevOps Engineer',
    department: 'Engineering',
    salary: 90000,
    status: 'active',
    joinDate: '2022-06-12',
    performance: 94,
    skills: ['AWS', 'Docker', 'Kubernetes'],
  },
];

// Custom cell components
const StatusBadge = ({ status }: { status: Employee['status'] }) => {
  const getStatusConfig = (status: Employee['status']) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' };
      case 'inactive':
        return { bg: 'bg-red-100', text: 'text-red-800', label: 'Inactive' };
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Unknown' };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={clsx('px-2 py-1 rounded-full text-xs font-medium', config.bg, config.text)}>
      {config.label}
    </span>
  );
};

const ProgressBar = ({ value }: { value: number }) => (
  <div className='w-full bg-gray-200 rounded-full h-2'>
    <div
      className={clsx('h-2 rounded-full transition-all duration-300', {
        'bg-red-500': value < 70,
        'bg-yellow-500': value >= 70 && value < 85,
        'bg-green-500': value >= 85,
      })}
      style={{ width: `${value}%` }}
    />
    <span className='text-xs text-gray-600 mt-1 block'>{value}%</span>
  </div>
);

const SalaryCell = ({ salary }: { salary: number }) => (
  <span className='font-mono text-sm'>
    ${salary.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
  </span>
);

const SkillsTags = ({ skills }: { skills: string[] }) => (
  <div className='flex flex-wrap gap-1'>
    {skills.map((skill, index) => (
      <span
        key={index}
        className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md border border-blue-200'
      >
        {skill}
      </span>
    ))}
  </div>
);

const ActionButtons = ({ employee }: { employee: Employee }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    console.log(`Editing employee: ${employee.name}`);
  };

  const handleDelete = () => {
    console.log(`Deleting employee: ${employee.name}`);
  };

  return (
    <div className='flex gap-2'>
      <button
        className='px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors'
        onClick={handleEdit}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        className='px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors'
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

const AvatarCell = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className='flex items-center gap-3'>
      <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium'>
        {initials}
      </div>
      <span className='font-medium'>{name}</span>
    </div>
  );
};

function CustomCellPage() {
  const [showCode, setShowCode] = useState(false);

  // Headers with custom cell rendering
  const headers: IHeader<Employee>[] = [
    { key: 'row-selection', caption: '', width: 50 },
    {
      key: 'name',
      caption: 'Employee',
      width: 200,
      renderCell: (employee) => <AvatarCell name={employee.name} />,
    },
    { key: 'position', caption: 'Position', width: 150 },
    {
      key: 'department',
      caption: 'Department',
      width: 120,
      renderCell: (employee) => <span className='font-medium text-blue-600'>{employee.department}</span>,
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (employee) => <SalaryCell salary={employee.salary} />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderCell: (employee) => <StatusBadge status={employee.status} />,
    },
    {
      key: 'performance',
      caption: 'Performance',
      width: 150,
      renderCell: (employee) => <ProgressBar value={employee.performance} />,
    },
    {
      key: 'skills',
      caption: 'Skills',
      width: 200,
      renderCell: (employee) => <SkillsTags skills={employee.skills} />,
    },
    {
      key: 'joinDate',
      caption: 'Join Date',
      width: 120,
      renderCell: (employee) => (
        <span className='text-sm text-gray-600'>{new Date(employee.joinDate).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'action',
      caption: 'Actions',
      width: 150,
      renderCell: (employee) => <ActionButtons employee={employee} />,
    },
  ];

  const codeExample = `// Custom Cell Rendering Examples

// 1. Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' };
      case 'inactive':
        return { bg: 'bg-red-100', text: 'text-red-800', label: 'Inactive' };
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Unknown' };
    }
  };

  const config = getStatusConfig(status);
  return (
    <span className={\`px-2 py-1 rounded-full text-xs font-medium \${config.bg} \${config.text}\`}>
      {config.label}
    </span>
  );
};

// 2. Progress Bar Component
const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className={\`h-2 rounded-full transition-all duration-300 \${
        value < 70 ? 'bg-red-500' : value < 85 ? 'bg-yellow-500' : 'bg-green-500'
      }\`}
      style={{ width: \`\${value}%\` }}
    />
    <span className="text-xs text-gray-600 mt-1 block">{value}%</span>
  </div>
);

// 3. Avatar with Initials
const AvatarCell = ({ name }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
        {initials}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

// 4. Header Configuration with Custom Render
const headers: IHeader<Employee>[] = [
    { key: 'row-selection', caption: '', width: 50 },
    {
      key: 'name',
      caption: 'Employee',
      width: 200,
      renderCell: (employee) => <AvatarCell name={employee.name} />,
    },
    { key: 'position', caption: 'Position', width: 150 },
    {
      key: 'department',
      caption: 'Department',
      width: 120,
      renderCell: (employee) => <span className='font-medium text-blue-600'>{employee.department}</span>,
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (employee) => <SalaryCell salary={employee.salary} />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderCell: (employee) => <StatusBadge status={employee.status} />,
    },
    {
      key: 'performance',
      caption: 'Performance',
      width: 150,
      renderCell: (employee) => <ProgressBar value={employee.performance} />,
    },
    {
      key: 'skills',
      caption: 'Skills',
      width: 200,
      renderCell: (employee) => <SkillsTags skills={employee.skills} />,
    },
    {
      key: 'joinDate',
      caption: 'Join Date',
      width: 120,
      renderCell: (employee) => (
        <span className='text-sm text-gray-600'>{new Date(employee.joinDate).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'action',
      caption: 'Actions',
      width: 150,
      renderCell: (employee) => <ActionButtons employee={employee} />,
    },
  ];

// 5. Virtual Table with Custom Cells
<VirtualTable
  headers={headers}
  data={sampleData}
  rowKey='id'
  headerMode='double'
  rowHeight={70}
  headerHeight={40}
  filterHeight={32}
  classNameCell={(data, rowIndex, columnIndex) => {
      // Custom cell styling examples
      if (columnIndex === 4) return 'bg-blue-50'; // Department column
      if (data.status === 'inactive') return 'opacity-60';
      // Add some visual feedback for even/odd rows
      if (rowIndex % 2 === 0) return 'bg-gray-50';
    return '';
  }}
/>`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Custom Cell Rendering</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to create custom cell components for the Virtual Table. Custom cell rendering allows you
          to display rich content like badges, progress bars, buttons, and more.
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
            data={sampleData}
            rowKey='id'
            headerMode='double'
            rowHeight={70}
            headerHeight={40}
            filterHeight={32}
            classNameCell={(data, rowIndex, columnIndex) => {
              // Custom cell styling examples
              if (columnIndex === 4) return 'bg-blue-50'; // Department column
              if (data.status === 'inactive') return 'opacity-60';
              // Add some visual feedback for even/odd rows
              if (rowIndex % 2 === 0) return 'bg-gray-50';
              return '';
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
              <span className='text-sm font-medium'>Custom Cell Rendering Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎨 Custom Components</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Status badges with color coding</li>
              <li>• Progress bars with dynamic colors</li>
              <li>• Avatar cells with initials</li>
              <li>• Action buttons with state management</li>
              <li>• Skills tags and formatted values</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>⚡ Performance & Styling</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Efficient virtualization with custom cells</li>
              <li>• Conditional styling based on data</li>
              <li>• Lightweight components for optimal performance</li>
              <li>• TypeScript support with proper typing</li>
              <li>• Responsive design patterns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>💡 Implementation Tips</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Here are some best practices for creating custom cells:
          </p>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <h4 className='font-medium mb-2'>Custom Cell Rendering</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>renderCell</code> prop for custom content
                </li>
                <li>
                  • Access row data:{' '}
                  <code className='bg-muted px-1 rounded'>renderCell: (data) =&gt; &lt;Component /&gt;</code>
                </li>
                <li>• Keep components lightweight for performance</li>
                <li>• Use React.memo for complex components</li>
              </ul>
            </div>
            <div>
              <h4 className='font-medium mb-2'>Conditional Styling</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>classNameCell</code> for dynamic styling
                </li>
                <li>• Apply styles based on data values</li>
                <li>• Consider row and column indices</li>
                <li>• Use Tailwind CSS for consistent styling</li>
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
            Ready to explore more advanced features? Check out these examples:
          </p>
          <div className='flex flex-wrap gap-2'>
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
              Expand Rows
            </a>
            <a
              href='/docs/examples/footer'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Footer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomCellPage;
