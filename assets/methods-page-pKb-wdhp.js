import{j as e}from"./index-BRWBM3tW.js";import"./router-BDK15HzG.js";import"./vendor-1zw1pNgy.js";import"./utils-BrsFTMAM.js";const r=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Methods"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Available methods and utilities for working with VirtualTable component."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Context Methods"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Methods available through React contexts for advanced table manipulation."}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"HeaderContext Methods"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"toggleColumnVisibility(key: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Toggles the visibility of a column by its key."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"toggleFilterVisibility()"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Toggles the visibility of the filter row."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"updateColumn(key: string, update: Partial<IAdjustedHeader>)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Updates column properties like width, visibility, etc."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"updateFreezeColumn(key: string, freezeType: 'left' | 'right', update: Partial<IAdjustedHeader>)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Updates frozen column properties."})]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"FilterContext Methods"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"sort.onChangeSort(columnKey: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Changes the sort order for a column (asc → desc → unset)."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"sort.onChangeSpecificSort(columnKey: string, sortBy: TSortOrder)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Sets a specific sort order for a column."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"search.updateSearch(columnKey: string, value: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Updates the search value for a specific column."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"search.resetSearch(columnKey: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Clears the search value for a specific column."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"selection.updateFilter(columnKey: string, values: string[])"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Updates the selection filter for a column."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"advance.updateAdvanceFilter(columnKey: string, config: TFilterAdvanceConfig, value: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Updates advanced filter for a column with specific operator."})]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"SelectionContext Methods"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"toggleRowSelection(key: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Toggles the selection state of a specific row."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"toggleSelectAll(mode: boolean)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Selects or deselects all rows."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"toggleExpandRow(key: string)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Toggles the expanded state of a row."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-mono text-sm font-semibold",children:"onClickRow(key: string | null)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Sets the currently selected row."})]})]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Custom Hooks"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Utility hooks for advanced table functionality and data manipulation."}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useFilterSort"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for managing table sorting functionality."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const { sortedData, handleSort, handleSpecificSort, sortKey, sortBy } = useFilterSort({
  data: TDataSource[];
  useServerSort?: boolean;
  isResetFilter?: boolean;
  onChangeSort?: (sortKey: string, sortBy: TSortOrder) => void;
});`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useFilterSearch"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for managing table search functionality."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const { searchedData, activeSearch, updateSearch, resetSearch } = useFilterSearch({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerSearch?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeSearch?: (data: Record<keyof TDataSource, string>) => void;
});`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useFilterSelection"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for managing selection-based filtering."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const { filteredData, updateFilter, resetFilter, activeFilters } = useFilterSelection({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerFilter?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeFilter?: (data: Record<keyof TDataSource, string[]>) => void;
});`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useFilterAdvance"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for managing advanced filtering with operators."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const { filteredAdvanceData, updateAdvanceFilter, resetAdvanceFilter } = useFilterAdvance({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerAdvanceFilter?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeAdvanceFilter?: (data: Record<keyof TDataSource, { config_name: TFilterAdvanceConfig; value: string }>) => void;
});`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useFlattenedDataIncremental"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for managing expandable row data with incremental updates."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const { flattenedData, toggleExpand, expandedKeys } = useFlattenedDataIncremental(
  data: T[] | undefined,
  rowKey: keyof T | ((data: T, index: number) => string)
);`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useAutoStretchColumn"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for automatically stretching columns to fill available space."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`useAutoStretchColumn({
  containerWidth: number;
  columns: IHeader<unknown>[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
});`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useScrollBottomDetection"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for detecting when user scrolls to the bottom of the table."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`useScrollBottomDetection(
  scrollElementRef: React.RefObject<HTMLElement | null>,
  {
    threshold?: number;
    throttleMs?: number;
    onScrollTouchBottom: () => void;
  }
);`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"useClickOutside"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Hook for detecting clicks outside specified elements."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`useClickOutside(
  refs: React.RefObject<HTMLDivElement | HTMLElement | null>[],
  handler: (currentTarget?: HTMLElement | null, el?: HTMLDivElement | HTMLElement) => void
);`})})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Utility Methods"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Helper functions for common table operations and calculations."}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"calculateElementOverflow"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Calculates if an element would overflow the viewport boundaries."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`calculateElementOverflow(
  rect: DOMRect,
  cardWidth: number,
  cardHeight: number
): { right: number; bottom: number; left: number; top: number }`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"calculateFixedCardPosition"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Calculates optimal position for popup cards to avoid viewport overflow."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`calculateFixedCardPosition(
  rect: DOMRect,
  cardHeight?: number
): { calculatedTop: number; calculatedLeft: number }`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"getScrollbarWidth"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Calculates the width of the scrollbar for a given element."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`getScrollbarWidth(
  ref: React.RefObject<HTMLDivElement | null>
): number`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"findChildRecursive"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Recursively searches for a child header in nested header structures."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`findChildRecursive(
  parent: IAdjustedHeader,
  targetChildKey: string
): IAdjustedHeader | undefined`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"getObjKeyByValue"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Finds the key of an object property by its value."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`getObjKeyByValue(
  object: Record<string, string | number>,
  value: string | number
): string | undefined`})})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Constants"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Predefined constants for consistent table configuration."}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"DEFAULT_SIZE"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Default dimensions for table elements."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const DEFAULT_SIZE = {
  GROUP_HEADER_HEIGHT: 32,
  HEADER_HEIGTH: 32,
  FILTER_HEIGHT: 28,
  COLUMN_WIDTH: 160,
  ROW_HEIGHT: 28,
  FOOTER_HEIGHT: 32,
  CARD_FILTER_WIDTH: 160,
  CARD_FILTER_HEIGHT: 200,
  EXPANDED_ROW_HEIGHT: 250,
};`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"FILTER_ADVANCE_CONFIG"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Available operators for advanced filtering."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const FILTER_ADVANCE_CONFIG = {
  none: 'None',
  equal: 'Equal',
  notEqual: 'Not Equal',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
  contains: 'Contains',
  notContains: 'Not Contains',
};`})})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"SESSION_STORAGE_KEY"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Keys used for session storage persistence."}),e.jsx("div",{className:"bg-muted rounded p-3",children:e.jsx("code",{className:"text-xs",children:`const SESSION_STORAGE_KEY = {
  SEARCH_PER_COLUMN: 'search_per_column',
  FILTER_SELECTION_PER_COLUMN: 'filter_selection_per_column',
  FILTER_ADVANCE_PER_COLUMN: 'filter_advance_per_column',
};`})})]})]})]})]}),e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"💡 Pro Tip"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"These methods provide fine-grained control over table behavior. Use context methods for runtime manipulation, hooks for custom functionality, and utilities for common calculations. All methods are fully typed for excellent developer experience!"})]})]});export{r as default};
//# sourceMappingURL=methods-page-pKb-wdhp.js.map
