import { useVirtualizer } from '@tanstack/react-virtual';
import React, { useRef } from 'react';

// Dummy data (100 row × 20 col)
const rows = Array.from({ length: 100 }, (_, r) => ({
  id: r,
  cells: Array.from({ length: 20 }, (_, c) => {
    if (c === 2 && r % 5 === 0) {
      // cell panjang biar row tinggi
      return `Row ${r}, Col ${c} - ${'lorem ipsum dolor sit amet '.repeat(5)}`;
    }
    return `Row ${r}, Col ${c}`;
  }),
}));

const DynamicHeight1: React.FC = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  // Column virtualizer
  const columnVirtualizer = useVirtualizer({
    count: rows[0].cells.length,
    getScrollElement: () => parentRef.current,
    horizontal: true,
    estimateSize: () => 150,
    measureElement: (el) => el.getBoundingClientRect().width,
  });

  // Row virtualizer
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    measureElement: (el) => el.getBoundingClientRect().height,
  });

  return (
    <div ref={parentRef} className='border w-full h-[500px] overflow-auto text-sm font-sans'>
      <div
        style={{
          width: columnVirtualizer.getTotalSize(),
          height: rowVirtualizer.getTotalSize() + 40, // header offset
          position: 'relative',
        }}
      >
        {/* Header */}
        <div className='flex sticky top-0 bg-gray-100 z-10 border-b' style={{ height: 40 }}>
          {columnVirtualizer.getVirtualItems().map((col) => (
            <div
              key={col.key}
              data-index={col.index}
              ref={columnVirtualizer.measureElement}
              style={{
                position: 'absolute',
                left: col.start,
                width: col.size,
              }}
              className='px-3 py-2 border-r font-semibold'
            >
              Col {col.index}
            </div>
          ))}
        </div>

        {rowVirtualizer.getVirtualItems().map((row) => (
          <div
            key={row.key}
            ref={rowVirtualizer.measureElement}
            data-index={row.index}
            style={{
              position: 'absolute',
              top: 40 + row.start, // offset header
              minHeight: row.size,
              width: '100%',
              // display: 'flex',
            }}
            className={row.index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <div
              style={{
                display: 'flex',
                position: 'relative',
                transform: `translateX(${columnVirtualizer.getVirtualItems()[0]?.start ?? 0}px)`,
              }}
            >
              {columnVirtualizer.getVirtualItems().map((col) => (
                <div
                  key={col.key}
                  style={{
                    flex: `0 0 ${col.size}px`,
                    minWidth: col.size,
                    maxWidth: col.size,
                  }}
                  className='px-3 py-2 border-r border-b'
                >
                  {rows[row.index].cells[col.index]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicHeight1;
