import { faker } from '@faker-js/faker';
import type { Employee } from './types';

export const generateEmployeeData = (count: number = 100): Employee[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    status: faker.helpers.arrayElement(['active', 'inactive']) as Employee['status'],
    location: faker.location.city(),
    manager: faker.person.fullName(),
    performance: faker.number.int({ min: 1, max: 5 }),
  }));
};

