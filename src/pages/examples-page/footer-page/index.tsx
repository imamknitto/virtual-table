import { memo, useMemo } from 'react';
import {
  AdvancedFooterSection,
  BasicFooterSection,
  FeaturesSection,
  NextStepsSection,
  SummaryFooterSection,
  UsageTipsSection,
} from './components';
import { generateSampleData } from './utils';

const FooterPage = () => {
  const data = useMemo(() => generateSampleData(), []);

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Table Footer</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to add footers to your virtual table for displaying totals, summaries, and
          calculations. Footers are perfect for showing aggregated data and additional actions.
        </p>
      </div>

      {/* Basic Footer Example */}
      <BasicFooterSection data={data} />

      {/* Advanced Footer with Freeze Columns */}
      <AdvancedFooterSection data={data} />

      {/* Summary Footer Example */}
      <SummaryFooterSection data={data} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Next Steps */}
      <NextStepsSection />

      {/* Usage Tips */}
      <UsageTipsSection />
    </div>
  );
};

export default memo(FooterPage);

