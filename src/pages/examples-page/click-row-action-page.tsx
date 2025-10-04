import { useState, useRef } from 'react';
import { VirtualTable, type IHeader, useClickOutside } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Sample data type
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
  lastUpdated: string;
  description: string;
};

// Generate sample data using Faker.js
const generateSampleData = (): Product[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.number.int({ min: 10, max: 1000 }),
    stock: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'discontinued']) as Product['status'],
    lastUpdated: faker.date.recent().toISOString(),
    description: faker.commerce.productDescription(),
  }));
};

const ClickRowActionPage = () => {
  const [data] = useState(generateSampleData());
  const [showCode, setShowCode] = useState(false);

  // State for tracking interactions
  const [selectedRow, setSelectedRow] = useState<Product | null>(null);
  const [doubleClickedRow, setDoubleClickedRow] = useState<Product | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [contextMenuRow, setContextMenuRow] = useState<Product | null>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [interactionLog, setInteractionLog] = useState<string[]>([]);

  // Ref for context menu to handle outside clicks
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const addToLog = (message: string) => {
    setInteractionLog((prev) => [`${new Date().toLocaleTimeString()}: ${message}`, ...prev.slice(0, 4)]);
  };

  // Define table headers
  const headers: IHeader<Product>[] = [
    { key: 'name', caption: 'Product Name', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    { key: 'price', caption: 'Price', width: 100 },
    { key: 'stock', caption: 'Stock', width: 80 },
    {
      key: 'status',
      caption: 'Status',
      width: 170,
      renderCell: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'active'
              ? 'bg-green-100 text-green-800'
              : item.status === 'inactive'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {item.status}
        </span>
      ),
    },
    { key: 'lastUpdated', caption: 'Last Updated', width: 120 },
  ];

  // Click handlers
  const handleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    setSelectedRow(item);
    addToLog(`Clicked on "${item.name}" (Row ${rowIndex}, Column ${columnIndex})`);
  };

  const handleDoubleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    setDoubleClickedRow(item);
    addToLog(`Double-clicked on "${item.name}" (Row ${rowIndex}, Column ${columnIndex})`);
  };

  const handleRightClickRow = (item: Product, position: { x: number; y: number }) => {
    setSelectedRow(item);
    setContextMenuRow(item);
    setContextMenuPosition(position);
    setShowContextMenu(true);
    addToLog(`Right-clicked on "${item.name}" at position (${position.x}, ${position.y})`);
  };

  // Context menu actions
  const handleContextMenuAction = (action: string) => {
    if (contextMenuRow) {
      addToLog(`${action} on "${contextMenuRow.name}"`);
    }
    setShowContextMenu(false);
  };

  // Close context menu when clicking outside
  const handleClickOutside = () => {
    setShowContextMenu(false);
  };

  // Use the click outside hook to close context menu
  useClickOutside([contextMenuRef], handleClickOutside);

  const codeExample = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
};

