import { faker } from '@faker-js/faker';
import type { Employee } from './types';

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    department: faker.commerce.department(),
    startDate: faker.date.past().toISOString().split('T')[0],
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
  }));
};

