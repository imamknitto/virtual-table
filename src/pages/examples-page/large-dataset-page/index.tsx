import { memo, useMemo } from 'react';
import {
  AdvancedFeaturesSection,
  BestPracticesSection,
  LargeDatasetSection,
  MediumDatasetSection,
  MemoryManagementSection,
  NextStepsSection,
  PerformanceMetricsSection,
  PerformanceOverview,
} from './components';
import { generateDataset } from './utils';

const LargeDatasetPage = () => {
  // Memoized data generation to avoid regenerating on every render
  const mediumData = useMemo(() => generateDataset(10000), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Large Datasets</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to handle massive datasets (1M+ records) with virtual table's advanced
          performance optimizations and memory management techniques.
        </p>
      </div>

      {/* Performance Overview */}
      <PerformanceOverview />

      {/* Medium Dataset Example */}
      <MediumDatasetSection data={mediumData} />

      {/* Large Dataset Example */}
      <LargeDatasetSection />

      {/* Memory Management */}
      <MemoryManagementSection />

      {/* Advanced Features */}
      <AdvancedFeaturesSection />

      {/* Best Practices */}
      <BestPracticesSection />

      {/* Performance Metrics */}
      <PerformanceMetricsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(LargeDatasetPage);