const ProductTable = () => {
  const [data, setData] = useState<Product[]>([
    // Your product data here
  ]);

  // Click handlers
  const handleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    console.log('Row clicked:', item);
    console.log('Position:', rowIndex, columnIndex);
    // Handle single click - e.g., select row, show details
  };

  const handleDoubleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    console.log('Row double-clicked:', item);
    // Handle double click - e.g., open edit modal, navigate to detail page
    openEditModal(item);
  };

  const handleRightClickRow = (item: Product, position: { x: number; y: number }) => {
    console.log('Row right-clicked:', item);
    console.log('Mouse position:', position);
    // Handle right click - e.g., show context menu
    showContextMenu(item, position);
  };

  const headers: IHeader<Product>[] = [
    { key: 'name', caption: 'Product Name', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    { key: 'price', caption: 'Price', width: 100 },
    { key: 'stock', caption: 'Stock', width: 80 },
    { key: 'status', caption: 'Status', width: 120 },
  ];

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onClickRow={handleClickRow}
      onDoubleClickRow={handleDoubleClickRow}
      onRightClickRow={handleRightClickRow}
    />
  );
};`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Click Row Actions</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to handle row interactions in the Virtual Table. Support for single click, double click,
          and right-click events with full context information.
        </p>
      </div>

      {/* Preview Section */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
          <button
            onClick={() => setShowCode(!showCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Table */}
          <div className='lg:col-span-2'>
            <div className='h-96'>
              <VirtualTable
                headers={headers}
                data={data}
                rowKey='id'
                headerMode='double'
                rowHeight={32}
                headerHeight={40}
                filterHeight={32}
                onClickRow={handleClickRow}
                onDoubleClickRow={handleDoubleClickRow}
                onRightClickRow={handleRightClickRow}
                classNameCell={(item) => {
                  if (selectedRow?.id === item.id) return 'bg-blue-50 border-blue-200';
                  if (doubleClickedRow?.id === item.id) return 'bg-green-50 border-green-200';
                  return '';
                }}
              />
            </div>

            <div className='mt-4 text-sm text-muted-foreground'>
              <p>
                <strong>Try these interactions:</strong>
              </p>
              <ul className='list-disc list-inside space-y-1 mt-2'>
                <li>
                  <strong>Single Click:</strong> Select a row (highlighted in blue)
                </li>
                <li>
                  <strong>Double Click:</strong> Edit mode (highlighted in green)
                </li>
                <li>
                  <strong>Right Click:</strong> Show context menu
                </li>
              </ul>
            </div>
          </div>

          {/* Interaction Log */}
          <div className='space-y-4'>
            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Selected Row</h3>
              {selectedRow ? (
                <div className='text-sm space-y-1'>
                  <p>
                    <strong>Name:</strong> {selectedRow.name}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedRow.category}
                  </p>
                  <p>
                    <strong>Price:</strong> ${selectedRow.price}
                  </p>
                  <p>
                    <strong>Stock:</strong> {selectedRow.stock}
                  </p>
                </div>
              ) : (
                <p className='text-muted-foreground text-sm'>No row selected</p>
              )}
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Double-Clicked Row</h3>
              {doubleClickedRow ? (
                <div className='text-sm space-y-1'>
                  <p>
                    <strong>Name:</strong> {doubleClickedRow.name}
                  </p>
                  <p>
                    <strong>Status:</strong> {doubleClickedRow.status}
                  </p>
                  <p>
                    <strong>Description:</strong> {doubleClickedRow.description.slice(0, 50)}...
                  </p>
                </div>
              ) : (
                <p className='text-muted-foreground text-sm'>No row double-clicked</p>
              )}
            </div>

            <div className='border rounded-lg p-4'>
              <h3 className='font-semibold mb-3'>Interaction Log</h3>
              <div className='text-sm space-y-1 max-h-32 overflow-y-auto'>
                {interactionLog.length > 0 ? (
                  interactionLog.map((log, index) => (
                    <p key={index} className='text-xs bg-muted px-2 py-1 rounded'>
                      {log}
                    </p>
                  ))
                ) : (
                  <p className='text-muted-foreground'>No interactions yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Menu */}
      {showContextMenu && contextMenuPosition && (
        <div
          ref={contextMenuRef}
          className='fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48'
          style={{
            left: contextMenuPosition.x,
            top: contextMenuPosition.y,
          }}
        >
          <button
            className='w-full px-4 py-2 text-left hover:bg-gray-100 text-sm'
            onClick={() => handleContextMenuAction('Edit')}
          >
            ✏️ Edit Product
          </button>
          <button
            className='w-full px-4 py-2 text-left hover:bg-gray-100 text-sm'
            onClick={() => handleContextMenuAction('Duplicate')}
          >
            📋 Duplicate
          </button>
          <button
            className='w-full px-4 py-2 text-left hover:bg-gray-100 text-sm'
            onClick={() => handleContextMenuAction('View Details')}
          >
            👁️ View Details
          </button>
          <hr className='my-1' />
          <button
            className='w-full px-4 py-2 text-left hover:bg-red-50 text-red-600 text-sm'
            onClick={() => handleContextMenuAction('Delete')}
          >
            🗑️ Delete
          </button>
        </div>
      )}

      {/* Code Section */}
      {showCode && (
        <section>
          <h2 className='text-2xl font-semibold tracking-tight mb-4'>Code</h2>
          <div className='border rounded-lg overflow-hidden'>
            <div className='bg-muted px-4 py-2 border-b'>
              <span className='text-sm font-medium'>Click Row Actions Example</span>
            </div>
            <pre className='p-4 overflow-x-auto bg-background'>
              <code className='text-sm'>{codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🖱️ Single Click</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Row selection and highlighting</li>
              <li>• Access to row data and position</li>
              <li>• Perfect for detail views</li>
              <li>• Conditional styling support</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🖱️🖱️ Double Click</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Quick edit mode activation</li>
              <li>• Modal or page navigation</li>
              <li>• Bypass expand button clicks</li>
              <li>• Full context information</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🖱️ Right Click</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Context menu positioning</li>
              <li>• Mouse coordinates provided</li>
              <li>• Action menus and shortcuts</li>
              <li>• Flexible menu implementations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Tips */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>💡 Implementation Tips</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Here are some best practices for implementing click row actions:
          </p>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <h4 className='font-medium mb-2'>Event Handling</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>onClickRow</code> for selection
                </li>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>onDoubleClickRow</code> for quick actions
                </li>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>onRightClickRow</code> for context menus
                </li>
                <li>• All handlers receive row data and position info</li>
              </ul>
            </div>
            <div>
              <h4 className='font-medium mb-2'>Visual Feedback</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>
                  • Use <code className='bg-muted px-1 rounded'>classNameCell</code> for highlighting
                </li>
                <li>• Apply different styles for different states</li>
                <li>• Consider accessibility with color contrast</li>
                <li>• Provide clear visual cues for interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <div className='rounded-lg border bg-muted/50 p-6'>
          <h3 className='font-semibold text-lg mb-2'>🚀 Next Steps</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Ready to explore more advanced features? Check out these examples:
          </p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='/docs/examples/checkbox-selection'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Checkbox Selection
            </a>
            <a
              href='/docs/examples/expand-row'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Expand Rows
            </a>
            <a
              href='/docs/examples/custom-cell'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Custom Cells
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClickRowActionPage;
