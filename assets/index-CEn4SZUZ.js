import{j as e}from"./index-NtvNN34v.js";import{r as i,L as c}from"./router-BDK15HzG.js";import{V as s}from"./virtual-table-DDqrKa56.js";import{f as a}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const h=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"API Reference"}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:"Header Grouping Props"})}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"children"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Array of child headers that belong to this group. Each child can also have its own children for nested grouping."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"children?: Omit<IHeader<TData>, 'freeze'>[]"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"key"}),e.jsxs("p",{className:"text-sm text-muted-foreground mb-2",children:[e.jsx("strong",{className:"text-red-600 dark:text-red-400",children:"CRITICAL:"})," For group headers, the key ",e.jsx("strong",{children:"MUST"})," start with"," ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-1 py-0.5 rounded text-xs",children:"group-header-"})," ","prefix. This is how the virtual table identifies and renders grouped headers."]}),e.jsxs("div",{className:"mb-2 p-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded text-xs",children:[e.jsx("strong",{children:"Examples:"}),e.jsx("br",{}),"✅ ",e.jsx("code",{className:"text-green-700 dark:text-green-400",children:"group-header-contact"}),e.jsx("br",{}),"✅ ",e.jsx("code",{className:"text-green-700 dark:text-green-400",children:"group-header-financial"}),e.jsx("br",{}),"❌ ",e.jsx("code",{className:"text-red-700 dark:text-red-400",children:"contact-info"})," (will be treated as regular column)"]}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"key: keyof TData | 'expand' | 'action' | 'row-selection' | (string & object)"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"caption"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Display text for the group header. This appears in the top row of the grouped columns."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"caption: string"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"width"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Total width of the group. This should equal the sum of all child column widths."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"width?: number"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"freeze"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Freeze the entire group to the left or right side of the table. Useful for keeping important grouped columns visible while scrolling."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"freeze?: 'left' | 'right'"})]})]})]})]}),m=i.memo(h),p=()=>Array.from({length:30},(t,r)=>({id:r+1,name:a.person.fullName(),email:a.internet.email(),phone:a.phone.number(),department:a.commerce.department(),position:a.person.jobTitle(),salary:a.number.int({min:3e4,max:15e4}),startDate:a.date.past({years:5}).toISOString().split("T")[0],performance:a.number.int({min:1,max:5}),manager:a.person.fullName(),location:a.location.city(),skills:a.helpers.arrayElements(["React","TypeScript","Node.js","Python","Java","C#","Go","Rust"],{min:2,max:5})})),x=()=>Array.from({length:25},(t,r)=>({id:r+1,product:a.commerce.productName(),category:a.commerce.department(),q1Sales:a.number.int({min:1e4,max:1e5}),q2Sales:a.number.int({min:1e4,max:1e5}),q3Sales:a.number.int({min:1e4,max:1e5}),q4Sales:a.number.int({min:1e4,max:1e5}),totalSales:0,profit:a.number.int({min:5e3,max:5e4}),margin:0,region:a.location.state(),salesRep:a.person.fullName()})).map(t=>({...t,totalSales:t.q1Sales+t.q2Sales+t.q3Sales+t.q4Sales,margin:Math.round(t.profit/(t.q1Sales+t.q2Sales+t.q3Sales+t.q4Sales)*100)})),u=()=>[{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"group-header-contact",caption:"Contact Information",children:[{key:"phone",caption:"Phone",width:150},{key:"location",caption:"Location",width:150}]},{key:"group-header-work",caption:"Work Details",children:[{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:150},{key:"manager",caption:"Manager",width:100}]},{key:"group-header-financial",caption:"Financial",children:[{key:"salary",caption:"Salary",width:100,renderCell:t=>`$${t.salary.toLocaleString()}`},{key:"performance",caption:"Rating",width:100}]},{key:"startDate",caption:"Start Date",width:120}],g=()=>[{key:"product",caption:"Product",width:200},{key:"category",caption:"Category",width:150},{key:"group-header-quarterly",caption:"Quarterly Sales",children:[{key:"q1Sales",caption:"Q1",width:100,renderCell:t=>`$${t.q1Sales.toLocaleString()}`},{key:"q2Sales",caption:"Q2",width:100,renderCell:t=>`$${t.q2Sales.toLocaleString()}`},{key:"q3Sales",caption:"Q3",width:100,renderCell:t=>`$${t.q3Sales.toLocaleString()}`},{key:"q4Sales",caption:"Q4",width:100,renderCell:t=>`$${t.q4Sales.toLocaleString()}`}]},{key:"group-header-summary",caption:"Summary",children:[{key:"totalSales",caption:"Total Sales",width:120,renderCell:t=>`$${t.totalSales.toLocaleString()}`},{key:"profit",caption:"Profit",width:100,renderCell:t=>`$${t.profit.toLocaleString()}`},{key:"margin",caption:"Margin %",width:100,renderCell:t=>`${t.margin}%`}]},{key:"group-header-team",caption:"Team",children:[{key:"region",caption:"Region",width:100},{key:"salesRep",caption:"Sales Rep",width:120}]}],y=()=>[{key:"name",caption:"Name",width:180},{key:"email",caption:"Email",width:220},{key:"group-header-personal",caption:"Personal Information",width:350,children:[{key:"phone",caption:"Phone",width:120},{key:"location",caption:"Location",width:120},{key:"startDate",caption:"Start Date",width:110}]},{key:"group-header-professional",caption:"Professional Details",width:450,children:[{key:"group-header-role",caption:"Role",width:225,children:[{key:"department",caption:"Department",width:115},{key:"position",caption:"Position",width:110}]},{key:"group-header-performance",caption:"Performance",width:225,children:[{key:"manager",caption:"Manager",width:115},{key:"performance",caption:"Rating",width:110}]}]},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`}],b=()=>[{key:"group-header-basic",caption:"Basic Info",freeze:"left",width:300,children:[{key:"name",caption:"Name",width:150},{key:"email",caption:"Email",width:150}]},{key:"group-header-contact",caption:"Contact Information",width:300,children:[{key:"phone",caption:"Phone",width:150},{key:"location",caption:"Location",width:150}]},{key:"group-header-work",caption:"Work Details",width:400,children:[{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:150},{key:"manager",caption:"Manager",width:100}]},{key:"group-header-financial",caption:"Financial",width:200,children:[{key:"salary",caption:"Salary",width:100,renderCell:t=>`$${t.salary.toLocaleString()}`},{key:"performance",caption:"Rating",width:100}]},{key:"group-header-actions",caption:"Actions",freeze:"right",width:120,children:[{key:"startDate",caption:"Start Date",width:120}]}],d={basic:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const EmployeeTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      width: 300,
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      width: 400,
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      width: 200,
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
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
    />
  );
};`,complex:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const SalesReportTable = () => {
  const [data] = useState(generateSalesData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'product', caption: 'Product', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    {
      key: 'group-header-quarterly',
      caption: 'Quarterly Sales',
      width: 400,
      children: [
        { key: 'q1Sales', caption: 'Q1', width: 100 },
        { key: 'q2Sales', caption: 'Q2', width: 100 },
        { key: 'q3Sales', caption: 'Q3', width: 100 },
        { key: 'q4Sales', caption: 'Q4', width: 100 },
      ],
    },
    {
      key: 'group-header-summary',
      caption: 'Summary',
      width: 300,
      children: [
        { key: 'totalSales', caption: 'Total Sales', width: 120 },
        { key: 'profit', caption: 'Profit', width: 100 },
        { key: 'margin', caption: 'Margin %', width: 80 },
      ],
    },
    {
      key: 'group-header-team',
      caption: 'Team',
      width: 200,
      children: [
        { key: 'region', caption: 'Region', width: 100 },
        { key: 'salesRep', caption: 'Sales Rep', width: 100 },
      ],
    },
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
    />
  );
};`,nested:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const ComplexGroupingTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'name', caption: 'Name', width: 180 },
    { key: 'email', caption: 'Email', width: 220 },
    {
      key: 'group-header-personal',
      caption: 'Personal Information',
      width: 350,
      children: [
        { key: 'phone', caption: 'Phone', width: 120 },
        { key: 'location', caption: 'Location', width: 120 },
        { key: 'startDate', caption: 'Start Date', width: 110 },
      ],
    },
    {
      key: 'group-header-professional',
      caption: 'Professional Details',
      width: 450,
      children: [
        {
          key: 'group-header-role',
          caption: 'Role',
          width: 225,
          children: [
            { key: 'department', caption: 'Department', width: 115 },
            { key: 'position', caption: 'Position', width: 110 },
          ],
        },
        {
          key: 'group-header-performance',
          caption: 'Performance',
          width: 225,
          children: [
            { key: 'manager', caption: 'Manager', width: 115 },
            { key: 'performance', caption: 'Rating', width: 110 },
          ],
        },
      ],
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
    },
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
    />
  );
};`,freezeGrouping:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const FreezeGroupingTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    {
      key: 'group-header-basic',
      caption: 'Basic Info',
      freeze: 'left',
      width: 300,
      children: [
        { key: 'name', caption: 'Name', width: 150 },
        { key: 'email', caption: 'Email', width: 150 },
      ],
    },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      width: 300,
      children: [
        { key: 'phone', caption: 'Phone', width: 150 },
        { key: 'location', caption: 'Location', width: 150 },
      ],
    },
    {
      key: 'group-header-work',
      caption: 'Work Details',
      width: 400,
      children: [
        { key: 'department', caption: 'Department', width: 150 },
        { key: 'position', caption: 'Position', width: 150 },
        { key: 'manager', caption: 'Manager', width: 100 },
      ],
    },
    {
      key: 'group-header-financial',
      caption: 'Financial',
      width: 200,
      children: [
        {
          key: 'salary',
          caption: 'Salary',
          width: 100,
          renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
        },
        { key: 'performance', caption: 'Rating', width: 100 },
      ],
    },
    {
      key: 'group-header-actions',
      caption: 'Actions',
      freeze: 'right',
      width: 120,
      children: [
        { key: 'startDate', caption: 'Start Date', width: 120 },
      ],
    },
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
    />
  );
};`},f=({title:t,code:r})=>e.jsxs("div",{className:"mt-4 border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:r})})]}),l=i.memo(f),w=({data:t})=>{const[r,o]=i.useState(!1),n=u();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Header Grouping"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>o(!r),children:r?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with grouped headers organizing related information into logical sections: Contact Information, Work Details, and Financial data."]})}),e.jsx("div",{className:"h-96",children:e.jsx(s,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id"})}),r&&e.jsx(l,{code:d.basic,title:"Basic Header Grouping Example"})]})},j=i.memo(w),k=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Best Practices"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📋 Header Design"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-red-600 dark:text-red-400",children:"ALWAYS"})," use"," ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-1 py-0.5 rounded text-xs",children:"group-header-"})," ","prefix for group keys"]}),e.jsx("li",{children:"• Use descriptive group names that clearly indicate content"}),e.jsx("li",{children:"• Keep group names concise but meaningful"}),e.jsx("li",{children:"• Limit nesting to 2-3 levels for better readability"}),e.jsx("li",{children:"• Ensure consistent width distribution within groups"}),e.jsx("li",{children:"• Consider user workflow when organizing columns"}),e.jsx("li",{children:"• Freeze important groups (like ID, Name) for better UX"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"⚡ Performance"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Group headers don't impact virtual scrolling performance"}),e.jsx("li",{children:"• Width calculations are optimized for grouped columns"}),e.jsx("li",{children:"• Resize operations work efficiently with nested structures"}),e.jsx("li",{children:"• Filter and sort operations work seamlessly with groups"}),e.jsx("li",{children:"• Memory usage remains optimal with complex groupings"})]})]})]})]}),N=i.memo(k),S=({data:t})=>{const[r,o]=i.useState(!1),n=g();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Complex Header Grouping"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>o(!r),children:r?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-800 dark:text-green-200",children:[e.jsx("strong",{children:"Example:"}),' Sales report table with quarterly data grouped under "Quarterly Sales" and summary metrics grouped under "Summary" with calculated values.']})}),e.jsx("div",{className:"h-96",children:e.jsx(s,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id"})}),r&&e.jsx(l,{code:d.complex,title:"Complex Header Grouping Example"})]})},v=i.memo(S),C=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Header Grouping Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Core Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Create logical groupings of related columns"}),e.jsx("li",{children:"• Support for unlimited nesting levels"}),e.jsx("li",{children:"• Automatic width calculation for grouped columns"}),e.jsx("li",{children:"• Responsive header resizing with grouped columns"}),e.jsx("li",{children:"• Works with all table features (filters, sorting, etc.)"}),e.jsx("li",{children:"• Compatible with freeze columns (left/right)"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Custom group header captions"}),e.jsx("li",{children:"• Individual column styling within groups"}),e.jsx("li",{children:"• Flexible width distribution"}),e.jsx("li",{children:"• Integration with freeze columns"}),e.jsx("li",{children:"• TypeScript support for nested structures"})]})]})]})]}),H=i.memo(C),D=({data:t})=>{const[r,o]=i.useState(!1),n=b();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Header Grouping with Freeze Columns"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>o(!r),children:r?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-orange-800 dark:text-orange-200",children:[e.jsx("strong",{children:"Example:"})," Employee table combining header grouping with freeze columns. Basic Info is frozen on the left, Actions are frozen on the right, while other grouped columns scroll horizontally."]})}),e.jsx("div",{className:"h-96",children:e.jsx(s,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id"})}),r&&e.jsx(l,{code:d.freezeGrouping,title:"Header Grouping with Freeze Columns Example"})]})},z=i.memo(D),$=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Key Naming Convention"}),e.jsx("div",{className:"mb-6 p-6 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-6 h-6 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-sm font-bold",children:"!"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"Important: Key Naming for Group Headers"}),e.jsxs("p",{className:"text-sm text-yellow-700 dark:text-yellow-300 mb-3",children:["To create a header group, you ",e.jsx("strong",{children:"MUST"})," use a key that starts with"," ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded text-xs font-mono",children:"group-header-"})," ","prefix."]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400 font-bold",children:"✅"}),e.jsx("code",{className:"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-mono",children:"group-header-contact"}),e.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300",children:"- Creates a group header"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400 font-bold",children:"✅"}),e.jsx("code",{className:"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-mono",children:"group-header-financial"}),e.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300",children:"- Creates a group header"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400 font-bold",children:"❌"}),e.jsx("code",{className:"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-mono",children:"contact-info"}),e.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300",children:"- Will be treated as regular column"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400 font-bold",children:"❌"}),e.jsx("code",{className:"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs font-mono",children:"financial-data"}),e.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300",children:"- Will be treated as regular column"})]})]})]})]})}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🔑 Key Requirements"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• Must start with"," ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"group-header-"})]}),e.jsx("li",{children:"• Must be unique across all headers"}),e.jsx("li",{children:"• Cannot be a data property key"}),e.jsx("li",{children:"• Use descriptive names after the prefix"}),e.jsx("li",{children:"• Follow kebab-case convention"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📝 Naming Examples"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"group-header-contact"})]}),e.jsxs("li",{children:["•"," ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"group-header-personal-info"})]}),e.jsxs("li",{children:["•"," ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"group-header-quarterly-sales"})]}),e.jsxs("li",{children:["•"," ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"group-header-performance-metrics"})]})]})]})]})]}),E=i.memo($),q=({data:t})=>{const[r,o]=i.useState(!1),n=y();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Nested Header Grouping"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>o(!r),children:r?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-purple-800 dark:text-purple-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with nested header groups showing how to create multi-level header hierarchies for complex data organization."]})}),e.jsx("div",{className:"h-96",children:e.jsx(s,{data:t.slice(0,15),filterHeight:32,headerHeight:40,headerMode:"double",headers:n,rowHeight:32,rowKey:"id"})}),r&&e.jsx(l,{code:d.nested,title:"Nested Header Grouping Example"})]})},P=i.memo(q),T=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/header-customization",children:"Header Customization"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/expand-row",children:"Expand Row"})]})]})}),G=i.memo(T),R=()=>{const t=i.useMemo(()=>p(),[]),r=i.useMemo(()=>x(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Header Grouping"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to create grouped headers in your virtual table to organize related columns and improve data presentation with hierarchical header structures."})]}),e.jsx(j,{data:t}),e.jsx(v,{data:r}),e.jsx(P,{data:t}),e.jsx(z,{data:t}),e.jsx(E,{}),e.jsx(H,{}),e.jsx(N,{}),e.jsx(m,{}),e.jsx(G,{})]})},Q=i.memo(R);export{Q as default};
//# sourceMappingURL=index-CEn4SZUZ.js.map
