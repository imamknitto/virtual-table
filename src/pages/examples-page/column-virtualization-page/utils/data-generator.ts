import { faker } from '@faker-js/faker';
import type { User } from './types';

export const generateSampleData = (count: number = 1000): User[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    username: faker.internet.username(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    city: faker.location.city(),
    country: faker.location.country(),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending', 'On Leave']),
    salary: faker.finance.amount({ min: 30000, max: 150000, dec: 0 }),
    department: faker.commerce.department(),
    joinDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    experience: faker.number.int({ min: 0, max: 15 }),
    skills: faker.helpers.arrayElements([
      'React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++', 'JavaScript',
      'Vue.js', 'Angular', 'SQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
    ], { min: 2, max: 5 }),
  }));
};
