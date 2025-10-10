import { faker } from '@faker-js/faker';
import type { Product } from './types';

export const generateSampleData = (): Product[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.number.int({ min: 10, max: 1000 }),
    stock: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'discontinued']) as Product['status'],
    lastUpdated: faker.date.recent().toISOString(),
    description: faker.commerce.productDescription(),
  }));
};

