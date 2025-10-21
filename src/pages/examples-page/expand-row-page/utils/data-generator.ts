import { 
  getRandomElement, 
  getRandomElements, 
  getRandomNumber, 
  getRandomDate,
  SAMPLE_NAMES,
  SAMPLE_EMAILS,
  SAMPLE_PHONES,
  SAMPLE_ADDRESSES,
  SAMPLE_CITIES,
  SAMPLE_COUNTRIES,
  SAMPLE_DEPARTMENTS,
  SAMPLE_JOB_TITLES,
  SAMPLE_SKILLS,
  SAMPLE_COMPANIES,
  SAMPLE_CATEGORIES
} from '../../../../lib/constants';
import type { Company, Employee } from './types';

const PROJECT_NAMES = [
  'E-commerce Platform', 'Mobile App Development', 'Data Analytics Dashboard',
  'Cloud Migration', 'API Integration', 'UI/UX Redesign', 'Security Audit',
  'Performance Optimization', 'Feature Enhancement', 'Bug Fix Sprint'
];

const PROJECT_STATUSES = ['Active', 'Completed', 'On Hold'];
const TEAM_STATUSES = ['Active', 'Inactive', 'Planning'];

export const generateEmployeeData = (): Employee[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(SAMPLE_NAMES),
    email: getRandomElement(SAMPLE_EMAILS),
    department: getRandomElement(SAMPLE_DEPARTMENTS),
    position: getRandomElement(SAMPLE_JOB_TITLES),
    salary: getRandomNumber(30000, 150000),
    startDate: getRandomDate(5),
    phone: getRandomElement(SAMPLE_PHONES),
    address: getRandomElement(SAMPLE_ADDRESSES),
    city: getRandomElement(SAMPLE_CITIES),
    country: getRandomElement(SAMPLE_COUNTRIES),
    skills: getRandomElements(SAMPLE_SKILLS, 2, 5),
    projects: Array.from({ length: getRandomNumber(1, 4) }, () => ({
      name: getRandomElement(PROJECT_NAMES),
      status: getRandomElement(PROJECT_STATUSES) as 'Active' | 'Completed' | 'On Hold',
      progress: getRandomNumber(0, 100),
    })),
  }));
};

export const generateCompanyData = (): Company[] => {
  return Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    companyName: getRandomElement(SAMPLE_COMPANIES),
    industry: getRandomElement(SAMPLE_CATEGORIES),
    revenue: getRandomNumber(1000000, 100000000),
    employees: getRandomNumber(10, 1000),
    founded: getRandomNumber(1970, 2020),
    ceo: getRandomElement(SAMPLE_NAMES),
    headquarters: getRandomElement(SAMPLE_CITIES),
    departments: Array.from({ length: getRandomNumber(3, 8) }, () => ({
      name: getRandomElement(SAMPLE_DEPARTMENTS),
      manager: getRandomElement(SAMPLE_NAMES),
      employees: getRandomNumber(5, 50),
      budget: getRandomNumber(100000, 5000000),
      teams: Array.from({ length: getRandomNumber(2, 5) }, () => ({
        name: getRandomElement(PROJECT_NAMES),
        lead: getRandomElement(SAMPLE_NAMES),
        members: getRandomNumber(3, 15),
        projects: getRandomNumber(1, 8),
        status: getRandomElement(TEAM_STATUSES) as 'Active' | 'Inactive' | 'Planning',
      })),
    })),
  }));
};

