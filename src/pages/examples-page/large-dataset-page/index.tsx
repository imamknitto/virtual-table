import { memo, useMemo, useRef } from 'react';
import {
  AdvancedFeaturesSection,
  BestPracticesSection,
  LargeDatasetSection,
  MediumDatasetSection,
  MemoryManagementSection,
  NextStepsSection,
  PerformanceMetricsSection,
  PerformanceOverview,
} from './components';
import { generateDataset } from './utils';
import { useWindowVirtualizer } from '@tanstack/react-virtual';

const LargeDatasetPage = () => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: 8,
    estimateSize: () => 600,
    overscan: 2,
    scrollMargin: listRef.current?.offsetTop ?? 0,
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element.getBoundingClientRect().height
        : undefined,
  });

  // Memoized data generation to avoid regenerating on every render
  const mediumData = useMemo(() => generateDataset(10000), []);

  const listSection = [
    <PerformanceOverview />,
    <MediumDatasetSection data={mediumData} />,
    <LargeDatasetSection />,
    <MemoryManagementSection />,
    <AdvancedFeaturesSection />,
    <BestPracticesSection />,
    <PerformanceMetricsSection />,
    <NextStepsSection />,
  ];

  return (
    <div ref={listRef} className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Large Datasets</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to handle massive datasets (1M+ records) with virtual table's advanced performance
          optimizations and memory management techniques.
        </p>
      </div>

      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={(node) => virtualizer.measureElement(node)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualItem.start - virtualizer.options.scrollMargin}px)`,
            }}
          >
            {listSection[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LargeDatasetPage);
