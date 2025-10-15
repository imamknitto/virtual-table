import type { IHeader } from '../../../../components/knitto-table';
import type { Employee } from './types';

export const getEmployeeHeaders = (): IHeader<Employee>[] => [
  { key: 'name', caption: 'Name', width: 200 },
  { key: 'email', caption: 'Email', width: 250 },
  { key: 'company', caption: 'Company', width: 200 },
  { key: 'position', caption: 'Position', width: 180 },
  { key: 'phone', caption: 'Phone', width: 150 },
  { key: 'city', caption: 'City', width: 150 },
  { key: 'country', caption: 'Country', width: 120 },
  {
    key: 'salary',
    caption: 'Salary',
    width: 120,
    renderCell: (item) => `$${item.salary.toLocaleString()}`,
  },
];

