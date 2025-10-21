import { 
  getRandomElement, 
  getRandomNumber,
  getRandomDate,
  SAMPLE_NAMES,
  SAMPLE_EMAILS,
  SAMPLE_DEPARTMENTS,
  SAMPLE_JOB_TITLES,
  SAMPLE_CITIES
} from '../../../../lib/constants';
import type { Employee } from './types';

const STATUSES = ['active', 'inactive'];

export const generateEmployeeData = (count: number = 100): Employee[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_NAMES),
    email: getRandomElement(SAMPLE_EMAILS),
    department: getRandomElement(SAMPLE_DEPARTMENTS),
    position: getRandomElement(SAMPLE_JOB_TITLES),
    salary: getRandomNumber(30000, 150000),
    startDate: getRandomDate(5),
    status: getRandomElement(STATUSES) as Employee['status'],
    location: getRandomElement(SAMPLE_CITIES),
    manager: getRandomElement(SAMPLE_NAMES),
    performance: getRandomNumber(1, 5),
  }));
};

