import { faker } from '@faker-js/faker';
import type { IEmployee } from './types';

export const generateEmployeeData = (): IEmployee[] => {
  return Array.from({ length: 25 }, (_, index) => ({
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
  }));
};
