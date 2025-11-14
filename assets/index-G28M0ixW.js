import{r as o,j as e,L as s}from"./react-vendor-D4DhKJk1.js";import{K as h}from"./knitto-table-BdyQsNAM.js";import{x as p}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-mnZ17s7N.js";import"./knitto-hooks-QoacNkhm.js";import"./utils-B-dksMZM.js";import"./knitto-icons-DxxDW9og.js";const x=({code:i,title:t,language:n="tsx"})=>e.jsxs("div",{className:"rounded-lg border bg-muted/50",children:[e.jsxs("div",{className:"flex items-center justify-between border-b px-4 py-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:t}),e.jsx("span",{className:"text-xs text-muted-foreground",children:n})]}),e.jsx("pre",{className:"overflow-x-auto p-4",children:e.jsx("code",{className:"text-sm",children:i})})]}),y=o.memo(x),b=()=>{const i=[{feature:"Default Behavior",virtualized:"Default mode (enableColumnVirtualization=true)",nonVirtualized:"Must be explicitly disabled (enableColumnVirtualization=false)"},{feature:"Performance",virtualized:"Excellent with many columns",nonVirtualized:"Good with few columns, may lag with many"},{feature:"Memory Usage",virtualized:"Lower - only renders visible columns",nonVirtualized:"Higher - renders all columns"},{feature:"Dynamic Row Height",virtualized:"Not supported",nonVirtualized:"Supported"},{feature:"Group Headers",virtualized:"Supported",nonVirtualized:"Supported"},{feature:"Freeze Columns",virtualized:"Supported",nonVirtualized:"Supported"},{feature:"Scroll Performance",virtualized:"Smooth with many columns",nonVirtualized:"Smooth with few columns"},{feature:"Layout Complexity",virtualized:"More complex calculations",nonVirtualized:"Simpler calculations"}];return e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-6",children:"Comparison"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-border rounded-lg",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-muted/50",children:[e.jsx("th",{className:"border border-border px-4 py-3 text-left font-semibold",children:"Feature"}),e.jsx("th",{className:"border border-border px-4 py-3 text-left font-semibold text-green-600",children:"Column Virtualized"}),e.jsx("th",{className:"border border-border px-4 py-3 text-left font-semibold text-blue-600",children:"Non-Virtualized"})]})}),e.jsx("tbody",{children:i.map((t,n)=>e.jsxs("tr",{className:n%2===0?"bg-background":"bg-muted/20",children:[e.jsx("td",{className:"border border-border px-4 py-3 font-medium",children:t.feature}),e.jsx("td",{className:"border border-border px-4 py-3",children:t.virtualized}),e.jsx("td",{className:"border border-border px-4 py-3",children:t.nonVirtualized})]},n))})]})})]})},f=o.memo(b),w=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/dynamic-row-height",children:"Dynamic Row Height"}),e.jsx(s,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/large-dataset",children:"Large Dataset"})]})]})}),g=o.memo(w),j=`import { KnittoTable } from '@/components/virtual-table';

const headers = [
  { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
  { key: 'name', caption: 'Name', width: 180, freeze: 'left' },
  { key: 'email', caption: 'Email', width: 200 },
  { key: 'phone', caption: 'Phone', width: 150 },
  { key: 'company', caption: 'Company', width: 200 },
  { key: 'jobTitle', caption: 'Job Title', width: 180 },
  { key: 'department', caption: 'Department', width: 150 },
  { key: 'city', caption: 'City', width: 120 },
  { key: 'country', caption: 'Country', width: 120 },
  { key: 'joinDate', caption: 'Join Date', width: 120 },
  { key: 'experience', caption: 'Experience', width: 100 },
  { key: 'salary', caption: 'Salary', width: 120, freeze: 'right' },
  { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
];

function MyTable() {
  return (
    <KnittoTable
      data={data}
      headers={headers}
      rowKey="id"
      enableColumnVirtualization={true} // Enable column virtualization (default)
    />
  );
}`,v=`import { KnittoTable } from '@/components/virtual-table';

const headers = [
  { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
  { key: 'name', caption: 'Name', width: 180, freeze: 'left' },
  { key: 'email', caption: 'Email', width: 200 },
  { key: 'phone', caption: 'Phone', width: 150 },
  { key: 'company', caption: 'Company', width: 200 },
  { key: 'jobTitle', caption: 'Job Title', width: 180 },
  { key: 'department', caption: 'Department', width: 150 },
  { key: 'city', caption: 'City', width: 120 },
  { key: 'country', caption: 'Country', width: 120 },
  { key: 'joinDate', caption: 'Join Date', width: 120 },
  { key: 'experience', caption: 'Experience', width: 100 },
  { key: 'salary', caption: 'Salary', width: 120, freeze: 'right' },
  { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
];

function MyTable() {
  return (
    <KnittoTable
      data={data}
      headers={headers}
      rowKey="id"
      enableColumnVirtualization={false} // Disable column virtualization
    />
  );
}`,z=()=>[{key:"id",caption:"ID",width:80,freeze:"left"},{key:"name",caption:"Name",width:180,freeze:"left"},{key:"email",caption:"Email",width:200},{key:"phone",caption:"Phone",width:150},{key:"company",caption:"Company",width:200},{key:"jobTitle",caption:"Job Title",width:180},{key:"department",caption:"Department",width:150},{key:"city",caption:"City",width:120},{key:"country",caption:"Country",width:120},{key:"joinDate",caption:"Join Date",width:120},{key:"experience",caption:"Experience",width:100},{key:"skills",caption:"Skills",width:150},{key:"username",caption:"Username",width:120},{key:"salary",caption:"Salary",width:120,freeze:"right"},{key:"status",caption:"Status",width:100,freeze:"right"}],k=()=>[{key:"id",caption:"ID",width:80,freeze:"left"},{key:"name",caption:"Name",width:180,freeze:"left"},{key:"group-header-personal",caption:"Personal Information",children:[{key:"email",caption:"Email",width:200},{key:"phone",caption:"Phone",width:150},{key:"username",caption:"Username",width:120}]},{key:"group-header-professional",caption:"Professional Information",children:[{key:"company",caption:"Company",width:200},{key:"jobTitle",caption:"Job Title",width:180},{key:"department",caption:"Department",width:150},{key:"joinDate",caption:"Join Date",width:120},{key:"experience",caption:"Experience",width:100}]},{key:"group-header-location",caption:"Location",children:[{key:"city",caption:"City",width:120},{key:"country",caption:"Country",width:120}]},{key:"salary",caption:"Salary",width:120,freeze:"right"},{key:"status",caption:"Status",width:100,freeze:"right"}],N=({data:i})=>{const[t,n]=o.useState(!1),[a,r]=o.useState("virtualized"),l=z(),d=k(),c=a==="virtualized"?l:d,m=a==="virtualized"?j:v;return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Mode:"}),e.jsxs("select",{value:a,onChange:u=>r(u.target.value),className:"rounded-md border border-input bg-background px-3 py-1 text-sm",children:[e.jsx("option",{value:"virtualized",children:"Column Virtualized"}),e.jsx("option",{value:"non-virtualized",children:"Non-Virtualized"})]})]}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>n(!t),children:t?"Hide Code":"Show Code"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-lg border bg-muted/20 p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:a==="virtualized"?"Column Virtualization Enabled":"Column Virtualization Disabled"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:a==="virtualized"?"Only visible columns are rendered, providing better performance with many columns. Dynamic row height is disabled. This is the default mode.":"All columns are rendered at once, allowing for dynamic row height but may impact performance with many columns. Disable virtualization by setting enableColumnVirtualization={false}."}),e.jsx("div",{className:"h-96",children:e.jsx(h,{data:i,filterHeight:32,headerHeight:40,headerMode:"double",headers:c,rowHeight:32,rowKey:"id",enableColumnVirtualization:a==="virtualized",useDynamicRowHeight:a==="non-virtualized"})})]}),t&&e.jsx("div",{children:e.jsx(y,{code:m,title:`${a==="virtualized"?"Virtualized":"Non-Virtualized"} Columns Example`})})]})]})},C=o.memo(N),S=()=>{const i=[{title:"When to Use Column Virtualization",description:"Use column virtualization for tables with many columns",scenarios:["Tables with 15+ columns","Performance is critical","Memory usage is a concern","You don't need dynamic row height"],code:`enableColumnVirtualization={true}
useDynamicRowHeight={false}`},{title:"When to Use Non-Virtualized Mode",description:"Use non-virtualized mode for tables with fewer columns or when you need advanced features",scenarios:["Tables with fewer than 15 columns","You need dynamic row height","Complex group headers are required","Simpler debugging is preferred"],code:`enableColumnVirtualization={false}
useDynamicRowHeight={true}`},{title:"Best Practices",description:"Follow these guidelines for optimal performance",scenarios:["Set appropriate column widths","Use freeze columns strategically","Test performance with your data","Consider mobile responsiveness"],code:`// Always test with your actual data
const headers = [
  { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
  { key: 'name', caption: 'Name', width: 180, freeze: 'left' },
  // ... more columns
  { key: 'status', caption: 'Status', width: 100, freeze: 'right' }
];`}];return e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-6",children:"Usage Guidelines"}),e.jsx("div",{className:"space-y-8",children:i.map((t,n)=>e.jsxs("div",{className:"rounded-lg border bg-card p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:t.title}),e.jsx("p",{className:"text-muted-foreground mb-4",children:t.description}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Scenarios:"}),e.jsx("ul",{className:"space-y-1",children:t.scenarios.map((a,r)=>e.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[e.jsx("span",{className:"text-primary mt-1",children:"•"}),a]},r))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Configuration:"}),e.jsx("pre",{className:"bg-muted p-3 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:t.code})})]})]})]},n))})]})};o.memo(S);const D=(i=1e3)=>p(i),V=()=>{const i=o.useMemo(()=>D(1e3),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Column Virtualization"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to enable or disable column virtualization to optimize performance and enable advanced features. Column virtualization is enabled by default for optimal performance."})]}),e.jsx(C,{data:i}),e.jsx(f,{}),e.jsx(g,{})]})},K=o.memo(V);export{K as default};
//# sourceMappingURL=index-G28M0ixW.js.map
