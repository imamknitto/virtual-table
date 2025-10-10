import { memo, useState } from 'react';
import type { Employee } from '../../utils';

type ActionButtonsProps = {
  employee: Employee;
};

export const ActionButtons = memo(({ employee }: ActionButtonsProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (): void => {
    setIsEditing(!isEditing);
    console.log(isEditing ? 'Saving employee:' : 'Editing employee:', employee);
  };

  const handleDelete = (): void => {
    console.log('Deleting employee:', employee);
    // Handle delete action here
  };

  return (
    <div className='flex gap-2'>
      <button
        className='px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-xs rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors'
        onClick={handleEdit}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button
        className='px-3 py-1 bg-red-500 dark:bg-red-600 text-white text-xs rounded hover:bg-red-600 dark:hover:bg-red-700 transition-colors'
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
});

ActionButtons.displayName = 'ActionButtons';
