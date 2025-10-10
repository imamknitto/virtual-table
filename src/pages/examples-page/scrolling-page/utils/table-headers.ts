import type { IHeader } from '../../../../components/virtual-table';
import type { Employee } from './types';

export const getEmployeeHeaders = (): IHeader<Employee>[] => [
  { key: 'id', caption: 'ID', width: 80 },
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
  { key: 'location', caption: 'Location', width: 150 },
  { key: 'manager', caption: 'Manager', width: 180 },
  { key: 'performance', caption: 'Rating', width: 100 },
  { key: 'status', caption: 'Status', width: 100 },
];

