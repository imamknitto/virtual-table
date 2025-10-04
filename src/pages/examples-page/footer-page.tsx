import { useState } from 'react';
import { VirtualTable, type IHeader } from '../../components/virtual-table';
import { faker } from '@faker-js/faker';

// Define the data type
type SampleData = {
  id: number;
  product: string;
  category: string;
  quantity: number;
  unitPrice: number;
  total: number;
  discount: number;
  finalAmount: number;
  status: string;
  region: string;
  salesRep: string;
};

// Generate sample financial data
const generateSampleData = (): SampleData[] => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    product: faker.commerce.productName(),
    category: faker.commerce.department(),
    quantity: faker.number.int({ min: 1, max: 100 }),
    unitPrice: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
    total: 0, // Will be calculated
    discount: faker.number.float({ min: 0, max: 20, fractionDigits: 1 }),
    finalAmount: 0, // Will be calculated
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    region: faker.location.country(),
    salesRep: faker.person.fullName(),
  })).map((item) => ({
    ...item,
    total: item.quantity * item.unitPrice,
    finalAmount: item.quantity * item.unitPrice * (1 - item.discount / 100),
  }));
};

// Footer component for totals
const TotalsFooter = () => {
  return (
    <div className='flex items-center justify-center h-full bg-blue-50'>
      <span className='font-semibold text-blue-800'>TOTALS</span>
    </div>
  );
};

// Footer component for summaries
const SummaryFooter = () => {
  return (
    <div className='flex items-center justify-center h-full bg-green-50'>
      <span className='font-medium text-green-700'>SUMMARY</span>
    </div>
  );
};

// Footer component for actions
const ActionsFooter = () => {
  return (
    <div className='flex items-center justify-center h-full bg-orange-50'>
      <span className='font-medium text-orange-700'>ACTIONS</span>
    </div>
  );
};

