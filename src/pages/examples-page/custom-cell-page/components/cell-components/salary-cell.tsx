import { memo } from 'react';

type SalaryCellProps = {
  salary: number;
};

export const SalaryCell = memo(({ salary }: SalaryCellProps) => (
  <span className='font-mono text-green-600 dark:text-green-400'>
    ${salary.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
  </span>
));

SalaryCell.displayName = 'SalaryCell';

