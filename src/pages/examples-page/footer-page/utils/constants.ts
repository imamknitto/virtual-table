export const BASIC_CODE_EXAMPLE = `// Basic Footer with Calculations
import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
<KnittoTable
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

export const ADVANCED_CODE_EXAMPLE = `// Advanced Footer with Freeze Columns
import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
<KnittoTable
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

export const SUMMARY_CODE_EXAMPLE = `// Summary Footer Example
import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
<KnittoTable
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

