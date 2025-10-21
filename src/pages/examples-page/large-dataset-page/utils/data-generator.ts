import { generateLargeEmployeeData, generateDatasetAsync as generateDatasetAsyncFromConstants, type EmployeeData } from '../../../../lib/constants';

export { type EmployeeData };

export const generateDataset = (count: number): EmployeeData[] => {
  return generateLargeEmployeeData(count);
};

export const generateDatasetAsync = async (count: number): Promise<EmployeeData[]> => {
  return generateDatasetAsyncFromConstants(count);
};
