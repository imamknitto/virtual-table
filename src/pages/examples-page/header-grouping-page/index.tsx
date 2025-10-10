import { memo, useMemo } from 'react';
import {
  ApiReferenceSection,
  BasicGroupingSection,
  BestPracticesSection,
  ComplexGroupingSection,
  FeaturesSection,
  FreezeGroupingSection,
  KeyNamingSection,
  NestedGroupingSection,
  NextStepsSection,
} from './components';
import { generateEmployeeData, generateSalesData } from './utils';

const HeaderGroupingPage = () => {
  // Memoized data generation to avoid regenerating on every render
  const employeeData = useMemo(() => generateEmployeeData(), []);
  const salesData = useMemo(() => generateSalesData(), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Header Grouping</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to create grouped headers in your virtual table to organize related columns and
          improve data presentation with hierarchical header structures.
        </p>
      </div>

      {/* Basic Header Grouping */}
      <BasicGroupingSection data={employeeData} />

      {/* Complex Header Grouping */}
      <ComplexGroupingSection data={salesData} />

      {/* Nested Header Grouping */}
      <NestedGroupingSection data={employeeData} />

      {/* Header Grouping with Freeze Columns */}
      <FreezeGroupingSection data={employeeData} />

      {/* Key Naming Convention */}
      <KeyNamingSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Best Practices */}
      <BestPracticesSection />

      {/* API Reference */}
      <ApiReferenceSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(HeaderGroupingPage);

