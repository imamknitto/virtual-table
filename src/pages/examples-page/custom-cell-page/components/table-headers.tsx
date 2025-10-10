import type { IHeader } from '../../../../components/virtual-table';
import type { Employee } from '../utils';
import { ActionButtons, AvatarCell, ProgressBar, SalaryCell, SkillsTags, StatusBadge } from './cell-components';

export const getEmployeeHeaders = (): IHeader<Employee>[] => [
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
    renderCell: (employee) => (
      <span className='font-medium text-blue-600 dark:text-blue-400'>{employee.department}</span>
    ),
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
      <span className='text-sm text-gray-600 dark:text-gray-400'>
        {new Date(employee.joinDate).toLocaleDateString()}
      </span>
    ),
  },
  {
    key: 'action',
    caption: 'Actions',
    width: 150,
    renderCell: (employee) => <ActionButtons employee={employee} />,
  },
];

