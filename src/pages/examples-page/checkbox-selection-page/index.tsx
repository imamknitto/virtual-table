import { memo, useMemo } from 'react';
import {
  FeaturesSection,
  NextStepsSection,
  PreviewSection,
  SelectionStatusSection,
  UsageTipsSection,
} from './components';
import { useCheckboxSelection } from './hooks';
import { generateSampleData } from './utils';

const CheckboxSelectionPage = () => {
  const data = useMemo(() => generateSampleData(), []);
  const { selectedRows, deselectedRows, isSelectAll, handleCheckboxSelection } =
    useCheckboxSelection();

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Checkbox Selection</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to implement checkbox selection in your virtual table with individual row
          selection and select all functionality.
        </p>
      </div>

      {/* Selection Status */}
      <SelectionStatusSection
        deselectedRows={deselectedRows}
        isSelectAll={isSelectAll}
        selectedRows={selectedRows}
      />

      {/* Preview Section */}
      <PreviewSection data={data} onCheckboxSelection={handleCheckboxSelection} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Usage Tips */}
      <UsageTipsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(CheckboxSelectionPage);

