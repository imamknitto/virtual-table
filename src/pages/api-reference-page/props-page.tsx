const PropsPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Props</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Complete reference for all VirtualTable component props and their configurations.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Core Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Core Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>headers</h3>
                <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded'>Required</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Array of column definitions that specify the structure and behavior of table columns.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>IHeader&lt;TData&gt;[]</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>data</h3>
                <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded'>Required</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Array of data objects to be displayed in the table rows.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>TData[]</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>rowKey</h3>
                <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded'>Required</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Key or function to uniquely identify each row. Can be a property key or a function that
                returns a unique string.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>keyof TData | ((data: TData, index: number) =&gt; string)</code>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Layout Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>headerMode</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Controls the header display mode. 'single' shows only column headers, 'double' shows both
                headers and filters.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>'single' | 'double'</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: 'double'</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>rowHeight</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>Height of each table row in pixels.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>number</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: 28</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>headerHeight</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>Height of the table header in pixels.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>number</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: 32</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>filterHeight</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Height of the filter row in pixels (only applies when headerMode is 'double').
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>number</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: 28</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>footerHeight</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>Height of the table footer in pixels.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>number</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: 32</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Feature Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>useFooter</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>Whether to display the table footer.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>hideHeader</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Whether to hide the table header completely.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>isLoading</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Shows a loading indicator overlay when true.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>isResetFilter</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Resets all active filters when changed to true.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
            </div>
          </div>
        </section>

        {/* Styling Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Styling Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>classNameOuterTable</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Additional CSS classes to apply to the outer table container.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>string</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>classNameCell</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Function that returns CSS classes for individual cells based on data, row index, and column
                index.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>
                  (data: TData, rowIndex: number, columnIndex: number) =&gt; string
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Server Integration Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Server Integration Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>useServerFilter</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Configuration object to enable server-side filtering for different filter types.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`{
  sort?: boolean;
  search?: boolean;
  selection?: boolean;
  advance?: boolean;
}`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>useSessionFilter</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Enables session storage for filter persistence across page reloads.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`{ tableKey: string }`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Event Handler Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Event Handler Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onClickRow</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when a row is clicked. Provides the row data, row index, and column index.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>
                  (item: TData, rowIndex: number, columnIndex: number) =&gt; void
                </code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onDoubleClickRow</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>Called when a row is double-clicked.</p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>
                  (item: TData, rowIndex: number, columnIndex: number) =&gt; void
                </code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onRightClickRow</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when a row is right-clicked. Provides the row data and mouse position.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>
                  (item: TData, position: {`{ x: number; y: number }`}) =&gt; void
                </code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onChangeCheckboxRowSelection</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when row selection changes. Provides selected rows, deselected rows, and select all
                status.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>
                  (selectedRows: (string | number)[], deselectedRows: (string | number)[], isSelectAll:
                  boolean) =&gt; void
                </code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onChangeFilter</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Object containing filter change handlers for different filter types.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>{`{
  sort?: (key: keyof TData, sortBy: TSortOrder) => void;
  search?: (data: Record<keyof TData, string>) => void;
  selection?: (data: Record<keyof TData, string[]>) => void;
  advance?: (data: Record<keyof TData, { config_name: TFilterAdvanceConfig; value: string }>) => void;
}`}</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onScrollTouchBottom</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when the user scrolls to the bottom of the table. Useful for infinite scrolling.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>() =&gt; void</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onScroll</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when the table is scrolled. Provides scroll position.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>(scrollTop: number, scrollLeft: number) =&gt; void</code>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Render Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Custom Render Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>renderExpandedRow</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Function to render custom content for expanded rows.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>(item: TData) =&gt; React.ReactNode</code>
              </div>
            </div>

            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>onRowExpand</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Called when a row is expanded or collapsed.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>(item: TData) =&gt; void</code>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>💡 Pro Tip</h3>
        <p className='text-sm text-muted-foreground'>
          Most props are optional with sensible defaults. Start with the core props (headers, data, rowKey)
          and gradually add features as needed. The component is designed to work well out of the box!
        </p>
      </div>
    </div>
  );
};

export default PropsPage;
