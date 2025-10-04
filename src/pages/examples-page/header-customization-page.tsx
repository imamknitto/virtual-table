import { useState, useMemo } from 'react';
import { VirtualTable } from '../../components/virtual-table';
import type { IHeader } from '../../components/virtual-table/lib/types';
import { faker } from '@faker-js/faker';
import clsx from 'clsx';

type Employee = {
  id: number;
  name: string;
  email: string;
  company: string;
  department: string;
  position: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  experience: number;
  phone: string;
  city: string;
  country: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
};

// Generate sample data using Faker.js
const generateSampleData = (): Employee[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']) as Employee['status'],
    joinDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    experience: faker.number.int({ min: 1, max: 15 }),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    location: faker.helpers.arrayElement(['Remote', 'On-site', 'Hybrid']) as Employee['location'],
  }));
};

function HeaderCustomizationPage() {
  const [data] = useState(generateSampleData());
  const [headerMode, setHeaderMode] = useState<'single' | 'double'>('double');
  const [customHeaderEnabled, setCustomHeaderEnabled] = useState(true);
  const [filterSelectionEnabled, setFilterSelectionEnabled] = useState(true);
  const [filterVisibilityEnabled, setFilterVisibilityEnabled] = useState(true);
  const [showCode, setShowCode] = useState(false);

  const headers: IHeader<Employee>[] = useMemo(
    () => [
      {
        key: 'id',
        caption: 'ID',
        width: 80,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: true,
              filterAdvance: true,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>🔢 ID</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'name',
        caption: 'Full Name',
        width: 180,
        filterSelectionOptions: filterSelectionEnabled
          ? Array.from(new Set(data.map((item) => item.name))).slice(0, 10)
          : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: false,
              filterSelection: true,
              filterAdvance: true,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>👤 Name</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'email',
        caption: 'Email',
        width: 250,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: false,
              filterSelection: true,
              filterAdvance: false,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>📧 Email</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'company',
        caption: 'Company',
        width: 200,
        filterSelectionOptions: filterSelectionEnabled
          ? Array.from(new Set(data.map((item) => item.company))).slice(0, 10)
          : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: false,
              filterSelection: false,
              filterAdvance: true,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>🏢 Company</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'department',
        caption: 'Department',
        width: 140,
        filterSelectionOptions: filterSelectionEnabled
          ? ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']
          : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: false,
              filterAdvance: true,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>🏢 Dept</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'position',
        caption: 'Position',
        width: 180,
        filterSelectionOptions: filterSelectionEnabled
          ? Array.from(new Set(data.map((item) => item.position))).slice(0, 8)
          : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: false,
              filterSelection: false,
              filterAdvance: true,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>💼 Position</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'status',
        caption: 'Status',
        width: 100,
        filterSelectionOptions: filterSelectionEnabled ? ['active', 'inactive', 'pending'] : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: false,
              filterAdvance: true,
            }
          : undefined,
        renderCell: (item) => (
          <span
            className={clsx('px-2 py-1 rounded-full text-xs font-medium', {
              'bg-green-100 text-green-800': item.status === 'active',
              'bg-red-100 text-red-800': item.status === 'inactive',
              'bg-yellow-100 text-yellow-800': item.status === 'pending',
            })}
          >
            {item.status}
          </span>
        ),
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>📊 Status</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'experience',
        caption: 'Experience',
        width: 120,
        filterSelectionOptions: filterSelectionEnabled ? ['Junior', 'Mid', 'Senior', 'Lead'] : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: false,
              filterAdvance: false,
            }
          : undefined,
        renderCell: (item) => <span className='text-blue-600 font-medium'>{item.experience} years</span>,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>⭐ Experience</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'location',
        caption: 'Location',
        width: 100,
        filterSelectionOptions: filterSelectionEnabled ? ['Remote', 'On-site', 'Hybrid'] : undefined,
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: false,
              filterAdvance: false,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>📍 Location</span>
              </div>
            )
          : undefined,
      },
      {
        key: 'salary',
        caption: 'Salary',
        width: 120,
        renderCell: (item) => (
          <span className='font-mono text-green-600'>${item.salary.toLocaleString()}</span>
        ),
        hideFilter: filterVisibilityEnabled
          ? {
              sort: false,
              search: true,
              filterSelection: true,
              filterAdvance: false,
            }
          : undefined,
        renderHeader: customHeaderEnabled
          ? () => (
              <div className='flex items-center justify-center w-full h-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-md mx-1'>
                <span className='text-xs'>💰 Salary</span>
              </div>
            )
          : undefined,
      },
    ],
    [customHeaderEnabled, filterSelectionEnabled, filterVisibilityEnabled, data],
  );

  const codeExample = `import { useState, useMemo } from 'react';
import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';
import clsx from 'clsx';

type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  location: 'Remote' | 'On-site' | 'Hybrid';
};

const HeaderCustomizationExample = () => {
  const [data] = useState(() => generateSampleData());
  const [headerMode, setHeaderMode] = useState<'single' | 'double'>('double');
  const [customHeaderEnabled, setCustomHeaderEnabled] = useState(true);
  const [filterSelectionEnabled, setFilterSelectionEnabled] = useState(true);
  const [filterVisibilityEnabled, setFilterVisibilityEnabled] = useState(true);

  const headers: IHeader<Employee>[] = useMemo(() => [
    {
      key: 'id',
      caption: 'ID',
      width: 80,
      hideFilter: filterVisibilityEnabled ? {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: true,  // Hide filter selection
        filterAdvance: true,    // Hide advanced filter
      } : undefined,
      renderHeader: customHeaderEnabled ? () => (
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md mx-1">
          <span className="text-xs">🔢 ID</span>
        </div>
      ) : undefined,
    },
    {
      key: 'name',
      caption: 'Full Name',
      width: 180,
      filterSelectionOptions: filterSelectionEnabled 
        ? Array.from(new Set(data.map(item => item.name))).slice(0, 10)
        : undefined,
      hideFilter: filterVisibilityEnabled ? {
        sort: false,        // Show sort
        search: false,      // Show search
        filterSelection: true,  // Hide filter selection
        filterAdvance: true,    // Hide advanced filter
      } : undefined,
      renderHeader: customHeaderEnabled ? () => (
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-md mx-1">
          <span className="text-xs">👤 Name</span>
        </div>
      ) : undefined,
    },
    {
      key: 'department',
      caption: 'Department',
      width: 140,
      filterSelectionOptions: filterSelectionEnabled 
        ? ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'] 
        : undefined,
      hideFilter: filterVisibilityEnabled ? {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: false, // Show filter selection
        filterAdvance: true,    // Hide advanced filter
      } : undefined,
      renderHeader: customHeaderEnabled ? () => (
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-md mx-1">
          <span className="text-xs">🏢 Dept</span>
        </div>
      ) : undefined,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      filterSelectionOptions: filterSelectionEnabled 
        ? ['active', 'inactive', 'pending'] 
        : undefined,
      hideFilter: filterVisibilityEnabled ? {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: false, // Show filter selection
        filterAdvance: true,    // Hide advanced filter
      } : undefined,
      renderCell: (item) => (
        <span className={clsx(
          'px-2 py-1 rounded-full text-xs font-medium',
          {
            'bg-green-100 text-green-800': item.status === 'active',
            'bg-red-100 text-red-800': item.status === 'inactive',
            'bg-yellow-100 text-yellow-800': item.status === 'pending',
          }
        )}>
          {item.status}
        </span>
      ),
      renderHeader: customHeaderEnabled ? () => (
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-md mx-1">
          <span className="text-xs">📊 Status</span>
        </div>
      ) : undefined,
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => (
        <span className="font-mono text-green-600">\${item.salary.toLocaleString()}</span>
      ),
      hideFilter: filterVisibilityEnabled ? {
        sort: false,        // Show sort
        search: true,       // Hide search
        filterSelection: true,  // Hide filter selection
        filterAdvance: false,   // Show advanced filter
      } : undefined,
      renderHeader: customHeaderEnabled ? () => (
        <div className="flex items-center justify-center h-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-md mx-1">
          <span className="text-xs">💰 Salary</span>
        </div>
      ) : undefined,
    },
  ], [customHeaderEnabled, filterSelectionEnabled, filterVisibilityEnabled, data]);

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="flex items-center">
            <input
              type="radio"
              name="headerMode"
              value="single"
              checked={headerMode === 'single'}
              onChange={(e) => setHeaderMode(e.target.value as 'single' | 'double')}
              className="mr-2"
            />
            Single Header
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={customHeaderEnabled}
              onChange={(e) => setCustomHeaderEnabled(e.target.checked)}
              className="mr-2"
            />
            Custom Headers
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filterSelectionEnabled}
              onChange={(e) => setFilterSelectionEnabled(e.target.checked)}
              className="mr-2"
            />
            Filter Selection
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filterVisibilityEnabled}
              onChange={(e) => setFilterVisibilityEnabled(e.target.checked)}
              className="mr-2"
            />
            Filter Visibility Control
          </label>
        </div>
      </div>

      {/* Virtual Table */}
      <VirtualTable
        headers={headers}
        data={data}
        rowKey="id"
        headerMode={headerMode}
        headerHeight={40}
        filterHeight={32}
        rowHeight={36}
      />
    </div>
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Header & Filter Customization</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Explore the comprehensive header and filter customization features of the Virtual Table component.
          Customize header modes, render custom header cells, configure filter selection options, and control
          filter visibility per column.
        </p>
      </div>

      {/* Controls Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Customization Controls</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='font-semibold text-gray-900 mb-2'>Header Mode</h3>
            <div className='space-y-2'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='headerMode'
                  value='single'
                  checked={headerMode === 'single'}
                  onChange={(e) => setHeaderMode(e.target.value as 'single' | 'double')}
                  className='mr-2'
                />
                <span className='text-sm'>Single Header</span>
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='headerMode'
                  value='double'
                  checked={headerMode === 'double'}
                  onChange={(e) => setHeaderMode(e.target.value as 'single' | 'double')}
                  className='mr-2'
                />
                <span className='text-sm'>Double Header</span>
              </label>
            </div>
          </div>

          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='font-semibold text-gray-900 mb-2'>Custom Header</h3>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={customHeaderEnabled}
                onChange={(e) => setCustomHeaderEnabled(e.target.checked)}
                className='mr-2'
              />
              <span className='text-sm'>Enable Custom Header Rendering</span>
            </label>
            <p className='text-xs text-gray-500 mt-1'>Shows gradient backgrounds with emojis</p>
          </div>

          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='font-semibold text-gray-900 mb-2'>Filter Selection</h3>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={filterSelectionEnabled}
                onChange={(e) => setFilterSelectionEnabled(e.target.checked)}
                className='mr-2'
              />
              <span className='text-sm'>Enable Filter Selection</span>
            </label>
            <p className='text-xs text-gray-500 mt-1'>Adds dropdown filters to relevant columns</p>
          </div>

          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='font-semibold text-gray-900 mb-2'>Filter Visibility</h3>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={filterVisibilityEnabled}
                onChange={(e) => setFilterVisibilityEnabled(e.target.checked)}
                className='mr-2'
              />
              <span className='text-sm'>Enable Filter Visibility Control</span>
            </label>
            <p className='text-xs text-gray-500 mt-1'>Controls which filters are shown per column</p>
          </div>
        </div>

        {/* Feature Descriptions */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
            <h4 className='font-semibold text-blue-900 mb-2'>📋 Header Mode</h4>
            <p className='text-sm text-blue-700'>
              <strong>Single:</strong> Compact header with filters inline
              <br />
              <strong>Double:</strong> Separate header and filter rows
            </p>
          </div>

          <div className='bg-green-50 p-4 rounded-lg border border-green-200'>
            <h4 className='font-semibold text-green-900 mb-2'>🎨 Custom Header</h4>
            <p className='text-sm text-green-700'>
              Use <code>renderHeader</code> to create custom header cells with gradients, icons, and custom
              styling
            </p>
          </div>

          <div className='bg-purple-50 p-4 rounded-lg border border-purple-200'>
            <h4 className='font-semibold text-purple-900 mb-2'>🔍 Filter Selection</h4>
            <p className='text-sm text-purple-700'>
              Add <code>filterSelectionOptions</code> to enable dropdown filtering with predefined values
            </p>
          </div>

          <div className='bg-orange-50 p-4 rounded-lg border border-orange-200'>
            <h4 className='font-semibold text-orange-900 mb-2'>👁️ Filter Visibility</h4>
            <p className='text-sm text-orange-700'>
              Control individual filter visibility using <code>hideFilter</code> property per column
            </p>
          </div>
        </div>
      </section>

      {/* Filter Types Overview */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Filter Types Overview</h2>
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
      </section>

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

      {/* Main Preview Section */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Interactive Preview</h2>
          <button
            onClick={() => setShowCode(!showCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='h-96 border rounded-lg overflow-hidden'>
          <VirtualTable
            headers={headers}
            data={data}
            rowKey='id'
            headerMode={headerMode}
            headerHeight={40}
            filterHeight={32}
            rowHeight={36}
            useFooter={false}
            classNameOuterTable='border-0'
          />
        </div>
      </section>

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Complete Implementation Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Header & Filter Customization Example</span>
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
            <h3 className='font-semibold mb-2'>✅ Header Customization</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Single and double header modes</li>
              <li>• Custom header cell rendering</li>
              <li>• Gradient backgrounds and icons</li>
              <li>• Interactive header controls</li>
              <li>• Responsive header layout</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🔍 Filter Features</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Filter selection dropdowns</li>
              <li>• Predefined filter options</li>
              <li>• Dynamic filter toggling</li>
              <li>• Search and sort integration</li>
              <li>• Custom filter styling</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>👁️ Filter Visibility Control</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Individual filter type control</li>
              <li>• Search filter visibility</li>
              <li>• Selection filter visibility</li>
              <li>• Advanced filter visibility</li>
              <li>• Sort control visibility</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎛️ Configuration Options</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Per-column filter configuration</li>
              <li>• Dynamic filter option updates</li>
              <li>• Filter state preservation</li>
              <li>• Global filter toggle support</li>
              <li>• Flexible filter combinations</li>
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
              <li>• Use custom headers to improve visual hierarchy</li>
              <li>• Choose appropriate header modes based on your use case</li>
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
              <li>• Custom headers should maintain consistent styling</li>
              <li>• Test filter combinations to ensure good UX</li>
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
              href='/docs/examples/expand-row'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Expand Rows
            </a>
            <a
              href='/docs/examples/server-filter'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Server-side Filtering
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeaderCustomizationPage;
