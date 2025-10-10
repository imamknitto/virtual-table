import { memo, useMemo } from 'react';
import {
  FeaturesOverviewSection,
  InfiniteScrollSection,
  NextStepsSection,
  PerformanceTipsSection,
  ProgrammaticScrollingSection,
  ScrollTrackingSection,
} from './components';
import { generateEmployeeData } from './utils';

const ScrollingPage = () => {
  // Memoized data generation to avoid regenerating on every render
  const employeeData = useMemo(() => generateEmployeeData(50), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Scrolling Features</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement advanced scrolling features with the Virtual Table, including
          scroll tracking, programmatic scrolling, and infinite scroll functionality.
        </p>
      </div>

      {/* Scroll Tracking Section */}
      <ScrollTrackingSection data={employeeData} />

      {/* Programmatic Scrolling Section */}
      <ProgrammaticScrollingSection data={employeeData} />

      {/* Infinite Scroll Section */}
      <InfiniteScrollSection initialData={employeeData} />

      {/* Features Overview */}
      <FeaturesOverviewSection />

      {/* Performance Tips */}
      <PerformanceTipsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(ScrollingPage);

