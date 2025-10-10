import clsx from 'clsx';
import { memo } from 'react';

type ProgressBarProps = {
  value: number;
};

export const ProgressBar = memo(({ value }: ProgressBarProps) => (
  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
    <div
      className={clsx('h-2 rounded-full transition-all duration-300', {
        'bg-red-500': value < 70,
        'bg-yellow-500': value >= 70 && value < 85,
        'bg-green-500': value >= 85,
      })}
      style={{ width: `${value}%` }}
    />
    <span className='text-xs text-gray-600 dark:text-gray-400 mt-1 block'>{value}%</span>
  </div>
));

ProgressBar.displayName = 'ProgressBar';

