import type { IHeader } from '../../../../components/knitto-table';
import type { IEmployee, ISalesReport } from './types';

export const getEmployeeHeaders = (): IHeader<IEmployee>[] => [
  { key: 'department', caption: 'Department', width: 150, enableRowSpan: true },
  { key: 'team', caption: 'Team', width: 120, enableRowSpan: true },
  { key: 'name', caption: 'Name', width: 200 },
  { key: 'position', caption: 'Position', width: 180 },
  { key: 'email', caption: 'Email', width: 250 },
  { key: 'salary', caption: 'Salary', width: 120, renderCell: (item) => `$${item.salary.toLocaleString()}` },
];

export const getSalesReportHeaders = (): IHeader<ISalesReport>[] => [
  { key: 'region', caption: 'Region', width: 150, enableRowSpan: true, freeze: 'left' },
  { key: 'country', caption: 'Country', width: 120, enableRowSpan: true },
  { key: 'salesRep', caption: 'Sales Rep', width: 150, enableRowSpan: true },
  { key: 'product', caption: 'Product', width: 120 },
  {
    key: 'group-header-sales',
    caption: 'Quarterly Sales',
    children: [
      { key: 'q1Sales', caption: 'Q1', width: 100, renderCell: (item) => `$${item.q1Sales.toLocaleString()}` },
      { key: 'q2Sales', caption: 'Q2', width: 100, renderCell: (item) => `$${item.q2Sales.toLocaleString()}` },
      { key: 'q3Sales', caption: 'Q3', width: 100, renderCell: (item) => `$${item.q3Sales.toLocaleString()}` },
      { key: 'q4Sales', caption: 'Q4', width: 100, renderCell: (item) => `$${item.q4Sales.toLocaleString()}` },
    ],
  },
  { key: 'totalSales', caption: 'Total Sales', width: 120, freeze: 'right', renderCell: (item) => `$${item.totalSales.toLocaleString()}` },
];
