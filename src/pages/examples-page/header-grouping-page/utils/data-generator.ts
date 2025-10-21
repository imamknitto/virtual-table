import { generateEmployeeWithDetailsData, generateSalesData as generateSalesDataFromConstants } from '../../../../lib/constants';
import type { Employee, SalesData } from './types';

export const generateEmployeeData = (): Employee[] => {
  return generateEmployeeWithDetailsData(30);
};

export const generateSalesData = (): SalesData[] => {
  return generateSalesDataFromConstants(25);
};

