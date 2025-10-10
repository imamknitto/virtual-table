import type { CombinedData } from './types';

export const renderPostCount = (item: CombinedData) => (
  <span className='font-semibold text-blue-600 dark:text-blue-400'>{item.postCount}</span>
);

