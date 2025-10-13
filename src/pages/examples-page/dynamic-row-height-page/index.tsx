import { memo, useMemo } from 'react';
import {
  ConfigurationSection,
  FeaturesSection,
  NextStepsSection,
  PreviewSection,
} from './components';
import { generateSampleData } from './utils';

const DynamicRowHeightPage = () => {
  const data = useMemo(() => generateSampleData(100), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Dynamic Row Height</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to enable dynamic row heights for flexible content display. Dynamic row height requires
          column virtualization to be disabled.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection data={data} />

      {/* Configuration Section */}
      <ConfigurationSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(DynamicRowHeightPage);
