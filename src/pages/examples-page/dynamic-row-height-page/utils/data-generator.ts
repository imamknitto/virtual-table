import { generateProductData } from '../../../../lib/constants';
import type { Product } from './types';

export const generateSampleData = (count: number = 100): Product[] => {
  return generateProductData(count);
};
