import type { IHeader } from '../../../../components/virtual-table';
import type { Employee, SalesData } from './types';

export const getEmployeeHeaders = (): IHeader<Employee>[] => [
  { key: 'name', caption: 'Name', width: 200 },
  { key: 'email', caption: 'Email', width: 250 },
  {
    key: 'group-header-contact',
    caption: 'Contact Information',
    children: [
      { key: 'phone', caption: 'Phone', width: 150 },
      { key: 'location', caption: 'Location', width: 150 },
    ],
  },
  {
    key: 'group-header-work',
    caption: 'Work Details',
    children: [
      { key: 'department', caption: 'Department', width: 150 },
      { key: 'position', caption: 'Position', width: 150 },
      { key: 'manager', caption: 'Manager', width: 100 },
    ],
  },
  {
    key: 'group-header-financial',
    caption: 'Financial',
    children: [
      {
        key: 'salary',
        caption: 'Salary',
        width: 100,
        renderCell: (item) => `$${item.salary.toLocaleString()}`,
      },
      { key: 'performance', caption: 'Rating', width: 100 },
    ],
  },
  { key: 'startDate', caption: 'Start Date', width: 120 },
];

export const getSalesHeaders = (): IHeader<SalesData>[] => [
  { key: 'product', caption: 'Product', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  {
    key: 'group-header-quarterly',
    caption: 'Quarterly Sales',
    children: [
      {
        key: 'q1Sales',
        caption: 'Q1',
        width: 100,
        renderCell: (item) => `$${item.q1Sales.toLocaleString()}`,
      },
      {
        key: 'q2Sales',
        caption: 'Q2',
        width: 100,
        renderCell: (item) => `$${item.q2Sales.toLocaleString()}`,
      },
      {
        key: 'q3Sales',
        caption: 'Q3',
        width: 100,
        renderCell: (item) => `$${item.q3Sales.toLocaleString()}`,
      },
      {
        key: 'q4Sales',
        caption: 'Q4',
        width: 100,
        renderCell: (item) => `$${item.q4Sales.toLocaleString()}`,
      },
    ],
  },
  {
    key: 'group-header-summary',
    caption: 'Summary',
    children: [
      {
        key: 'totalSales',
        caption: 'Total Sales',
        width: 120,
        renderCell: (item) => `$${item.totalSales.toLocaleString()}`,
      },
      {
        key: 'profit',
        caption: 'Profit',
        width: 100,
        renderCell: (item) => `$${item.profit.toLocaleString()}`,
      },
      { key: 'margin', caption: 'Margin %', width: 100, renderCell: (item) => `${item.margin}%` },
    ],
  },
  {
    key: 'group-header-team',
    caption: 'Team',
    children: [
      { key: 'region', caption: 'Region', width: 100 },
      { key: 'salesRep', caption: 'Sales Rep', width: 120 },
    ],
  },
];

export const getComplexHeaders = (): IHeader<Employee>[] => [
  { key: 'name', caption: 'Name', width: 180 },
  { key: 'email', caption: 'Email', width: 220 },
  {
    key: 'group-header-personal',
    caption: 'Personal Information',
    width: 350,
    children: [
      { key: 'phone', caption: 'Phone', width: 120 },
      { key: 'location', caption: 'Location', width: 120 },
      { key: 'startDate', caption: 'Start Date', width: 110 },
    ],
  },
  {
    key: 'group-header-professional',
    caption: 'Professional Details',
    width: 450,
    children: [
      {
        key: 'group-header-role',
        caption: 'Role',
        width: 225,
        children: [
          { key: 'department', caption: 'Department', width: 115 },
          { key: 'position', caption: 'Position', width: 110 },
        ],
      },
      {
        key: 'group-header-performance',
        caption: 'Performance',
        width: 225,
        children: [
          { key: 'manager', caption: 'Manager', width: 115 },
          { key: 'performance', caption: 'Rating', width: 110 },
        ],
      },
    ],
  },
  {
    key: 'salary',
    caption: 'Salary',
    width: 120,
    renderCell: (item) => `$${item.salary.toLocaleString()}`,
  },
];

export const getFreezeGroupHeaders = (): IHeader<Employee>[] => [
  {
    key: 'group-header-basic',
    caption: 'Basic Info',
    freeze: 'left',
    width: 300,
    children: [
      { key: 'name', caption: 'Name', width: 150 },
      { key: 'email', caption: 'Email', width: 150 },
    ],
  },
  {
    key: 'group-header-contact',
    caption: 'Contact Information',
    width: 300,
    children: [
      { key: 'phone', caption: 'Phone', width: 150 },
      { key: 'location', caption: 'Location', width: 150 },
    ],
  },
  {
    key: 'group-header-work',
    caption: 'Work Details',
    width: 400,
    children: [
      { key: 'department', caption: 'Department', width: 150 },
      { key: 'position', caption: 'Position', width: 150 },
      { key: 'manager', caption: 'Manager', width: 100 },
    ],
  },
  {
    key: 'group-header-financial',
    caption: 'Financial',
    width: 200,
    children: [
      {
        key: 'salary',
        caption: 'Salary',
        width: 100,
        renderCell: (item) => `$${item.salary.toLocaleString()}`,
      },
      { key: 'performance', caption: 'Rating', width: 100 },
    ],
  },
  {
    key: 'group-header-actions',
    caption: 'Actions',
    freeze: 'right',
    width: 120,
    children: [{ key: 'startDate', caption: 'Start Date', width: 120 }],
  },
];

