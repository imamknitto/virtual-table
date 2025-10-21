import { generateEmployeeData as generateEmployeeDataFromConstants } from '../../../../lib/constants';
import type { IEmployee } from './types';

export const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeDataFromConstants(25);
};
