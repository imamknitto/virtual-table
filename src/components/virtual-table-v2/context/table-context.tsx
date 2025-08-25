import { createContext, useContextSelector, type Context } from 'use-context-selector';
import type { ITableContext } from '../lib';
import { useMemo } from 'react';

const TableContext = createContext<ITableContext | undefined>(undefined) as Context<ITableContext>;

/**
 * ===============================================
 *                 Data Provider
 * ===============================================
 */
interface TableProviderProps extends ITableContext {
  children: React.ReactNode;
}

export const TableProvider = (props: TableProviderProps) => {
  const {
    children,
    flattenedData,
    selectedRow,
    sort,
    outerTableheight,
    outerTableWidth,
    scrollbarWidth,
    headerHeight,
    expandedContentHeight,
    isFilterVisible,
    filterSearch,
    filterSelection,
    filterAdvance,
    columnVisibilityList,
    visibleColumns,
    expandedRows,
    renderExpandedRow,
    getRowKey,
    handleResizeColumn,
    handleClickExpandRow,
    handleToggleFilterVisibility,
    handleToggleColumnVisibility,
    handleClickRow,
    handleDoubleClickRow,
    handleRightClickRow,
    checkboxSelectionRow,
  } = props;

  // Memoize static values that don't change often
  const staticContextValue = useMemo(
    () => ({
      getRowKey,
      headerHeight,
      outerTableheight,
      outerTableWidth,
      scrollbarWidth,
      expandedContentHeight,
      renderExpandedRow,
      handleToggleFilterVisibility,
      handleToggleColumnVisibility,
      columnVisibilityList,
      visibleColumns,
      sort,
      filterSearch,
      filterSelection,
      filterAdvance,
    }),
    [
      getRowKey,
      headerHeight,
      outerTableheight,
      outerTableWidth,
      scrollbarWidth,
      expandedContentHeight,
      renderExpandedRow,
      handleToggleFilterVisibility,
      handleToggleColumnVisibility,
      columnVisibilityList,
      visibleColumns,
      sort,
      filterSearch,
      filterSelection,
      filterAdvance,
    ],
  );

  // Memoize dynamic values that change frequently
  const dynamicContextValue = useMemo(
    () => ({
      flattenedData,
      selectedRow,
      expandedRows,
      handleClickExpandRow,
      handleClickRow,
      handleDoubleClickRow,
      handleRightClickRow,
      checkboxSelectionRow,
      isFilterVisible,
    }),
    [
      flattenedData,
      selectedRow,
      expandedRows,
      handleClickExpandRow,
      handleClickRow,
      handleDoubleClickRow,
      handleRightClickRow,
      checkboxSelectionRow,
      isFilterVisible,
    ],
  );

  // Memoize resize-related values separately to reduce re-renders during resize
  const resizeContextValue = useMemo(
    () => ({
      handleResizeColumn,
    }),
    [handleResizeColumn],
  );

  // Combine static and dynamic values
  const contextValue = useMemo(
    (): ITableContext => ({
      ...staticContextValue,
      ...dynamicContextValue,
      ...resizeContextValue,
    }),
    [staticContextValue, dynamicContextValue, resizeContextValue],
  );

  return <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>;
};

/**
 * ===============================================
 *                 Data Consumer
 */
export const useTableContext = <T,>(selector: (ctx: ITableContext) => T): T => {
  const selected = useContextSelector(TableContext, selector);
  if (selected === undefined)
    throw new Error('useTableContext must be used within a TableProvider');
  return selected;
};
