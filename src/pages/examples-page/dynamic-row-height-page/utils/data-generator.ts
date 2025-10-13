import { faker } from '@faker-js/faker';
import type { Product } from './types';

export const generateSampleData = (count: number = 100): Product[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.commerce.price({ min: 10, max: 1000, dec: 2 }),
    description: faker.commerce.productDescription(),
    features: faker.helpers.arrayElements(
      [
        'High Quality Materials',
        'Eco-Friendly',
        'Long-lasting Durability',
        'Easy to Use',
        'Modern Design',
        'Energy Efficient',
        'Lightweight',
        'Waterproof',
        'Warranty Included',
        'Fast Shipping',
      ],
      { min: 2, max: 5 }
    ),
    status: faker.helpers.arrayElement(['In Stock', 'Out of Stock', 'Pre-order', 'Limited']),
    stock: faker.number.int({ min: 0, max: 500 }),
    sku: faker.string.alphanumeric({ length: 8, casing: 'upper' }),
    manufacturer: faker.company.name(),
  }));
};
