import { faker } from '@faker-js/faker';
import type { Company, Employee } from './types';

export const generateEmployeeData = (): Employee[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    country: faker.location.country(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      { min: 2, max: 5 },
    ),
    projects: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => ({
      name: faker.company.buzzPhrase(),
      status: faker.helpers.arrayElement(['Active', 'Completed', 'On Hold']) as
        | 'Active'
        | 'Completed'
        | 'On Hold',
      progress: faker.number.int({ min: 0, max: 100 }),
    })),
  }));
};

export const generateCompanyData = (): Company[] => {
  return Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    companyName: faker.company.name(),
    industry: faker.commerce.department(),
    revenue: faker.number.int({ min: 1000000, max: 100000000 }),
    employees: faker.number.int({ min: 10, max: 1000 }),
    founded: faker.date.past({ years: 50 }).getFullYear(),
    ceo: faker.person.fullName(),
    headquarters: faker.location.city(),
    departments: Array.from({ length: faker.number.int({ min: 3, max: 8 }) }, () => ({
      name: faker.commerce.department(),
      manager: faker.person.fullName(),
      employees: faker.number.int({ min: 5, max: 50 }),
      budget: faker.number.int({ min: 100000, max: 5000000 }),
      teams: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => ({
        name: faker.company.buzzPhrase(),
        lead: faker.person.fullName(),
        members: faker.number.int({ min: 3, max: 15 }),
        projects: faker.number.int({ min: 1, max: 8 }),
        status: faker.helpers.arrayElement(['Active', 'Inactive', 'Planning']) as
          | 'Active'
          | 'Inactive'
          | 'Planning',
      })),
    })),
  }));
};

