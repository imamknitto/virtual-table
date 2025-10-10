import { memo, useMemo } from 'react';
import {
  FeaturesSection,
  NextStepsSection,
  PreviewSection,
  UsageGuidelinesSection,
} from './components';
import { generateSampleData } from './utils';

const FreezeColumnPage = () => {
  const data = useMemo(() => generateSampleData(), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Freeze Columns</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to freeze columns on the left or right side of your table for better data
          navigation.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection data={data} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Usage Guidelines */}
      <UsageGuidelinesSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(FreezeColumnPage);

