import { memo } from 'react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Default Behavior',
      virtualized: 'Default mode (enableColumnVirtualization=true)',
      nonVirtualized: 'Must be explicitly disabled (enableColumnVirtualization=false)'
    },
    {
      feature: 'Performance',
      virtualized: 'Excellent with many columns',
      nonVirtualized: 'Good with few columns, may lag with many'
    },
    {
      feature: 'Memory Usage',
      virtualized: 'Lower - only renders visible columns',
      nonVirtualized: 'Higher - renders all columns'
    },
    {
      feature: 'Dynamic Row Height',
      virtualized: 'Not supported',
      nonVirtualized: 'Supported'
    },
    {
      feature: 'Group Headers',
      virtualized: 'Supported',
      nonVirtualized: 'Supported'
    },
    {
      feature: 'Freeze Columns',
      virtualized: 'Supported',
      nonVirtualized: 'Supported'
    },
    {
      feature: 'Scroll Performance',
      virtualized: 'Smooth with many columns',
      nonVirtualized: 'Smooth with few columns'
    },
    {
      feature: 'Layout Complexity',
      virtualized: 'More complex calculations',
      nonVirtualized: 'Simpler calculations'
    }
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-6'>Comparison</h2>
      
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-border rounded-lg'>
          <thead>
            <tr className='bg-muted/50'>
              <th className='border border-border px-4 py-3 text-left font-semibold'>Feature</th>
              <th className='border border-border px-4 py-3 text-left font-semibold text-green-600'>Column Virtualized</th>
              <th className='border border-border px-4 py-3 text-left font-semibold text-blue-600'>Non-Virtualized</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                <td className='border border-border px-4 py-3 font-medium'>{row.feature}</td>
                <td className='border border-border px-4 py-3'>{row.virtualized}</td>
                <td className='border border-border px-4 py-3'>{row.nonVirtualized}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default memo(ComparisonSection);
