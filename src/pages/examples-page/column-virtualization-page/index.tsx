import { memo, useMemo } from 'react';
import { ComparisonSection, NextStepsSection, PreviewSection } from './components';
import { generateSampleData } from './utils';

const ColumnVirtualizationPage = () => {
  const data = useMemo(() => generateSampleData(1000), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Column Virtualization</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to enable or disable column virtualization to optimize performance and enable advanced
          features. Column virtualization is enabled by default for optimal performance.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection data={data} />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(ColumnVirtualizationPage);
