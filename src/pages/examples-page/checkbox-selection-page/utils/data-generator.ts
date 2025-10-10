import { faker } from '@faker-js/faker';
import type { Employee } from './types';

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']) as Employee['status'],
    department: faker.helpers.arrayElement([
      'Engineering',
      'Marketing',
      'Sales',
      'HR',
      'Finance',
    ]) as Employee['department'],
  }));
};

