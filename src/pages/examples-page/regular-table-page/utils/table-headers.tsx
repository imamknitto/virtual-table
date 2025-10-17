import type { IHeader } from '../../../../components/knitto-table';
import type { IEmployee } from './types';

export const getEmployeeHeaders = (): IHeader<IEmployee>[] => {
  return [
    { key: 'id', caption: 'ID', width: 100, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    { key: 'phone', caption: 'Phone', width: 200 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 200 },
    { key: 'country', caption: 'Country', width: 200, freeze: 'right' },
    { key: 'salary', caption: 'Salary', width: 200, freeze: 'right' },
  ];
};
