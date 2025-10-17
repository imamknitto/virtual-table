const MethodsPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Methods</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Available methods and utilities for working with KnittoTable component.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Context Methods */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Context Methods</h2>
          <p className='text-muted-foreground mt-2'>
            Methods available through React contexts for advanced table manipulation.
          </p>

          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>HeaderContext Methods</h3>
              <div className='space-y-3'>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>toggleColumnVisibility(key: string)</h4>
                  <p className='text-sm text-muted-foreground'>
                    Toggles the visibility of a column by its key.
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>toggleFilterVisibility()</h4>
                  <p className='text-sm text-muted-foreground'>Toggles the visibility of the filter row.</p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    updateColumn(key: string, update: Partial&lt;IAdjustedHeader&gt;)
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    Updates column properties like width, visibility, etc.
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    updateFreezeColumn(key: string, freezeType: 'left' | 'right', update:
                    Partial&lt;IAdjustedHeader&gt;)
                  </h4>
                  <p className='text-sm text-muted-foreground'>Updates frozen column properties.</p>
                </div>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>FilterContext Methods</h3>
              <div className='space-y-3'>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>sort.onChangeSort(columnKey: string)</h4>
                  <p className='text-sm text-muted-foreground'>
                    Changes the sort order for a column (asc → desc → unset).
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    sort.onChangeSpecificSort(columnKey: string, sortBy: TSortOrder)
                  </h4>
                  <p className='text-sm text-muted-foreground'>Sets a specific sort order for a column.</p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    search.updateSearch(columnKey: string, value: string)
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    Updates the search value for a specific column.
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>search.resetSearch(columnKey: string)</h4>
                  <p className='text-sm text-muted-foreground'>
                    Clears the search value for a specific column.
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    selection.updateFilter(columnKey: string, values: string[])
                  </h4>
                  <p className='text-sm text-muted-foreground'>Updates the selection filter for a column.</p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>
                    advance.updateAdvanceFilter(columnKey: string, config: TFilterAdvanceConfig, value:
                    string)
                  </h4>
                  <p className='text-sm text-muted-foreground'>
                    Updates advanced filter for a column with specific operator.
                  </p>
                </div>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>SelectionContext Methods</h3>
              <div className='space-y-3'>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>toggleRowSelection(key: string)</h4>
                  <p className='text-sm text-muted-foreground'>
                    Toggles the selection state of a specific row.
                  </p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>toggleSelectAll(mode: boolean)</h4>
                  <p className='text-sm text-muted-foreground'>Selects or deselects all rows.</p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>toggleExpandRow(key: string)</h4>
                  <p className='text-sm text-muted-foreground'>Toggles the expanded state of a row.</p>
                </div>
                <div>
                  <h4 className='font-mono text-sm font-semibold'>onClickRow(key: string | null)</h4>
                  <p className='text-sm text-muted-foreground'>Sets the currently selected row.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hook Methods */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Custom Hooks</h2>
          <p className='text-muted-foreground mt-2'>
            Utility hooks for advanced table functionality and data manipulation.
          </p>

          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useFilterSort</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for managing table sorting functionality.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const { sortedData, handleSort, handleSpecificSort, sortKey, sortBy } = useFilterSort({
  data: TDataSource[];
  useServerSort?: boolean;
  isResetFilter?: boolean;
  onChangeSort?: (sortKey: string, sortBy: TSortOrder) => void;
});`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useFilterSearch</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for managing table search functionality.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const { searchedData, activeSearch, updateSearch, resetSearch } = useFilterSearch({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerSearch?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeSearch?: (data: Record<keyof TDataSource, string>) => void;
});`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useFilterSelection</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for managing selection-based filtering.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const { filteredData, updateFilter, resetFilter, activeFilters } = useFilterSelection({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerFilter?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeFilter?: (data: Record<keyof TDataSource, string[]>) => void;
});`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useFilterAdvance</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for managing advanced filtering with operators.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const { filteredAdvanceData, updateAdvanceFilter, resetAdvanceFilter } = useFilterAdvance({
  data: TDataSource[];
  isResetFilter?: boolean;
  useServerAdvanceFilter?: boolean;
  useSessionFilter?: { tableKey: string };
  onChangeAdvanceFilter?: (data: Record<keyof TDataSource, { config_name: TFilterAdvanceConfig; value: string }>) => void;
});`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useFlattenedDataIncremental</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for managing expandable row data with incremental updates.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const { flattenedData, toggleExpand, expandedKeys } = useFlattenedDataIncremental(
  data: T[] | undefined,
  rowKey: keyof T | ((data: T, index: number) => string)
);`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useAutoStretchColumn</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for automatically stretching columns to fill available space.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`useAutoStretchColumn({
  containerWidth: number;
  columns: IHeader<unknown>[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
});`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useScrollBottomDetection</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for detecting when user scrolls to the bottom of the table.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`useScrollBottomDetection(
  scrollElementRef: React.RefObject<HTMLElement | null>,
  {
    threshold?: number;
    throttleMs?: number;
    onScrollTouchBottom: () => void;
  }
);`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>useClickOutside</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Hook for detecting clicks outside specified elements.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`useClickOutside(
  refs: React.RefObject<HTMLDivElement | HTMLElement | null>[],
  handler: (currentTarget?: HTMLElement | null, el?: HTMLDivElement | HTMLElement) => void
);`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Methods */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Utility Methods</h2>
          <p className='text-muted-foreground mt-2'>
            Helper functions for common table operations and calculations.
          </p>

          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>calculateElementOverflow</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Calculates if an element would overflow the viewport boundaries.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`calculateElementOverflow(
  rect: DOMRect,
  cardWidth: number,
  cardHeight: number
): { right: number; bottom: number; left: number; top: number }`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>calculateFixedCardPosition</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Calculates optimal position for popup cards to avoid viewport overflow.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`calculateFixedCardPosition(
  rect: DOMRect,
  cardHeight?: number
): { calculatedTop: number; calculatedLeft: number }`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>getScrollbarWidth</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Calculates the width of the scrollbar for a given element.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`getScrollbarWidth(
  ref: React.RefObject<HTMLDivElement | null>
): number`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>findChildRecursive</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Recursively searches for a child header in nested header structures.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`findChildRecursive(
  parent: IAdjustedHeader,
  targetChildKey: string
): IAdjustedHeader | undefined`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>getObjKeyByValue</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Finds the key of an object property by its value.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`getObjKeyByValue(
  object: Record<string, string | number>,
  value: string | number
): string | undefined`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Constants */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Constants</h2>
          <p className='text-muted-foreground mt-2'>
            Predefined constants for consistent table configuration.
          </p>

          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>DEFAULT_SIZE</h3>
              <p className='text-sm text-muted-foreground mb-3'>Default dimensions for table elements.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const DEFAULT_SIZE = {
  GROUP_HEADER_HEIGHT: 32,
  HEADER_HEIGTH: 32,
  FILTER_HEIGHT: 28,
  COLUMN_WIDTH: 160,
  ROW_HEIGHT: 28,
  FOOTER_HEIGHT: 32,
  CARD_FILTER_WIDTH: 160,
  CARD_FILTER_HEIGHT: 200,
  EXPANDED_ROW_HEIGHT: 250,
};`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>FILTER_ADVANCE_CONFIG</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                Available operators for advanced filtering.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const FILTER_ADVANCE_CONFIG = {
  none: 'None',
  equal: 'Equal',
  notEqual: 'Not Equal',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
  contains: 'Contains',
  notContains: 'Not Contains',
};`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>SESSION_STORAGE_KEY</h3>
              <p className='text-sm text-muted-foreground mb-3'>Keys used for session storage persistence.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`const SESSION_STORAGE_KEY = {
  SEARCH_PER_COLUMN: 'search_per_column',
  FILTER_SELECTION_PER_COLUMN: 'filter_selection_per_column',
  FILTER_ADVANCE_PER_COLUMN: 'filter_advance_per_column',
};`}</code>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Pro Tip</h3>
        <p className='text-sm text-muted-foreground'>
          These methods provide fine-grained control over table behavior. Use context methods for runtime
          manipulation, hooks for custom functionality, and utilities for common calculations. All methods are
          fully typed for excellent developer experience!
        </p>
      </div>
    </div>
  );
};

export default MethodsPage;
