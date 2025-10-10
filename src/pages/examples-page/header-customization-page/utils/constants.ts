export const CODE_EXAMPLE = `import { useState, useMemo } from 'react';
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
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode={headerMode}
      headerHeight={40}
      filterHeight={32}
      rowHeight={36}
    />
  );
};`;

