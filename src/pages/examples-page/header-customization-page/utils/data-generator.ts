import { 
  getRandomElement, 
  getRandomNumber,
  getRandomDate,
  SAMPLE_NAMES,
  SAMPLE_EMAILS,
  SAMPLE_PHONES,
  SAMPLE_CITIES,
  SAMPLE_COUNTRIES,
  SAMPLE_COMPANIES,
  SAMPLE_JOB_TITLES,
  SAMPLE_DEPARTMENTS
} from '../../../../lib/constants';
import type { Employee } from './types';

const STATUSES = ['active', 'inactive', 'pending'];
const LOCATIONS = ['Remote', 'On-site', 'Hybrid'];

export const generateSampleData = (): Employee[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_NAMES),
    email: getRandomElement(SAMPLE_EMAILS),
    company: getRandomElement(SAMPLE_COMPANIES),
    department: getRandomElement(SAMPLE_DEPARTMENTS),
    position: getRandomElement(SAMPLE_JOB_TITLES),
    salary: getRandomNumber(30000, 150000),
    status: getRandomElement(STATUSES) as Employee['status'],
    joinDate: getRandomDate(5),
    experience: getRandomNumber(1, 15),
    phone: getRandomElement(SAMPLE_PHONES),
    city: getRandomElement(SAMPLE_CITIES),
    country: getRandomElement(SAMPLE_COUNTRIES),
    location: getRandomElement(LOCATIONS) as Employee['location'],
  }));
};