// Footer component for calculations
const CalculationFooter = ({ data, columnKey }: { data: SampleData[]; columnKey: string }) => {
  const getCalculation = () => {
    switch (columnKey) {
      case 'quantity': {
        return data.reduce((sum: number, item: SampleData) => sum + item.quantity, 0).toLocaleString();
      }
      case 'total': {
        return `$${data
          .reduce((sum: number, item: SampleData) => sum + item.total, 0)
          .toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
      }
      case 'finalAmount': {
        return `$${data
          .reduce((sum: number, item: SampleData) => sum + item.finalAmount, 0)
          .toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
      }
      case 'discount': {
        const avgDiscount =
          data.reduce((sum: number, item: SampleData) => sum + item.discount, 0) / data.length;
        return `${avgDiscount.toFixed(1)}%`;
      }
      case 'status': {
        const activeCount = data.filter((item: SampleData) => item.status === 'Active').length;
        return `${activeCount}/${data.length} Active`;
      }
      default:
        return '';
    }
  };

  return (
    <div className='flex items-center justify-center h-full bg-gray-50 font-semibold text-gray-800'>
      {getCalculation()}
    </div>
  );
};

function FooterPage() {
  const [data] = useState<SampleData[]>(generateSampleData());
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showAdvancedCode, setShowAdvancedCode] = useState(false);
  const [showSummaryCode, setShowSummaryCode] = useState(false);

  // Basic footer example headers
  const basicHeaders: IHeader<SampleData>[] = [
    { key: 'id', caption: 'ID', width: 100 },
    { key: 'product', caption: 'Product', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'quantity',
      caption: 'Quantity',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='quantity' />,
    },
    { key: 'unitPrice', caption: 'Unit Price', width: 120, renderFooter: () => <TotalsFooter /> },
    {
      key: 'total',
      caption: 'Total',
      width: 120,
      renderFooter: () => <CalculationFooter data={data} columnKey='total' />,
    },
    {
      key: 'discount',
      caption: 'Discount %',
      width: 140,
      renderFooter: () => <CalculationFooter data={data} columnKey='discount' />,
    },
    {
      key: 'finalAmount',
      caption: 'Final Amount',
      width: 130,
      renderFooter: () => <CalculationFooter data={data} columnKey='finalAmount' />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='status' />,
    },
  ];

  // Advanced footer example with freeze columns
  const advancedHeaders: IHeader<SampleData>[] = [
    { key: 'id', caption: 'ID', width: 100, freeze: 'left' },
    { key: 'product', caption: 'Product', width: 200, freeze: 'left' },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'quantity',
      caption: 'Quantity',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='quantity' />,
    },
    { key: 'unitPrice', caption: 'Unit Price', width: 120, renderFooter: () => <TotalsFooter /> },
    {
      key: 'total',
      caption: 'Total',
      width: 120,
      renderFooter: () => <CalculationFooter data={data} columnKey='total' />,
    },
    {
      key: 'discount',
      caption: 'Discount %',
      width: 140,
      renderFooter: () => <CalculationFooter data={data} columnKey='discount' />,
    },
    {
      key: 'finalAmount',
      caption: 'Final Amount',
      width: 130,
      renderFooter: () => <CalculationFooter data={data} columnKey='finalAmount' />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='status' />,
    },
    { key: 'region', caption: 'Region', width: 120, freeze: 'right' },
    {
      key: 'salesRep',
      caption: 'Sales Rep',
      width: 150,
      freeze: 'right',
      renderFooter: () => <ActionsFooter />,
    },
  ];

  // Simple footer example with summary
  const summaryHeaders: IHeader<SampleData>[] = [
    { key: 'id', caption: 'ID', width: 100, renderFooter: () => <SummaryFooter /> },
    { key: 'product', caption: 'Product', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'quantity',
      caption: 'Quantity',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='quantity' />,
    },
    { key: 'unitPrice', caption: 'Unit Price', width: 120, renderFooter: () => <TotalsFooter /> },
    {
      key: 'total',
      caption: 'Total',
      width: 120,
      renderFooter: () => <CalculationFooter data={data} columnKey='total' />,
    },
    {
      key: 'discount',
      caption: 'Discount %',
      width: 140,
      renderFooter: () => <CalculationFooter data={data} columnKey='discount' />,
    },
    {
      key: 'finalAmount',
      caption: 'Final Amount',
      width: 130,
      renderFooter: () => <CalculationFooter data={data} columnKey='finalAmount' />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderFooter: () => <CalculationFooter data={data} columnKey='status' />,
    },
    { key: 'region', caption: 'Region', width: 120 },
    { key: 'salesRep', caption: 'Sales Rep', width: 150, renderFooter: () => <ActionsFooter /> },
  ];

  // Code examples for each preview
  const basicCodeExample = `// Basic Footer with Calculations
import { VirtualTable, type IHeader } from '@knitto/virtual-table';

// Footer component for calculations
const CalculationFooter = ({ data, columnKey }) => {
  const getCalculation = () => {
    switch (columnKey) {
      case 'quantity':
        return data.reduce((sum, item) => sum + item.quantity, 0).toLocaleString();
      case 'total':
        return \`$\${data.reduce((sum, item) => sum + item.total, 0).toLocaleString()}\`;
      case 'discount':
        const avgDiscount = data.reduce((sum, item) => sum + item.discount, 0) / data.length;
        return \`\${avgDiscount.toFixed(1)}%\`;
      case 'status':
        const activeCount = data.filter(item => item.status === 'Active').length;
        return \`\${activeCount}/\${data.length} Active\`;
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-50 font-semibold">
      {getCalculation()}
    </div>
  );
};

// Footer component for totals
const TotalsFooter = () => (
  <div className="flex items-center justify-center h-full bg-blue-50">
    <span className="font-semibold text-blue-800">TOTALS</span>
  </div>
);

// Basic footer headers
const headers: IHeader<SampleData>[] = [
  { key: 'id', caption: 'ID', width: 60 },
  { key: 'product', caption: 'Product', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  { key: 'quantity', caption: 'Quantity', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="quantity" /> },
  { key: 'unitPrice', caption: 'Unit Price', width: 120, 
    renderFooter: () => <TotalsFooter /> },
  { key: 'total', caption: 'Total', width: 120, 
    renderFooter: () => <CalculationFooter data={data} columnKey="total" /> },
  { key: 'discount', caption: 'Discount %', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="discount" /> },
  { key: 'finalAmount', caption: 'Final Amount', width: 130, 
    renderFooter: () => <CalculationFooter data={data} columnKey="finalAmount" /> },
  { key: 'status', caption: 'Status', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="status" /> },
];

// Virtual Table with Basic Footer
<VirtualTable
  headers={headers}
  data={data}
  rowKey="id"
  headerMode="double"
  useFooter={true}
  footerHeight={40}
  rowHeight={32}
  headerHeight={40}
  filterHeight={32}
/>`;

  const advancedCodeExample = `// Advanced Footer with Freeze Columns
import { VirtualTable, type IHeader } from '@knitto/virtual-table';

// Footer component for calculations
const CalculationFooter = ({ data, columnKey }) => {
  const getCalculation = () => {
    switch (columnKey) {
      case 'quantity':
        return data.reduce((sum, item) => sum + item.quantity, 0).toLocaleString();
      case 'total':
        return \`$\${data.reduce((sum, item) => sum + item.total, 0).toLocaleString()}\`;
      case 'discount':
        const avgDiscount = data.reduce((sum, item) => sum + item.discount, 0) / data.length;
        return \`\${avgDiscount.toFixed(1)}%\`;
      case 'status':
        const activeCount = data.filter(item => item.status === 'Active').length;
        return \`\${activeCount}/\${data.length} Active\`;
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-50 font-semibold">
      {getCalculation()}
    </div>
  );
};

// Footer component for totals
const TotalsFooter = () => (
  <div className="flex items-center justify-center h-full bg-blue-50">
    <span className="font-semibold text-blue-800">TOTALS</span>
  </div>
);

// Footer component for actions
const ActionsFooter = () => (
  <div className="flex items-center justify-center h-full bg-orange-50">
    <span className="font-medium text-orange-700">ACTIONS</span>
  </div>
);

// Advanced footer with freeze columns
const headers: IHeader<SampleData>[] = [
  { key: 'id', caption: 'ID', width: 60, freeze: 'left' },
  { key: 'product', caption: 'Product', width: 200, freeze: 'left' },
  { key: 'category', caption: 'Category', width: 150 },
  { key: 'quantity', caption: 'Quantity', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="quantity" /> },
  { key: 'unitPrice', caption: 'Unit Price', width: 120, 
    renderFooter: () => <TotalsFooter /> },
  { key: 'total', caption: 'Total', width: 120, 
    renderFooter: () => <CalculationFooter data={data} columnKey="total" /> },
  { key: 'discount', caption: 'Discount %', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="discount" /> },
  { key: 'finalAmount', caption: 'Final Amount', width: 130, 
    renderFooter: () => <CalculationFooter data={data} columnKey="finalAmount" /> },
  { key: 'status', caption: 'Status', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="status" /> },
  { key: 'region', caption: 'Region', width: 120, freeze: 'right' },
  { key: 'salesRep', caption: 'Sales Rep', width: 150, freeze: 'right', 
    renderFooter: () => <ActionsFooter /> },
];

// Virtual Table with Advanced Footer
<VirtualTable
  headers={headers}
  data={data}
  rowKey="id"
  headerMode="double"
  useFooter={true}
  footerHeight={40}
  rowHeight={32}
  headerHeight={40}
  filterHeight={32}
/>`;

  const summaryCodeExample = `// Summary Footer Example
import { VirtualTable, type IHeader } from '@knitto/virtual-table';

// Footer component for calculations
const CalculationFooter = ({ data, columnKey }) => {
  const getCalculation = () => {
    switch (columnKey) {
      case 'quantity':
        return data.reduce((sum, item) => sum + item.quantity, 0).toLocaleString();
      case 'total':
        return \`$\${data.reduce((sum, item) => sum + item.total, 0).toLocaleString()}\`;
      case 'discount':
        const avgDiscount = data.reduce((sum, item) => sum + item.discount, 0) / data.length;
        return \`\${avgDiscount.toFixed(1)}%\`;
      case 'status':
        const activeCount = data.filter(item => item.status === 'Active').length;
        return \`\${activeCount}/\${data.length} Active\`;
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-50 font-semibold">
      {getCalculation()}
    </div>
  );
};

// Footer component for summaries
const SummaryFooter = () => (
  <div className="flex items-center justify-center h-full bg-green-50">
    <span className="font-medium text-green-700">SUMMARY</span>
  </div>
);

// Footer component for actions
const ActionsFooter = () => (
  <div className="flex items-center justify-center h-full bg-orange-50">
    <span className="font-medium text-orange-700">ACTIONS</span>
  </div>
);

// Summary footer headers
const headers: IHeader<SampleData>[] = [
  { key: 'id', caption: 'ID', width: 60, 
    renderFooter: () => <SummaryFooter /> },
  { key: 'product', caption: 'Product', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  { key: 'quantity', caption: 'Quantity', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="quantity" /> },
  { key: 'unitPrice', caption: 'Unit Price', width: 120, 
    renderFooter: () => <TotalsFooter /> },
  { key: 'total', caption: 'Total', width: 120, 
    renderFooter: () => <CalculationFooter data={data} columnKey="total" /> },
  { key: 'discount', caption: 'Discount %', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="discount" /> },
  { key: 'finalAmount', caption: 'Final Amount', width: 130, 
    renderFooter: () => <CalculationFooter data={data} columnKey="finalAmount" /> },
  { key: 'status', caption: 'Status', width: 100, 
    renderFooter: () => <CalculationFooter data={data} columnKey="status" /> },
  { key: 'region', caption: 'Region', width: 120 },
  { key: 'salesRep', caption: 'Sales Rep', width: 150, 
    renderFooter: () => <ActionsFooter /> },
];

// Virtual Table with Summary Footer
<VirtualTable
  headers={headers}
  data={data}
  rowKey="id"
  headerMode="double"
  useFooter={true}
  footerHeight={40}
  rowHeight={32}
  headerHeight={40}
  filterHeight={32}
/>`;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Table Footer</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to add footers to your virtual table for displaying totals, summaries, and calculations.
          Footers are perfect for showing aggregated data and additional actions.
        </p>
      </div>

      {/* Basic Footer Example */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Basic Footer with Calculations</h2>
          <button
            onClick={() => setShowBasicCode(!showBasicCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showBasicCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='h-96 border rounded-lg overflow-hidden'>
          <VirtualTable
            headers={basicHeaders}
            data={data}
            rowKey='id'
            headerMode='double'
            useFooter={true}
            footerHeight={40}
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            classNameOuterTable='border-0'
          />
        </div>

        {/* Basic Code Section */}
        {showBasicCode && (
          <div className='mt-4'>
            <h3 className='text-lg font-semibold tracking-tight mb-4'>Code</h3>
            <div className='border rounded-lg overflow-hidden'>
              <div className='bg-muted px-4 py-2 border-b'>
                <span className='text-sm font-medium'>Basic Footer Example</span>
              </div>
              <pre className='p-4 overflow-x-auto bg-background'>
                <code className='text-sm'>{basicCodeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Advanced Footer with Freeze Columns */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Footer with Freeze Columns</h2>
          <button
            onClick={() => setShowAdvancedCode(!showAdvancedCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showAdvancedCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='h-96 border rounded-lg overflow-hidden'>
          <VirtualTable
            headers={advancedHeaders}
            data={data}
            rowKey='id'
            headerMode='double'
            useFooter={true}
            footerHeight={40}
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            classNameOuterTable='border-0'
          />
        </div>

        {/* Advanced Code Section */}
        {showAdvancedCode && (
          <div className='mt-4'>
            <h3 className='text-lg font-semibold tracking-tight mb-4'>Code</h3>
            <div className='border rounded-lg overflow-hidden'>
              <div className='bg-muted px-4 py-2 border-b'>
                <span className='text-sm font-medium'>Advanced Footer with Freeze Columns</span>
              </div>
              <pre className='p-4 overflow-x-auto bg-background'>
                <code className='text-sm'>{advancedCodeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Summary Footer Example */}
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-semibold tracking-tight'>Footer with Summary Information</h2>
          <button
            onClick={() => setShowSummaryCode(!showSummaryCode)}
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          >
            {showSummaryCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='h-96 border rounded-lg overflow-hidden'>
          <VirtualTable
            headers={summaryHeaders}
            data={data}
            rowKey='id'
            headerMode='double'
            useFooter={true}
            footerHeight={40}
            rowHeight={32}
            headerHeight={40}
            filterHeight={32}
            classNameOuterTable='border-0'
          />
        </div>

        {/* Summary Code Section */}
        {showSummaryCode && (
          <div className='mt-4'>
            <h3 className='text-lg font-semibold tracking-tight mb-4'>Code</h3>
            <div className='border rounded-lg overflow-hidden'>
              <div className='bg-muted px-4 py-2 border-b'>
                <span className='text-sm font-medium'>Summary Footer Example</span>
              </div>
              <pre className='p-4 overflow-x-auto bg-background'>
                <code className='text-sm'>{summaryCodeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>What's Included</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>✅ Footer Features</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Automatic calculations (sum, average, count)</li>
              <li>• Custom footer components</li>
              <li>• Freeze columns support</li>
              <li>• Custom styling and colors</li>
              <li>• Interactive content support</li>
            </ul>
          </div>
          <div className='border rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>🎨 Customization</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Flexible renderFooter function</li>
              <li>• Configurable footer height</li>
              <li>• TypeScript support</li>
              <li>• Responsive design</li>
              <li>• Performance optimized</li>
            </ul>
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
              href='/docs/examples/custom-cell'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Custom Cell Rendering
            </a>
            <a
              href='/docs/examples/freeze-column'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            >
              Freeze Columns
            </a>
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
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section>
        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Usage Tips</h2>
        <div className='space-y-4'>
          <div className='p-4 bg-blue-50 border border-blue-200 rounded-lg'>
            <h4 className='font-semibold text-blue-900 mb-2'>Performance Optimization</h4>
            <p className='text-sm text-blue-800'>
              Use memoized footer components to prevent unnecessary re-renders when data changes. Consider
              using useMemo for expensive calculations in footer components.
            </p>
          </div>
          <div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
            <h4 className='font-semibold text-green-900 mb-2'>Visual Design</h4>
            <p className='text-sm text-green-800'>
              Use different background colors and typography to distinguish footer cells from regular table
              cells. Consider adding borders or shadows to create visual separation.
            </p>
          </div>
          <div className='p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
            <h4 className='font-semibold text-yellow-900 mb-2'>Data Accessibility</h4>
            <p className='text-sm text-yellow-800'>
              Ensure footer calculations are accessible to screen readers by using proper ARIA labels and
              semantic HTML elements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterPage;
