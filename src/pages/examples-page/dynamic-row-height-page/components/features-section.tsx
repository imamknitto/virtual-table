import { memo } from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Dynamic Row Heights',
      description: 'Rows automatically adjust their height based on content',
      benefits: [
        'No fixed row height restrictions',
        'Content wraps naturally',
        'Perfect for long text or lists',
        'Smooth scrolling maintained',
      ],
    },
    {
      title: 'Content Flexibility',
      description: 'Display complex content in table cells',
      benefits: [
        'Multi-line text support',
        'Lists and nested elements',
        'Custom React components',
        'Responsive content layout',
      ],
    },
    {
      title: 'Performance Optimization',
      description: 'Efficient rendering even with variable heights',
      benefits: [
        'Virtual scrolling maintained',
        'Automatic height measurement',
        'Minimal performance impact',
        'Works with large datasets',
      ],
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-6'>Key Features</h2>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, index) => (
          <div key={index} className='rounded-lg border bg-card p-6'>
            <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
            <p className='text-muted-foreground mb-4 text-sm'>{feature.description}</p>

            <ul className='space-y-2'>
              {feature.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className='flex items-start gap-2 text-sm'>
                  <span className='text-primary mt-1'>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
