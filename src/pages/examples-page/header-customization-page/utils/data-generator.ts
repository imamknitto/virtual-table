import { faker } from '@faker-js/faker';
import type { Employee } from './types';

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']) as Employee['status'],
    joinDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    experience: faker.number.int({ min: 1, max: 15 }),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    location: faker.helpers.arrayElement(['Remote', 'On-site', 'Hybrid']) as Employee['location'],
  }));
};

