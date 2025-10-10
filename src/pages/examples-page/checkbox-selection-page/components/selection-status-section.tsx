import { memo } from 'react';

type SelectionStatusSectionProps = {
  selectedRows: (string | number)[];
  deselectedRows: (string | number)[];
  isSelectAll: boolean;
};

const SelectionStatusSection = ({
  selectedRows,
  deselectedRows,
  isSelectAll,
}: SelectionStatusSectionProps) => {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      <div className='border rounded-lg p-4 bg-blue-50 dark:bg-blue-950'>
        <h3 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>Selected Rows</h3>
        <p className='text-2xl font-bold text-blue-700 dark:text-blue-300'>{selectedRows.length}</p>
        <p className='text-sm text-blue-600 dark:text-blue-400 mt-1'>
          {selectedRows.length > 0
            ? `IDs: ${selectedRows.slice(0, 5).join(', ')}${selectedRows.length > 5 ? '...' : ''}`
            : 'No rows selected'}
        </p>
      </div>
      <div className='border rounded-lg p-4 bg-orange-50 dark:bg-orange-950'>
        <h3 className='font-semibold text-orange-900 dark:text-orange-200 mb-2'>Deselected Rows</h3>
        <p className='text-2xl font-bold text-orange-700 dark:text-orange-300'>
          {deselectedRows.length}
        </p>
        <p className='text-sm text-orange-600 dark:text-orange-400 mt-1'>
          {deselectedRows.length > 0
            ? `IDs: ${deselectedRows.slice(0, 5).join(', ')}${deselectedRows.length > 5 ? '...' : ''}`
            : 'No rows deselected'}
        </p>
      </div>
      <div className='border rounded-lg p-4 bg-green-50 dark:bg-green-950'>
        <h3 className='font-semibold text-green-900 dark:text-green-200 mb-2'>Select All Status</h3>
        <p className='text-2xl font-bold text-green-700 dark:text-green-300'>
          {isSelectAll ? 'Active' : 'Inactive'}
        </p>
        <p className='text-sm text-green-600 dark:text-green-400 mt-1'>
          {isSelectAll ? 'All rows are selected' : 'Individual selection mode'}
        </p>
      </div>
    </div>
  );
};

export default memo(SelectionStatusSection);

