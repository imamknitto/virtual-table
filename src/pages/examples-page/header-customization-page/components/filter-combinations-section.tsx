import { memo } from 'react';

const FilterCombinationsSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>Common Filter Combinations</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔢 Numeric Columns</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort + Advanced
            </p>
            <p>
              <strong>Hide:</strong> Search, Selection
            </p>
            <p>
              <strong>Example:</strong> Salary, Age, ID
            </p>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>📝 Text Columns</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort + Search
            </p>
            <p>
              <strong>Hide:</strong> Selection, Advanced
            </p>
            <p>
              <strong>Example:</strong> Name, Email, Address
            </p>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🏷️ Category Columns</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort + Selection
            </p>
            <p>
              <strong>Hide:</strong> Search, Advanced
            </p>
            <p>
              <strong>Example:</strong> Department, Status, Type
            </p>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🔍 Searchable Categories</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort + Search + Selection
            </p>
            <p>
              <strong>Hide:</strong> Advanced
            </p>
            <p>
              <strong>Example:</strong> Company, Position
            </p>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>⚡ Complex Filters</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort + Selection + Advanced
            </p>
            <p>
              <strong>Hide:</strong> Search
            </p>
            <p>
              <strong>Example:</strong> Experience, Location
            </p>
          </div>
        </div>
        <div className='border rounded-lg p-4'>
          <h3 className='font-semibold mb-2'>🎯 Simple Sort Only</h3>
          <div className='text-sm space-y-1'>
            <p>
              <strong>Use:</strong> Sort only
            </p>
            <p>
              <strong>Hide:</strong> Search, Selection, Advanced
            </p>
            <p>
              <strong>Example:</strong> ID, Simple counters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FilterCombinationsSection);

