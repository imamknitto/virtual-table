import clsx from 'clsx';
import type { IHeader, IVirtualTable } from './lib';
import { useFlattenedData } from './hooks';
import { useMemo, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export default function VirtualTable2<TData>(virtualTableProps: IVirtualTable<TData>) {
  const { rowKey, data, headers, classNameOuterTable } = virtualTableProps;

  const scrollElementRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLElement | null>(null);

  const [newHeaders, setNewHeaders] = useState<IHeader<TData>[]>(headers);
  const [expandedRows] = useState<Set<string | number>>(new Set());
  const [selectedRowKey, setSelectedRowKey] = useState<string | number | null>(null);

  const flattenedData = useFlattenedData(data, expandedRows, rowKey);

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: newHeaders.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: (index) => newHeaders[index].width || 160,
    overscan: 2,
  });

  const rowVirtualizer = useVirtualizer({
    count: flattenedData.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: (index) => {
      const item = flattenedData[index];
      return item.type === 'row' ? 33 : 160;
    },
    overscan: 5,
  });

  const rowMap = useMemo(() => {
    const map = new Map<string | number, TData>();
    flattenedData.forEach((d) => map.set(String(d.item[rowKey as keyof typeof d.item]), d.item));
    return map;
  }, [flattenedData, rowKey]);

  const startResize = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = newHeaders[index].width || 160;

    const resizeLine = document.getElementById('resize-line')!;
    resizeLine.style.display = 'block';
    resizeLine.style.left = `${e.clientX}px`;

    const onMouseMove = (ev: MouseEvent) => {
      resizeLine.style.left = `${ev.clientX}px`; // 👉 update DOM saja (tidak trigger React)
    };

    const onMouseUp = (ev: MouseEvent) => {
      resizeLine.style.display = 'none';

      const delta = ev.clientX - startX;
      const newWidth = Math.max(50, startWidth + delta);

      // ✅ UPDATE React state sekali aja pas drop
      setNewHeaders((prev) => prev.map((h, i) => (i === index ? { ...h, width: newWidth } : h)));
      columnVirtualizer.resizeItem(index, newWidth);

      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  console.log({ flattenedData, rowMap, newHeaders, rowKey });

  return (
    <>
      <div
        ref={scrollElementRef}
        className={clsx(
          'w-full h-full overflow-auto relative border border-gray-200',
          classNameOuterTable,
        )}
      >
        <table className='w-max'>
          <thead className='sticky top-0 z-10'>
            <tr>
              {columnVirtualizer.getVirtualItems().map((column) => {
                const header = newHeaders[column.index];

                return (
                  <th
                    key={column.key}
                    className='font-semibold border-r border-b border-gray-200 px-1.5 h-[33px] bg-gray-50'
                    style={{
                      position: 'absolute',
                      top: 0,
                      transform: `translateX(${column.start}px)`,
                      width: column.size,
                    }}
                  >
                    {/* {header.caption} */}
                    <div className='flex justify-between items-center w-full'>
                      <span>{header.caption}</span>
                      <div
                        className='w-1 h-[33px] bg-red-500 cursor-col-resize'
                        onMouseDown={(e) => startResize(e, column.index)}
                      />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody
            style={{ height: rowVirtualizer.getTotalSize(), position: 'relative', top: 33 }}
            onClick={(e) => {
              const row = (e.target as HTMLElement).closest('tr');
              const cell = (e.target as HTMLElement).closest('td');
              if (!cell) return;

              const rowKey = cell.getAttribute('data-row-key');
              const colKey = cell.getAttribute('data-col-key');

              const rowData = rowMap.get(rowKey || '');
              const cellData = rowData?.[colKey as keyof typeof rowData];

              if (selectedRef.current) {
                selectedRef.current.classList.remove('bg-blue-500');
              }

              row?.classList.add('bg-blue-500');

              selectedRef.current = row;
              setSelectedRowKey(rowKey);

              console.log('Clicked:', { rowKey, colKey, rowData, cellData });
            }}
          >
            {rowVirtualizer.getVirtualItems().map((row) => {
              const rowData = flattenedData[row.index].item;

              return (
                <tr
                  key={row.key}
                  style={{
                    position: 'absolute',
                    height: row.size,
                    transform: `translateY(${row.start}px)`,
                  }}
                >
                  {columnVirtualizer.getVirtualItems().map((column) => {
                    const header = newHeaders[column.index];

                    return (
                      <td
                        key={column.key}
                        data-row-key={String(rowData[rowKey as keyof typeof rowData])} // 🔑 biar bisa tau row mana
                        data-col-key={header.key as string} // 🔑 biar tau kolom mana
                        className='border-r border-b border-gray-200 px-1.5 h-[33px]'
                        style={{
                          position: 'absolute',
                          left: column.start,
                          width: column.size,
                          height: row.size,
                          backgroundColor:
                            String(rowData[rowKey as keyof typeof rowData]) ===
                            String(selectedRowKey)
                              ? '#e0f7ff'
                              : '#ffffff',
                        }}
                      >
                        {String(rowData[header.key as keyof typeof rowData])}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        id='resize-line'
        style={{
          position: 'absolute',
          top: 0,
          width: '1px',
          height: '100%',
          background: 'blue',
          display: 'none',
          zIndex: 50,
        }}
      />
    </>
  );
}
