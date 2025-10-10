import { memo } from 'react';
import {
  ApiIntegrationSection,
  FeaturesSection,
  ImplementationGuideSection,
  NextStepsSection,
  PreviewSection,
} from './components';

const ServerFilterPage = () => {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Server Filter</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement server-side filtering with Knitto Table using real API data. All
          filtering, sorting, and searching is handled on the server for optimal performance.
        </p>
      </div>

      {/* Preview Section with Live Demo */}
      <PreviewSection />

      {/* Features Overview */}
      <FeaturesSection />

      {/* API Integration Details */}
      <ApiIntegrationSection />

      {/* Implementation Guide */}
      <ImplementationGuideSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(ServerFilterPage);

