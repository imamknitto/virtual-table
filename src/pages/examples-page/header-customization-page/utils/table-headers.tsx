import clsx from 'clsx';
import type { IHeader } from '../../../../components/knitto-table';
import type { Employee } from './types';

type HeaderOptions = {
  data: Employee[];
  customHeaderEnabled: boolean;
  filterSelectionEnabled: boolean;
  filterVisibilityEnabled: boolean;
};

export const getEmployeeHeaders = ({
  data,
  customHeaderEnabled,
  filterSelectionEnabled,
  filterVisibilityEnabled,
}: HeaderOptions): IHeader<Employee>[] => [
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
          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200':
            item.status === 'active',
          'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200': item.status === 'inactive',
          'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200':
            item.status === 'pending',
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
    filterSelectionOptions: filterSelectionEnabled
      ? ['Junior', 'Mid', 'Senior', 'Lead']
      : undefined,
    hideFilter: filterVisibilityEnabled
      ? {
          sort: false,
          search: true,
          filterSelection: false,
          filterAdvance: false,
        }
      : undefined,
    renderCell: (item) => (
      <span className='text-blue-600 dark:text-blue-400 font-medium'>{item.experience} years</span>
    ),
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
      <span className='font-mono text-green-600 dark:text-green-400'>
        ${item.salary.toLocaleString()}
      </span>
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
];

