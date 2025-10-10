import { memo } from 'react';
import {
  FeaturesSection,
  ImplementationTipsSection,
  NextStepsSection,
  PreviewSection,
} from './components';
import { sampleData } from './utils';

const CustomCellPage = () => {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Custom Cell Rendering</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to create custom cell components for the Virtual Table. Custom cell rendering
          allows you to display rich content like badges, progress bars, buttons, and more.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection data={sampleData} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Implementation Tips */}
      <ImplementationTipsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(CustomCellPage);

