import { memo } from 'react';

const UsageGuidelinesSection = () => {
  const guidelines = [
    {
      title: 'When to Use Column Virtualization',
      description: 'Use column virtualization for tables with many columns',
      scenarios: [
        'Tables with 15+ columns',
        'Performance is critical',
        'Memory usage is a concern',
        'You don\'t need dynamic row height'
      ],
      code: `enableColumnVirtualization={true}
useDynamicRowHeight={false}`
    },
    {
      title: 'When to Use Non-Virtualized Mode',
      description: 'Use non-virtualized mode for tables with fewer columns or when you need advanced features',
      scenarios: [
        'Tables with fewer than 15 columns',
        'You need dynamic row height',
        'Complex group headers are required',
        'Simpler debugging is preferred'
      ],
      code: `enableColumnVirtualization={false}
useDynamicRowHeight={true}`
    },
    {
      title: 'Best Practices',
      description: 'Follow these guidelines for optimal performance',
      scenarios: [
        'Set appropriate column widths',
        'Use freeze columns strategically',
        'Test performance with your data',
        'Consider mobile responsiveness'
      ],
      code: `// Always test with your actual data
const headers = [
  { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
  { key: 'name', caption: 'Name', width: 180, freeze: 'left' },
  // ... more columns
  { key: 'status', caption: 'Status', width: 100, freeze: 'right' }
];`
    }
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-6'>Usage Guidelines</h2>
      
      <div className='space-y-8'>
        {guidelines.map((guideline, index) => (
          <div key={index} className='rounded-lg border bg-card p-6'>
            <h3 className='text-lg font-semibold mb-2'>{guideline.title}</h3>
            <p className='text-muted-foreground mb-4'>{guideline.description}</p>
            
            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <h4 className='font-medium mb-2'>Scenarios:</h4>
                <ul className='space-y-1'>
                  {guideline.scenarios.map((scenario, scenarioIndex) => (
                    <li key={scenarioIndex} className='flex items-start gap-2 text-sm'>
                      <span className='text-primary mt-1'>•</span>
                      {scenario}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className='font-medium mb-2'>Configuration:</h4>
                <pre className='bg-muted p-3 rounded text-sm overflow-x-auto'>
                  <code>{guideline.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(UsageGuidelinesSection);
