import { useVirtualizer, Virtualizer, type VirtualItem } from '@tanstack/react-virtual';
import { createContext, useContextSelector } from 'use-context-selector';
import { useEffect, useState, useMemo, useCallback } from 'react';
import useFlattenedDataIncremental from '../hooks/use-flattened-data-incremental';
import { useAutoStretchColumn } from '../hooks/use-auto-stretch-column';
import { DEFAULT_SIZE } from '../lib';
import { useColumns } from './header-context';
import { useFilteredData } from './filter-context';

// ==================== Constants ====================
const EMPTY_VIRTUAL_ITEMS: VirtualItem[] = [];

// ==================== Types ====================
type IVirtualizerContext = {
  flattenedData: { type: 'row' | 'expanded'; item: unknown; key: string }[];
  rowVirtualizer: Virtualizer<HTMLDivElement, Element> | null;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element> | null;
  rowVirtualItems: VirtualItem[];
  columnVirtualItems: VirtualItem[];
  expandedRows: Set<string>;
  containerWidth: number;
  containerHeight: number;
  toggleExpandRow: (key: string) => void;
  enableColumnVirtualization: boolean;
};

type IVirtualizerContextProvider<T> = {
  children: React.ReactNode;
  rowKey: keyof T | ((data: T, index: number) => string);
  scrollElementRef: React.RefObject<HTMLDivElement | null>;
  enableColumnVirtualization?: boolean;
};

// ==================== Context ====================
const VirtualizerCtx = createContext<IVirtualizerContext | null>(null);

// ==================== Hooks ====================
export const useFlattenedData = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.flattenedData ?? []);

export const useRowVirtualizer = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.rowVirtualizer ?? null);

export const useColumnVirtualizer = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.columnVirtualizer ?? null);

export const useRowVirtualItems = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.rowVirtualItems ?? []);

export const useColumnVirtualItems = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.columnVirtualItems ?? []);

export const useExpandedRows = () =>
  useContextSelector(VirtualizerCtx, (ctx) => ctx?.expandedRows ?? new Set<string>());

export const useContainerWidth = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.containerWidth ?? 0);

export const useContainerHeight = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.containerHeight ?? 0);

export const useToggleExpandRow = () => useContextSelector(VirtualizerCtx, (ctx) => ctx?.toggleExpandRow)!;

export const useEnableColumnVirtualization = () =>
  useContextSelector(VirtualizerCtx, (ctx) => ctx?.enableColumnVirtualization ?? false);

// ==================== Provider ====================
export const VirtualizerContextProvider = <T,>(props: IVirtualizerContextProvider<T>): React.ReactElement => {
  const { children, scrollElementRef, rowKey, enableColumnVirtualization = true } = props;

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const columns = useColumns();
  const filteredData = useFilteredData();

  // ResizeObserver for container dimensions
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setContainerWidth(width);
      setContainerHeight(height);
    });

    if (scrollElementRef.current) {
      observer.observe(scrollElementRef.current);
    }

    return () => observer.disconnect();
  }, [scrollElementRef]);

  // Flattened data with expand/collapse logic
  const { flattenedData, toggleExpand, expandedKeys } = useFlattenedDataIncremental(filteredData as T[], rowKey);

  // Column virtualizer - memoized count
  const columnCount = useMemo(
    () => (enableColumnVirtualization ? columns.length : 0),
    [enableColumnVirtualization, columns.length],
  );

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: columnCount,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: (index) => columns[index]?.width || DEFAULT_SIZE.COLUMN_WIDTH,
    overscan: 5,
  });

  // Row virtualizer
  const rowVirtualizer = useVirtualizer({
    count: flattenedData.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => DEFAULT_SIZE.ROW_HEIGHT,
    overscan: 20,
  });

  // Auto stretch column hook
  useAutoStretchColumn({
    containerWidth,
    columns,
    columnVirtualizer: enableColumnVirtualization ? columnVirtualizer : null,
  });

  // Virtual items
  const rowVirtualItems = rowVirtualizer.getVirtualItems();
  const columnVirtualItems = enableColumnVirtualization ? columnVirtualizer.getVirtualItems() : EMPTY_VIRTUAL_ITEMS;

  // Memoized toggle expand callback
  const toggleExpandRow = useCallback(
    (key: string) => {
      toggleExpand(key);
    },
    [toggleExpand],
  );

  // Memoized context value
  const contextValue = useMemo<IVirtualizerContext>(
    () => ({
      flattenedData,
      rowVirtualizer,
      columnVirtualizer,
      containerWidth,
      containerHeight,
      rowVirtualItems,
      columnVirtualItems,
      toggleExpandRow,
      expandedRows: expandedKeys,
      enableColumnVirtualization,
    }),
    [
      flattenedData,
      rowVirtualizer,
      columnVirtualizer,
      containerWidth,
      containerHeight,
      rowVirtualItems,
      columnVirtualItems,
      toggleExpandRow,
      expandedKeys,
      enableColumnVirtualization,
    ],
  );

  return <VirtualizerCtx.Provider value={contextValue}>{children}</VirtualizerCtx.Provider>;
};
