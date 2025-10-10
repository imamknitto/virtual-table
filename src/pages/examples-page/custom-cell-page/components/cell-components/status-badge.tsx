import clsx from 'clsx';
import { memo } from 'react';
import type { Employee } from '../../utils';

type StatusBadgeProps = {
  status: Employee['status'];
};

const getStatusConfig = (status: Employee['status']) => {
  switch (status) {
    case 'active':
      return {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-800 dark:text-green-200',
        label: 'Active',
      };
    case 'inactive':
      return {
        bg: 'bg-red-100 dark:bg-red-900',
        text: 'text-red-800 dark:text-red-200',
        label: 'Inactive',
      };
    case 'pending':
      return {
        bg: 'bg-yellow-100 dark:bg-yellow-900',
        text: 'text-yellow-800 dark:text-yellow-200',
        label: 'Pending',
      };
    default:
      return {
        bg: 'bg-gray-100 dark:bg-gray-800',
        text: 'text-gray-800 dark:text-gray-200',
        label: 'Unknown',
      };
  }
};

export const StatusBadge = memo(({ status }: StatusBadgeProps) => {
  const config = getStatusConfig(status);

  return (
    <span className={clsx('px-2 py-1 rounded-full text-xs font-medium', config.bg, config.text)}>
      {config.label}
    </span>
  );
});

StatusBadge.displayName = 'StatusBadge';

