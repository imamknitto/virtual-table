import { memo } from 'react';

type ControlsSectionProps = {
  headerMode: 'single' | 'double';
  customHeaderEnabled: boolean;
  filterSelectionEnabled: boolean;
  filterVisibilityEnabled: boolean;
  onHeaderModeChange: (mode: 'single' | 'double') => void;
  onToggleCustomHeader: () => void;
  onToggleFilterSelection: () => void;
  onToggleFilterVisibility: () => void;
};

const ControlsSection = ({
  headerMode,
  customHeaderEnabled,
  filterSelectionEnabled,
  filterVisibilityEnabled,
  onHeaderModeChange,
  onToggleCustomHeader,
  onToggleFilterSelection,
  onToggleFilterVisibility,
}: ControlsSectionProps) => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Customization Controls</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Header Mode</h3>
          <div className='space-y-2'>
            <label className='flex items-center'>
              <input
                checked={headerMode === 'single'}
                className='mr-2'
                name='headerMode'
                onChange={(e) => onHeaderModeChange(e.target.value as 'single' | 'double')}
                type='radio'
                value='single'
              />
              <span className='text-sm'>Single Header</span>
            </label>
            <label className='flex items-center'>
              <input
                checked={headerMode === 'double'}
                className='mr-2'
                name='headerMode'
                onChange={(e) => onHeaderModeChange(e.target.value as 'single' | 'double')}
                type='radio'
                value='double'
              />
              <span className='text-sm'>Double Header</span>
            </label>
          </div>
        </div>

        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Custom Header</h3>
          <label className='flex items-center'>
            <input
              checked={customHeaderEnabled}
              className='mr-2'
              onChange={onToggleCustomHeader}
              type='checkbox'
            />
            <span className='text-sm'>Enable Custom Header Rendering</span>
          </label>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
            Shows gradient backgrounds with emojis
          </p>
        </div>

        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Filter Selection</h3>
          <label className='flex items-center'>
            <input
              checked={filterSelectionEnabled}
              className='mr-2'
              onChange={onToggleFilterSelection}
              type='checkbox'
            />
            <span className='text-sm'>Enable Filter Selection</span>
          </label>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
            Adds dropdown filters to relevant columns
          </p>
        </div>

        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>Filter Visibility</h3>
          <label className='flex items-center'>
            <input
              checked={filterVisibilityEnabled}
              className='mr-2'
              onChange={onToggleFilterVisibility}
              type='checkbox'
            />
            <span className='text-sm'>Enable Filter Visibility Control</span>
          </label>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
            Controls which filters are shown per column
          </p>
        </div>
      </div>

      {/* Feature Descriptions */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
        <div className='bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800'>
          <h4 className='font-semibold text-blue-900 dark:text-blue-200 mb-2'>📋 Header Mode</h4>
          <p className='text-sm text-blue-700 dark:text-blue-300'>
            <strong>Single:</strong> Compact header with filters inline
            <br />
            <strong>Double:</strong> Separate header and filter rows
          </p>
        </div>

        <div className='bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800'>
          <h4 className='font-semibold text-green-900 dark:text-green-200 mb-2'>🎨 Custom Header</h4>
          <p className='text-sm text-green-700 dark:text-green-300'>
            Use <code>renderHeader</code> to create custom header cells with gradients, icons, and
            custom styling
          </p>
        </div>

        <div className='bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border border-purple-200 dark:border-purple-800'>
          <h4 className='font-semibold text-purple-900 dark:text-purple-200 mb-2'>
            🔍 Filter Selection
          </h4>
          <p className='text-sm text-purple-700 dark:text-purple-300'>
            Add <code>filterSelectionOptions</code> to enable dropdown filtering with predefined
            values
          </p>
        </div>

        <div className='bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800'>
          <h4 className='font-semibold text-orange-900 dark:text-orange-200 mb-2'>
            👁️ Filter Visibility
          </h4>
          <p className='text-sm text-orange-700 dark:text-orange-300'>
            Control individual filter visibility using <code>hideFilter</code> property per column
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(ControlsSection);

