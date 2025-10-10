import { memo } from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Checkbox Selection Features</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>✅ Selection Features</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Individual row selection with checkboxes</li>
            <li>• Select all functionality in header</li>
            <li>• Deselect individual rows when "select all" is active</li>
            <li>• Real-time selection state tracking</li>
            <li>• Custom selection change callbacks</li>
          </ul>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎯 Implementation</h3>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Add `row-selection` key to headers</li>
            <li>• Use `onChangeCheckboxRowSelection` callback</li>
            <li>• Track selected/deselected rows state</li>
            <li>• Handle select all vs individual selection</li>
            <li>• Customize checkbox column width</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);

