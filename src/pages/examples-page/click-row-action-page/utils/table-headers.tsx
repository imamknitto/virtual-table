import type { IHeader } from '../../../../components/knitto-table';
import type { Product } from './types';

export const getProductHeaders = (): IHeader<Product>[] => [
  { key: 'name', caption: 'Product Name', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  { key: 'price', caption: 'Price', width: 100 },
  { key: 'stock', caption: 'Stock', width: 80 },
  {
    key: 'status',
    caption: 'Status',
    width: 170,
    renderCell: (item) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          item.status === 'active'
            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            : item.status === 'inactive'
              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
        }`}
      >
        {item.status}
      </span>
    ),
  },
  { key: 'lastUpdated', caption: 'Last Updated', width: 120 },
];

