import { memo, useMemo } from 'react';
import {
  ControlsSection,
  FeaturesSection,
  FilterCombinationsSection,
  FilterConfigSection,
  FilterTypesSection,
  NextStepsSection,
  PreviewSection,
  UsageTipsSection,
} from './components';
import { useCustomizationControls } from './hooks';
import { generateSampleData } from './utils';

const HeaderCustomizationPage = () => {
  const data = useMemo(() => generateSampleData(), []);
  const {
    headerMode,
    customHeaderEnabled,
    filterSelectionEnabled,
    filterVisibilityEnabled,
    showCode,
    toggleHeaderMode,
    toggleCustomHeader,
    toggleFilterSelection,
    toggleFilterVisibility,
    toggleShowCode,
  } = useCustomizationControls();

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Header & Filter Customization</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Explore the comprehensive header and filter customization features of the Virtual Table
          component. Customize header modes, render custom header cells, configure filter selection
          options, and control filter visibility per column.
        </p>
      </div>

      {/* Controls Section */}
      <ControlsSection
        customHeaderEnabled={customHeaderEnabled}
        filterSelectionEnabled={filterSelectionEnabled}
        filterVisibilityEnabled={filterVisibilityEnabled}
        headerMode={headerMode}
        onHeaderModeChange={toggleHeaderMode}
        onToggleCustomHeader={toggleCustomHeader}
        onToggleFilterSelection={toggleFilterSelection}
        onToggleFilterVisibility={toggleFilterVisibility}
      />

      {/* Filter Types Overview */}
      <FilterTypesSection />

      {/* Filter Configuration Examples */}
      <FilterConfigSection />

      {/* Main Preview Section */}
      <PreviewSection
        customHeaderEnabled={customHeaderEnabled}
        data={data}
        filterSelectionEnabled={filterSelectionEnabled}
        filterVisibilityEnabled={filterVisibilityEnabled}
        headerMode={headerMode}
        onToggleCode={toggleShowCode}
        showCode={showCode}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Usage Tips */}
      <UsageTipsSection />

      {/* Filter Combinations */}
      <FilterCombinationsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(HeaderCustomizationPage);

