import { 
  getRandomElement, 
  getRandomNumber,
  SAMPLE_NAMES,
  SAMPLE_EMAILS,
  SAMPLE_PHONES,
  SAMPLE_CITIES,
  SAMPLE_COUNTRIES,
  SAMPLE_COMPANIES,
  SAMPLE_JOB_TITLES
} from '../../../../lib/constants';
import type { Employee } from './types';

const STATUSES = ['Active', 'Inactive', 'Pending'];
const DEPARTMENTS = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_NAMES),
    email: getRandomElement(SAMPLE_EMAILS),
    company: getRandomElement(SAMPLE_COMPANIES),
    position: getRandomElement(SAMPLE_JOB_TITLES),
    phone: getRandomElement(SAMPLE_PHONES),
    city: getRandomElement(SAMPLE_CITIES),
    country: getRandomElement(SAMPLE_COUNTRIES),
    salary: getRandomNumber(30000, 150000),
    status: getRandomElement(STATUSES) as Employee['status'],
    department: getRandomElement(DEPARTMENTS) as Employee['department'],
  }));
};

