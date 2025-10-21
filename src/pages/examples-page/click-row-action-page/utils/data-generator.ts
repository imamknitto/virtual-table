import { 
  getRandomElement, 
  getRandomNumber,
  getRandomRecentDate,
  SAMPLE_PRODUCTS,
  SAMPLE_CATEGORIES
} from '../../../../lib/constants';
import type { Product } from './types';

const STATUSES = ['active', 'inactive', 'discontinued'];

export const generateSampleData = (): Product[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_PRODUCTS),
    category: getRandomElement(SAMPLE_CATEGORIES),
    price: getRandomNumber(10, 1000),
    stock: getRandomNumber(0, 100),
    status: getRandomElement(STATUSES) as Product['status'],
    lastUpdated: getRandomRecentDate(30),
    description: `High-quality ${getRandomElement(SAMPLE_PRODUCTS).toLowerCase()} with excellent features.`,
  }));
};
