import { generateUserData } from '../../../../lib/constants';
import type { User } from './types';

export const generateSampleData = (count: number = 1000): User[] => {
  return generateUserData(count);
};
