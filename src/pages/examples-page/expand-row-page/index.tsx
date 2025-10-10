import { memo, useMemo } from 'react';
import {
  ApiReferenceSection,
  BasicExpandSection,
  CustomToggleSection,
  FeaturesSection,
  NestedTableSection,
  NextStepsSection,
} from './components';
import { generateCompanyData, generateEmployeeData } from './utils';

const ExpandRowPage = () => {
  // Memoized data generation to avoid regenerating on every render
  const employeeData = useMemo(() => generateEmployeeData(), []);
  const companyData = useMemo(() => generateCompanyData(), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Expand Row</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement expandable rows in your virtual table with detailed content,
          nested tables, and custom expand toggles.
        </p>
      </div>

      {/* Basic Expand Row Example */}
      <BasicExpandSection data={employeeData} />

      {/* Nested Table Example */}
      <NestedTableSection data={companyData} />

      {/* Custom Toggle Example */}
      <CustomToggleSection data={employeeData} />

      {/* Features Section */}
      <FeaturesSection />

      {/* API Reference */}
      <ApiReferenceSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(ExpandRowPage);

