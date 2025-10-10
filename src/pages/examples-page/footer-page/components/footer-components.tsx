import { memo } from 'react';
import type { SampleData } from '../utils';

type CalculationFooterProps = {
  columnKey: string;
  data: SampleData[];
};

export const CalculationFooter = memo(({ columnKey, data }: CalculationFooterProps) => {
  const getCalculation = (): string => {
    switch (columnKey) {
      case 'quantity': {
        return data
          .reduce((sum: number, item: SampleData) => sum + item.quantity, 0)
          .toLocaleString();
      }
      case 'total': {
        return `$${data
          .reduce((sum: number, item: SampleData) => sum + item.total, 0)
          .toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
      }
      case 'finalAmount': {
        return `$${data
          .reduce((sum: number, item: SampleData) => sum + item.finalAmount, 0)
          .toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
      }
      case 'discount': {
        const avgDiscount =
          data.reduce((sum: number, item: SampleData) => sum + item.discount, 0) / data.length;
        return `${avgDiscount.toFixed(1)}%`;
      }
      case 'status': {
        const activeCount = data.filter((item: SampleData) => item.status === 'Active').length;
        return `${activeCount}/${data.length} Active`;
      }
      default:
        return '';
    }
  };

  return (
    <div className='flex items-center justify-center h-full bg-gray-50 dark:bg-gray-800 font-semibold text-gray-800 dark:text-gray-200'>
      {getCalculation()}
    </div>
  );
});

CalculationFooter.displayName = 'CalculationFooter';

export const TotalsFooter = memo(() => {
  return (
    <div className='flex items-center justify-center h-full bg-blue-50 dark:bg-blue-950'>
      <span className='font-semibold text-blue-800 dark:text-blue-300'>TOTALS</span>
    </div>
  );
});

TotalsFooter.displayName = 'TotalsFooter';

export const SummaryFooter = memo(() => {
  return (
    <div className='flex items-center justify-center h-full bg-green-50 dark:bg-green-950'>
      <span className='font-medium text-green-700 dark:text-green-300'>SUMMARY</span>
    </div>
  );
});

SummaryFooter.displayName = 'SummaryFooter';

export const ActionsFooter = memo(() => {
  return (
    <div className='flex items-center justify-center h-full bg-orange-50 dark:bg-orange-950'>
      <span className='font-medium text-orange-700 dark:text-orange-300'>ACTIONS</span>
    </div>
  );
});

ActionsFooter.displayName = 'ActionsFooter';

