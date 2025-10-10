import { faker } from '@faker-js/faker';
import type { Employee, SalesData } from './types';

export const generateEmployeeData = (): Employee[] => {
  return Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    startDate: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    performance: faker.number.int({ min: 1, max: 5 }),
    manager: faker.person.fullName(),
    location: faker.location.city(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust'],
      { min: 2, max: 5 },
    ),
  }));
};

export const generateSalesData = (): SalesData[] => {
  return Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    product: faker.commerce.productName(),
    category: faker.commerce.department(),
    q1Sales: faker.number.int({ min: 10000, max: 100000 }),
    q2Sales: faker.number.int({ min: 10000, max: 100000 }),
    q3Sales: faker.number.int({ min: 10000, max: 100000 }),
    q4Sales: faker.number.int({ min: 10000, max: 100000 }),
    totalSales: 0,
    profit: faker.number.int({ min: 5000, max: 50000 }),
    margin: 0,
    region: faker.location.state(),
    salesRep: faker.person.fullName(),
  })).map((item) => ({
    ...item,
    totalSales: item.q1Sales + item.q2Sales + item.q3Sales + item.q4Sales,
    margin: Math.round((item.profit / (item.q1Sales + item.q2Sales + item.q3Sales + item.q4Sales)) * 100),
  }));
};

