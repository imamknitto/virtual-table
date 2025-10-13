import{j as e}from"./index-B2iC2mV1.js";import{r,L as c}from"./router-BDK15HzG.js";import{V as u}from"./virtual-table-DBXnPqra.js";import{f as s}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const x=`// Basic Footer with Calculations
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
/>`,p=`// Advanced Footer with Freeze Columns
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
/>`,f=`// Summary Footer Example
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
/>`,b=()=>Array.from({length:50},(t,o)=>({id:o+1,product:s.commerce.productName(),category:s.commerce.department(),quantity:s.number.int({min:1,max:100}),unitPrice:s.number.float({min:10,max:1e3,fractionDigits:2}),total:0,discount:s.number.float({min:0,max:20,fractionDigits:1}),finalAmount:0,status:s.helpers.arrayElement(["Active","Inactive","Pending"]),region:s.location.country(),salesRep:s.person.fullName()})).map(t=>({...t,total:t.quantity*t.unitPrice,finalAmount:t.quantity*t.unitPrice*(1-t.discount/100)})),v=(t,o,i)=>[{key:"id",caption:"ID",width:100},{key:"product",caption:"Product",width:200},{key:"category",caption:"Category",width:150},{key:"quantity",caption:"Quantity",width:100,renderFooter:()=>e.jsx(o,{columnKey:"quantity",data:t})},{key:"unitPrice",caption:"Unit Price",width:120,renderFooter:()=>e.jsx(i,{})},{key:"total",caption:"Total",width:120,renderFooter:()=>e.jsx(o,{columnKey:"total",data:t})},{key:"discount",caption:"Discount %",width:140,renderFooter:()=>e.jsx(o,{columnKey:"discount",data:t})},{key:"finalAmount",caption:"Final Amount",width:130,renderFooter:()=>e.jsx(o,{columnKey:"finalAmount",data:t})},{key:"status",caption:"Status",width:100,renderFooter:()=>e.jsx(o,{columnKey:"status",data:t})}],j=(t,o,i,n)=>[{key:"id",caption:"ID",width:100,freeze:"left"},{key:"product",caption:"Product",width:200,freeze:"left"},{key:"category",caption:"Category",width:150},{key:"quantity",caption:"Quantity",width:100,renderFooter:()=>e.jsx(o,{columnKey:"quantity",data:t})},{key:"unitPrice",caption:"Unit Price",width:120,renderFooter:()=>e.jsx(i,{})},{key:"total",caption:"Total",width:120,renderFooter:()=>e.jsx(o,{columnKey:"total",data:t})},{key:"discount",caption:"Discount %",width:140,renderFooter:()=>e.jsx(o,{columnKey:"discount",data:t})},{key:"finalAmount",caption:"Final Amount",width:130,renderFooter:()=>e.jsx(o,{columnKey:"finalAmount",data:t})},{key:"status",caption:"Status",width:100,renderFooter:()=>e.jsx(o,{columnKey:"status",data:t})},{key:"region",caption:"Region",width:120,freeze:"right"},{key:"salesRep",caption:"Sales Rep",width:150,freeze:"right",renderFooter:()=>e.jsx(n,{})}],w=(t,o,i,n,a)=>[{key:"id",caption:"ID",width:100,renderFooter:()=>e.jsx(n,{})},{key:"product",caption:"Product",width:200},{key:"category",caption:"Category",width:150},{key:"quantity",caption:"Quantity",width:100,renderFooter:()=>e.jsx(o,{columnKey:"quantity",data:t})},{key:"unitPrice",caption:"Unit Price",width:120,renderFooter:()=>e.jsx(i,{})},{key:"total",caption:"Total",width:120,renderFooter:()=>e.jsx(o,{columnKey:"total",data:t})},{key:"discount",caption:"Discount %",width:140,renderFooter:()=>e.jsx(o,{columnKey:"discount",data:t})},{key:"finalAmount",caption:"Final Amount",width:130,renderFooter:()=>e.jsx(o,{columnKey:"finalAmount",data:t})},{key:"status",caption:"Status",width:100,renderFooter:()=>e.jsx(o,{columnKey:"status",data:t})},{key:"region",caption:"Region",width:120},{key:"salesRep",caption:"Sales Rep",width:150,renderFooter:()=>e.jsx(a,{})}],F=({code:t,title:o})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:o})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:t})})]}),m=r.memo(F),d=r.memo(({columnKey:t,data:o})=>{const i=()=>{switch(t){case"quantity":return o.reduce((n,a)=>n+a.quantity,0).toLocaleString();case"total":return`$${o.reduce((n,a)=>n+a.total,0).toLocaleString(void 0,{minimumFractionDigits:2})}`;case"finalAmount":return`$${o.reduce((n,a)=>n+a.finalAmount,0).toLocaleString(void 0,{minimumFractionDigits:2})}`;case"discount":return`${(o.reduce((a,y)=>a+y.discount,0)/o.length).toFixed(1)}%`;case"status":return`${o.filter(a=>a.status==="Active").length}/${o.length} Active`;default:return""}};return e.jsx("div",{className:"flex items-center justify-center h-full bg-gray-50 dark:bg-gray-800 font-semibold text-gray-800 dark:text-gray-200",children:i()})});d.displayName="CalculationFooter";const l=r.memo(()=>e.jsx("div",{className:"flex items-center justify-center h-full bg-blue-50 dark:bg-blue-950",children:e.jsx("span",{className:"font-semibold text-blue-800 dark:text-blue-300",children:"TOTALS"})}));l.displayName="TotalsFooter";const g=r.memo(()=>e.jsx("div",{className:"flex items-center justify-center h-full bg-green-50 dark:bg-green-950",children:e.jsx("span",{className:"font-medium text-green-700 dark:text-green-300",children:"SUMMARY"})}));g.displayName="SummaryFooter";const h=r.memo(()=>e.jsx("div",{className:"flex items-center justify-center h-full bg-orange-50 dark:bg-orange-950",children:e.jsx("span",{className:"font-medium text-orange-700 dark:text-orange-300",children:"ACTIONS"})}));h.displayName="ActionsFooter";const k=({data:t})=>{const[o,i]=r.useState(!1),n=r.useMemo(()=>j(t,d,l,h),[t]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Footer with Freeze Columns"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>i(!o),children:o?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96 border rounded-lg overflow-hidden",children:e.jsx(u,{classNameOuterTable:"border-0",data:t,filterHeight:32,footerHeight:40,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id",useFooter:!0})}),o&&e.jsx("div",{className:"mt-4",children:e.jsx(m,{code:p,title:"Advanced Footer with Freeze Columns"})})]})},N=r.memo(k),S=({data:t})=>{const[o,i]=r.useState(!1),n=r.useMemo(()=>v(t,d,l),[t]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Footer with Calculations"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>i(!o),children:o?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96 border rounded-lg overflow-hidden",children:e.jsx(u,{classNameOuterTable:"border-0",data:t,filterHeight:32,footerHeight:40,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id",useFooter:!0})}),o&&e.jsx("div",{className:"mt-4",children:e.jsx(m,{code:x,title:"Basic Footer Example"})})]})},C=r.memo(S),A=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"What's Included"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Footer Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Automatic calculations (sum, average, count)"}),e.jsx("li",{children:"• Custom footer components"}),e.jsx("li",{children:"• Freeze columns support"}),e.jsx("li",{children:"• Custom styling and colors"}),e.jsx("li",{children:"• Interactive content support"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Flexible renderFooter function"}),e.jsx("li",{children:"• Configurable footer height"}),e.jsx("li",{children:"• TypeScript support"}),e.jsx("li",{children:"• Responsive design"}),e.jsx("li",{children:"• Performance optimized"})]})]})]})]}),K=r.memo(A),T=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/custom-cell",children:"Custom Cell Rendering"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/expand-row",children:"Expand Rows"})]})]})}),H=r.memo(T),D=({data:t})=>{const[o,i]=r.useState(!1),n=r.useMemo(()=>w(t,d,l,g,h),[t]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Footer with Summary Information"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>i(!o),children:o?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96 border rounded-lg overflow-hidden",children:e.jsx(u,{classNameOuterTable:"border-0",data:t,filterHeight:32,footerHeight:40,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id",useFooter:!0})}),o&&e.jsx("div",{className:"mt-4",children:e.jsx(m,{code:f,title:"Summary Footer Example"})})]})},$=r.memo(D),P=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Usage Tips"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-900 dark:text-blue-300 mb-2",children:"Performance Optimization"}),e.jsx("p",{className:"text-sm text-blue-800 dark:text-blue-400",children:"Use memoized footer components to prevent unnecessary re-renders when data changes. Consider using useMemo for expensive calculations in footer components."})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-900 dark:text-green-300 mb-2",children:"Visual Design"}),e.jsx("p",{className:"text-sm text-green-800 dark:text-green-400",children:"Use different background colors and typography to distinguish footer cells from regular table cells. Consider adding borders or shadows to create visual separation."})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-900 dark:text-yellow-300 mb-2",children:"Data Accessibility"}),e.jsx("p",{className:"text-sm text-yellow-800 dark:text-yellow-400",children:"Ensure footer calculations are accessible to screen readers by using proper ARIA labels and semantic HTML elements."})]})]})]}),q=r.memo(P),R=()=>{const t=r.useMemo(()=>b(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Table Footer"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to add footers to your virtual table for displaying totals, summaries, and calculations. Footers are perfect for showing aggregated data and additional actions."})]}),e.jsx(C,{data:t}),e.jsx(N,{data:t}),e.jsx($,{data:t}),e.jsx(K,{}),e.jsx(H,{}),e.jsx(q,{})]})},V=r.memo(R);export{V as default};
//# sourceMappingURL=index-B26btpOx.js.map
