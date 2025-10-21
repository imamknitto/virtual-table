import { 
  getRandomElement, 
  getRandomNumber,
  getRandomDate,
  SAMPLE_NAMES,
  SAMPLE_EMAILS,
  SAMPLE_PHONES,
  SAMPLE_ADDRESSES,
  SAMPLE_CITIES,
  SAMPLE_COUNTRIES,
  SAMPLE_COMPANIES,
  SAMPLE_JOB_TITLES,
  SAMPLE_DEPARTMENTS,
  SAMPLE_STATUSES
} from '../../../../lib/constants';
import type { Employee } from './types';

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_NAMES),
    email: getRandomElement(SAMPLE_EMAILS),
    company: getRandomElement(SAMPLE_COMPANIES),
    position: getRandomElement(SAMPLE_JOB_TITLES),
    phone: getRandomElement(SAMPLE_PHONES),
    address: getRandomElement(SAMPLE_ADDRESSES),
    city: getRandomElement(SAMPLE_CITIES),
    country: getRandomElement(SAMPLE_COUNTRIES),
    salary: getRandomNumber(30000, 150000),
    department: getRandomElement(SAMPLE_DEPARTMENTS),
    startDate: getRandomDate(5),
    status: getRandomElement(SAMPLE_STATUSES),
  }));
};

