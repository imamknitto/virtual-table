const PropsPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Props</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Complete reference for all KnittoTable component props and their configurations.
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

        {/* Header Configuration Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Header Configuration Props</h2>
          <p className='text-muted-foreground mt-2'>
            Properties available in the IHeader interface for configuring individual columns.
          </p>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>enableRowSpan</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Enables automatic rowspan merging for consecutive duplicate values in this column.
                Only works with useRegularTable=true. Data must be pre-sorted by this column for proper merging.
              </p>
              <div className='bg-muted rounded p-3 mb-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
              <div className='bg-yellow-50 border border-yellow-200 rounded p-3 text-xs'>
                <p className='font-semibold text-yellow-900 mb-1'>⚠️ Requirements:</p>
                <ul className='text-yellow-800 space-y-1'>
                  <li>• Must use <code className='bg-yellow-100 px-1 rounded'>useRegularTable=&#123;true&#125;</code></li>
                  <li>• Data must be pre-sorted by this column</li>
                  <li>• Recommended to disable sort filter: <code className='bg-yellow-100 px-1 rounded'>hideFilter: &#123; sort: true &#125;</code></li>
                </ul>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded p-3 text-xs mt-3'>
                <p className='font-semibold text-blue-900 mb-1'>💡 Example:</p>
                <code className='text-xs text-blue-800'>
                  {`{ key: 'category', caption: 'Category', enableRowSpan: true, hideFilter: { sort: true } }`}
                </code>
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

        {/* Performance & Virtualization Props */}
        <section>
          <h2 className='text-2xl font-semibold tracking-tight'>Performance & Virtualization Props</h2>
          <div className='mt-4 space-y-4'>
            <div className='border rounded-lg p-4 border-green-200 bg-green-50/50'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>enableColumnVirtualization</h3>
                <span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded'>Default: true</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Enables column virtualization to render only visible columns, improving performance with many
                columns. This is the default behavior.
              </p>
              <div className='bg-muted rounded p-3 mb-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: true</span>
              </div>
              <div className='bg-yellow-50 border border-yellow-200 rounded p-3 text-xs'>
                <p className='font-semibold text-yellow-900 mb-1'>⚠️ Important:</p>
                <p className='text-yellow-800'>
                  Must be set to <code className='bg-yellow-100 px-1 rounded'>false</code> to use dynamic row
                  height. Column virtualization and dynamic row height cannot be used together.
                </p>
              </div>
            </div>

            <div className='border rounded-lg p-4 border-blue-200 bg-blue-50/50'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>useDynamicRowHeight</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Enables dynamic row heights where rows automatically adjust their height based on content.
                Perfect for displaying multi-line text or complex cell content.
              </p>
              <div className='bg-muted rounded p-3 mb-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
              <div className='bg-yellow-50 border border-yellow-200 rounded p-3 text-xs'>
                <p className='font-semibold text-yellow-900 mb-1'>⚠️ Requirement:</p>
                <p className='text-yellow-800 mb-2'>
                  Requires <code className='bg-yellow-100 px-1 rounded'>enableColumnVirtualization=&#123;false&#125;</code>{' '}
                  to function properly.
                </p>
                <p className='text-yellow-800'>
                  <strong>Best for:</strong> Tables with fewer than 15 columns and variable content heights.
                </p>
              </div>
            </div>

            <div className='border rounded-lg p-4 border-purple-200 bg-purple-50/50'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='font-mono text-sm font-semibold'>useRegularTable</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Uses native HTML table elements (&lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;td&gt;) instead of virtualized divs.
                Provides better accessibility and semantic HTML structure. Required for row grouping/rowspan functionality.
              </p>
              <div className='bg-muted rounded p-3 mb-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: false</span>
              </div>
              <div className='bg-blue-50 border border-blue-200 rounded p-3 text-xs'>
                <p className='font-semibold text-blue-900 mb-1'>💡 Use Cases:</p>
                <ul className='text-blue-800 space-y-1'>
                  <li>• Row grouping with rowspan functionality</li>
                  <li>• Better accessibility and screen reader support</li>
                  <li>• Small datasets where virtualization isn't needed</li>
                  <li>• Standard table semantics for better SEO</li>
                </ul>
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
                <h3 className='font-mono text-sm font-semibold'>useAutoSizer</h3>
                <span className='text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded'>Optional</span>
              </div>
              <p className='text-sm text-muted-foreground mb-2'>
                Automatically adjusts table size to fit its container. When enabled, the table will
                dynamically resize based on parent container dimensions.
              </p>
              <div className='bg-muted rounded p-3'>
                <code className='text-xs'>boolean</code>
                <span className='text-xs text-muted-foreground ml-2'>Default: true</span>
              </div>
            </div>

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
        <h3 className='font-semibold text-lg mb-2'>💡 Pro Tips</h3>
        <ul className='text-sm text-muted-foreground space-y-2'>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              Most props are optional with sensible defaults. Start with the core props (headers, data,
              rowKey) and gradually add features as needed.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              <strong>Column virtualization is enabled by default</strong> for optimal performance. Only
              disable it if you need dynamic row heights.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              Use <code className='bg-muted px-1 rounded text-xs'>enableColumnVirtualization=&#123;false&#125;</code>{' '}
              with <code className='bg-muted px-1 rounded text-xs'>useDynamicRowHeight=&#123;true&#125;</code>{' '}
              for tables with variable content heights and fewer columns.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              Enable <code className='bg-muted px-1 rounded text-xs'>useRegularTable=&#123;true&#125;</code>{' '}
              for row grouping/rowspan functionality, better accessibility, and semantic HTML structure.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              Use <code className='bg-muted px-1 rounded text-xs'>enableRowSpan=&#123;true&#125;</code>{' '}
              in header configuration for automatic cell merging of consecutive duplicate values.
            </span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-primary mt-0.5'>•</span>
            <span>
              For best performance with many columns (15+), keep column virtualization enabled and use
              fixed row heights.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropsPage;
