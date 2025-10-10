import { faker } from '@faker-js/faker';

export type EmployeeData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  performance: number;
  manager: string;
  location: string;
  country: string;
  skills: string[];
  projects: number;
  experience: number;
  status: string;
  lastLogin: string;
};

export const generateDataset = (count: number): EmployeeData[] => {
  const data = Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    department: faker.commerce.department(),
    position: faker.person.jobTitle(),
    salary: faker.number.int({ min: 30000, max: 200000 }),
    startDate: faker.date.past({ years: 10 }).toISOString().split('T')[0],
    performance: faker.number.int({ min: 1, max: 5 }),
    manager: faker.person.fullName(),
    location: faker.location.city(),
    country: faker.location.country(),
    skills: faker.helpers.arrayElements(
      ['React', 'TypeScript', 'Node.js', 'Python', 'Java', 'C#', 'Go', 'Rust', 'Vue', 'Angular'],
      { min: 2, max: 6 },
    ),
    projects: faker.number.int({ min: 1, max: 20 }),
    experience: faker.number.int({ min: 0, max: 15 }),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'On Leave', 'Terminated']),
    lastLogin: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return data;
};

export const generateDatasetAsync = async (count: number): Promise<EmployeeData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = generateDataset(count);
      resolve(data);
    }, 100);
  });
};
