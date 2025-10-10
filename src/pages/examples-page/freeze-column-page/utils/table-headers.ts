import type { IHeader } from '../../../../components/virtual-table';
import type { Employee } from './types';

export const getEmployeeHeaders = (): IHeader<Employee>[] => [
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

