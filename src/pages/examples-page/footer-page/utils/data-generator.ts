import { faker } from '@faker-js/faker';
import type { SampleData } from './types';

export const generateSampleData = (): SampleData[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    product: faker.commerce.productName(),
    category: faker.commerce.department(),
    quantity: faker.number.int({ min: 1, max: 100 }),
    unitPrice: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
    total: 0,
    discount: faker.number.float({ min: 0, max: 20, fractionDigits: 1 }),
    finalAmount: 0,
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    region: faker.location.country(),
    salesRep: faker.person.fullName(),
  })).map((item) => ({
    ...item,
    total: item.quantity * item.unitPrice,
    finalAmount: item.quantity * item.unitPrice * (1 - item.discount / 100),
  }));
};

