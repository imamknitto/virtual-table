import { memo, useCallback, useMemo } from 'react';
import clsx from 'clsx';

import { useDeselectedRowKeys, useSelectAll, useToggleSelectAll } from './context/selection-context';
import {
  useColumns,
  useIsFilterVisible,
  useUpdateColumn,
  useGetLeaves,
  useUpdateChildColumn,
} from './context/header-context';
import HeaderCaption from './components/header/header-caption';
import { useFilterHeight, useHeaderMode } from './context/ui-context';
import { RowCheckbox, TableFilter } from './components';
import ResizeIndicator from './components/resize-indicator';
import ResizeLine from './components/resize-line';
import NativeTableHead from './components/native-table-head';
import { DEFAULT_SIZE } from './lib';

interface IRegularTableHeader {
  headerHeight: number;
}

function RegularTableHeader({ headerHeight }: IRegularTableHeader) {
  const columns = useColumns();
  const selectAll = useSelectAll();
  const deselectedRowKeys = useDeselectedRowKeys();
  const toggleSelectAll = useToggleSelectAll();
  const isFilterVisible = useIsFilterVisible();
  const headerMode = useHeaderMode();
  const filterHeight = useFilterHeight();
  const updateColumn = useUpdateColumn();
  const updateChildColumn = useUpdateChildColumn();
  const getLeaves = useGetLeaves();

  const handleSelectAllChange = () => {
    toggleSelectAll(!selectAll);
  };

  const isSingleHeader = headerMode === 'single';
  const calcHeaderHeight = isSingleHeader ? headerHeight : headerHeight + (isFilterVisible ? filterHeight : 0);

  // NOTE: Cek apakah ada kolom yang punya children (untuk grouped/nested header)
  const hasGroupedHeaders = useMemo(() => columns.some((col) => col.children && col.children.length > 0), [columns]);

  // NOTE: Handler untuk resize regular column (bukan child dari group)
  const handleResizeColumn = useCallback(
    (e: React.MouseEvent, columnIndex: number) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = columns[columnIndex].width!;

      // NOTE: Tampilkan garis biru vertical sebagai visual feedback saat resize
      const resizeLine = document.getElementById('resize-line')!;
      resizeLine.style.display = 'block';
      resizeLine.style.left = `${e.clientX}px`;

      const onMouseMove = (ev: MouseEvent) => {
        // NOTE: Update posisi garis mengikuti mouse movement dengan requestAnimationFrame untuk smooth
        requestAnimationFrame(() => {
          resizeLine.style.left = `${ev.clientX}px`;
        });
      };

      const onMouseUp = (ev: MouseEvent) => {
        // NOTE: Sembunyikan garis resize
        resizeLine.style.display = 'none';
        // NOTE: Hitung delta (perubahan) dan width baru (minimum 50px)
        const delta = ev.clientX - startX;
        const newWidth = Math.max(50, startWidth + delta);

        // NOTE: Update width kolom di context dengan requestAnimationFrame
        requestAnimationFrame(() => {
          updateColumn(columns[columnIndex].key, { width: newWidth });
        });

        // NOTE: Cleanup event listeners
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },
    [columns, updateColumn],
  );

  // NOTE: Handler untuk resize child column (kolom yang ada di dalam group)
  const handleResizeChildColumn = useCallback(
    (e: React.MouseEvent, parentKey: string, childKey: string) => {
      e.preventDefault();
      const startX = e.clientX;

      // NOTE: Cari parent column berdasarkan key
      const parent = columns.find((col) => col.key === parentKey);
      if (!parent) return;

      // NOTE: Cari child column di dalam parent
      const child = parent.children?.find((c) => c.key === childKey);
      if (!child) return;

      const startWidth = child.width || DEFAULT_SIZE.COLUMN_WIDTH;

      // NOTE: Tampilkan garis resize
      const resizeLine = document.getElementById('resize-line')!;
      resizeLine.style.display = 'block';
      resizeLine.style.left = `${e.clientX}px`;

      const onMouseMove = (ev: MouseEvent) => {
        requestAnimationFrame(() => {
          resizeLine.style.left = `${ev.clientX}px`;
        });
      };

      const onMouseUp = (ev: MouseEvent) => {
        resizeLine.style.display = 'none';
        const delta = ev.clientX - startX;
        const newWidth = Math.max(50, startWidth + delta);

        // NOTE: Update width child column di context (parent width akan auto-adjust)
        requestAnimationFrame(() => {
          updateChildColumn(parentKey as string, childKey as string, { width: newWidth });
        });

        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },
    [columns, updateChildColumn],
  );

  // NOTE: Render baris pertama header (untuk grouped headers dengan colSpan)
  const renderGroupHeaderRow = () => {
    return (
      <tr>
        {columns.map((header, columnIndex) => {
          const isCheckboxHeader = header.key === 'row-selection';
          const hasChildren = header.children && header.children.length > 0;
          const isLastColumn = columnIndex === columns.length - 1;
          // NOTE: Kalau punya children, colSpan = jumlah leaf children. Kalau tidak, colSpan = 1
          const colSpan = hasChildren ? getLeaves(header).length : 1;
          // NOTE: Kalau punya children, rowSpan = 1 (hanya baris pertama). Kalau tidak, rowSpan = 2 (span ke baris kedua)
          const rowSpan = hasChildren ? 1 : 2;

          let headContent;

          if (isCheckboxHeader) {
            headContent = (
              <div onClick={handleSelectAllChange} className='cursor-pointer'>
                <RowCheckbox checked={selectAll && !deselectedRowKeys.size} />
              </div>
            );
          } else if (hasChildren) {
            headContent = (
              <div className='relative size-full group/outer flex items-center justify-center'>{header.caption}</div>
            );
          } else if (header.renderHeader) {
            headContent = (
              <div className='relative size-full group/outer'>
                {header.renderHeader()}
                <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, columnIndex)} />
              </div>
            );
          } else {
            headContent = (
              <div
                className={clsx('flex size-full relative group/outer', {
                  'flex-row justify-between items-center': isSingleHeader,
                  'flex-col justify-between items-start': !isSingleHeader,
                })}
              >
                <HeaderCaption
                  isSingleHeader={isSingleHeader}
                  isFilterVisible={isFilterVisible}
                  caption={header.caption}
                  headerKey={header.key.toString()}
                  hideFilterSort={header?.hideFilter?.sort || false}
                />

                {isFilterVisible && (
                  <TableFilter
                    headerMode={headerMode}
                    headerKey={header.key.toString()}
                    filterSelectionOptions={header.filterSelectionOptions || []}
                    hideFilter={header.hideFilter}
                  />
                )}

                <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, columnIndex)} />
              </div>
            );
          }

          return (
            <NativeTableHead
              key={'regular-table-head-group-' + header.key?.toString()}
              width={header.width || 0}
              height={hasChildren ? DEFAULT_SIZE.GROUP_HEADER_HEIGHT : calcHeaderHeight}
              className={clsx({ 'border-r': !isLastColumn })}
              colSpan={colSpan}
              rowSpan={rowSpan}
            >
              {headContent}
            </NativeTableHead>
          );
        })}
      </tr>
    );
  };

  // NOTE: Render baris kedua header (hanya untuk children dari grouped columns)
  const renderChildHeaderRow = () => {
    return (
      <tr>
        {columns.flatMap((header) => {
          const hasChildren = header.children && header.children.length > 0;
          // NOTE: Skip kalau kolom ini tidak punya children (sudah di-render di row pertama dengan rowSpan=2)
          if (!hasChildren) return [];

          return header.children!.map((child, childIndex) => {
            const isLastChild = childIndex === header.children!.length - 1;
            const hideFilterSort = child?.hideFilter?.sort || false;

            const headContent = child.renderHeader ? (
              <div className='relative size-full group/outer'>
                {child.renderHeader()}
                <ResizeIndicator
                  handleMouseDown={(e) => handleResizeChildColumn(e, header.key as string, child.key as string)}
                />
              </div>
            ) : (
              <div
                className={clsx('flex size-full relative group/outer', {
                  'flex-row justify-between items-center': isSingleHeader,
                  'flex-col justify-between items-start': !isSingleHeader,
                })}
              >
                <HeaderCaption
                  isSingleHeader={isSingleHeader}
                  isFilterVisible={isFilterVisible}
                  caption={child.caption}
                  headerKey={child.key.toString()}
                  hideFilterSort={hideFilterSort}
                />

                {isFilterVisible && (
                  <TableFilter
                    headerMode={headerMode}
                    headerKey={child.key.toString()}
                    filterSelectionOptions={child.filterSelectionOptions || []}
                    hideFilter={child.hideFilter}
                  />
                )}

                <ResizeIndicator
                  handleMouseDown={(e) => handleResizeChildColumn(e, header.key as string, child.key as string)}
                />
              </div>
            );

            return (
              <NativeTableHead
                key={'regular-table-head-child-' + child.key?.toString()}
                width={child.width || 0}
                height={calcHeaderHeight}
                className={clsx({ 'border-r': !isLastChild })}
              >
                {headContent}
              </NativeTableHead>
            );
          });
        })}
      </tr>
    );
  };

  return (
    <>
    <thead className='sticky top-0 z-10'>
        {hasGroupedHeaders ? (
          <>
            {/* NOTE: Untuk grouped headers, render 2 baris:
                - Baris 1: Parent groups (dengan colSpan) + regular columns (dengan rowSpan=2)
                - Baris 2: Children dari groups saja */}
            {renderGroupHeaderRow()}
            {renderChildHeaderRow()}
          </>
        ) : (
          // NOTE: Untuk flat headers (no grouping), render 1 baris saja
          <tr>
            {columns.map((header, columnIndex) => {
              const isCheckboxHeader = header.key === 'row-selection';
              const isLastColumn = columnIndex === columns.length - 1;
              const hideFilterSort = header?.hideFilter?.sort || false;

              let headContent;

              if (isCheckboxHeader) {
                headContent = (
                  <div onClick={handleSelectAllChange} className='cursor-pointer'>
                    <RowCheckbox checked={selectAll && !deselectedRowKeys.size} />
                  </div>
                );
              } else if (header.renderHeader) {
                headContent = (
                  <div className='relative size-full group/outer'>
                    {header.renderHeader()}
                    <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, columnIndex)} />
                  </div>
                );
              } else {
                headContent = (
                  <div
                    className={clsx('flex size-full relative group/outer', {
                      'flex-row justify-between items-center': isSingleHeader,
                      'flex-col justify-between items-start': !isSingleHeader,
                    })}
                  >
                    <HeaderCaption
                      isSingleHeader={isSingleHeader}
                      isFilterVisible={isFilterVisible}
                      caption={header.caption}
                      headerKey={header.key.toString()}
                      hideFilterSort={hideFilterSort}
                    />

                    {isFilterVisible && (
                      <TableFilter
                        headerMode={headerMode}
                        headerKey={header.key.toString()}
                        filterSelectionOptions={header.filterSelectionOptions || []}
                        hideFilter={header.hideFilter}
                      />
                    )}

                    <ResizeIndicator handleMouseDown={(e) => handleResizeColumn(e, columnIndex)} />
                  </div>
                );
              }

              return (
          <NativeTableHead
            key={'regular-table-head-' + header.key?.toString()}
            width={header.width || 0}
                  height={calcHeaderHeight}
                  className={clsx({ 'border-r': !isLastColumn })}
          >
                  {headContent}
          </NativeTableHead>
              );
            })}
      </tr>
        )}
    </thead>
      <ResizeLine />
    </>
  );
}

export default memo(RegularTableHeader);
