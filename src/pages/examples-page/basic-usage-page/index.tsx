import { memo, useMemo } from 'react';
import { FeaturesSection, NextStepsSection, PreviewSection } from './components';
import { generateSampleData } from './utils';

const BasicUsagePage = () => {
  const data = useMemo(() => generateSampleData(), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Basic Usage</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Here's a simple example of how to use Knitto Table with sample data.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection data={data} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(BasicUsagePage);

