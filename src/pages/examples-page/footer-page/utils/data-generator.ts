import { generateSampleData as generateSampleDataFromConstants } from '../../../../lib/constants';
import type { SampleData } from './types';

export const generateSampleData = (): SampleData[] => {
  return generateSampleDataFromConstants(50);
};

