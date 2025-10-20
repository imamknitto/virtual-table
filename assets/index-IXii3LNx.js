import{j as e}from"./index-Dzu7E_zT.js";import{r as s}from"./router-BDK15HzG.js";import{K as n}from"./knitto-table-LwGpd4im.js";import{f as o}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const d=()=>{const a=["Engineering","Marketing","Sales","HR"],t=["Frontend","Backend","DevOps","Design","Content","Analytics","Support","Training"];return Array.from({length:20},(r,l)=>({id:l+1,department:a[Math.floor(l/5)],team:t[Math.floor(l/2.5)],name:o.person.fullName(),position:o.person.jobTitle(),email:o.internet.email(),salary:o.number.int({min:5e4,max:15e4})}))},g=()=>[{id:1,region:"North America",country:"USA",salesRep:"John Doe",product:"Laptop",q1Sales:25e3,q2Sales:3e4,q3Sales:28e3,q4Sales:32e3,totalSales:115e3},{id:2,region:"North America",country:"USA",salesRep:"John Doe",product:"Desktop",q1Sales:18e3,q2Sales:22e3,q3Sales:2e4,q4Sales:25e3,totalSales:85e3},{id:3,region:"North America",country:"USA",salesRep:"Jane Smith",product:"Laptop",q1Sales:22e3,q2Sales:26e3,q3Sales:24e3,q4Sales:28e3,totalSales:1e5},{id:4,region:"North America",country:"USA",salesRep:"Jane Smith",product:"Tablet",q1Sales:12e3,q2Sales:15e3,q3Sales:14e3,q4Sales:16e3,totalSales:57e3},{id:5,region:"North America",country:"Canada",salesRep:"Mike Johnson",product:"Laptop",q1Sales:15e3,q2Sales:18e3,q3Sales:16e3,q4Sales:2e4,totalSales:69e3},{id:6,region:"North America",country:"Canada",salesRep:"Mike Johnson",product:"Desktop",q1Sales:12e3,q2Sales:15e3,q3Sales:14e3,q4Sales:17e3,totalSales:58e3},{id:7,region:"Europe",country:"UK",salesRep:"Sarah Wilson",product:"Laptop",q1Sales:2e4,q2Sales:24e3,q3Sales:22e3,q4Sales:26e3,totalSales:92e3},{id:8,region:"Europe",country:"UK",salesRep:"Sarah Wilson",product:"Desktop",q1Sales:14e3,q2Sales:17e3,q3Sales:16e3,q4Sales:19e3,totalSales:66e3},{id:9,region:"Europe",country:"Germany",salesRep:"Klaus Mueller",product:"Laptop",q1Sales:23e3,q2Sales:27e3,q3Sales:25e3,q4Sales:29e3,totalSales:104e3},{id:10,region:"Europe",country:"Germany",salesRep:"Klaus Mueller",product:"Tablet",q1Sales:9e3,q2Sales:12e3,q3Sales:11e3,q4Sales:13e3,totalSales:45e3}],c=()=>[{key:"department",caption:"Department",width:150,enableRowSpan:!0},{key:"team",caption:"Team",width:120,enableRowSpan:!0},{key:"name",caption:"Name",width:200},{key:"position",caption:"Position",width:180},{key:"email",caption:"Email",width:250},{key:"salary",caption:"Salary",width:120,renderCell:a=>`$${a.salary.toLocaleString()}`}],b=()=>[{key:"region",caption:"Region",width:150,enableRowSpan:!0,freeze:"left"},{key:"country",caption:"Country",width:120,enableRowSpan:!0},{key:"salesRep",caption:"Sales Rep",width:150,enableRowSpan:!0},{key:"product",caption:"Product",width:120},{key:"group-header-sales",caption:"Quarterly Sales",children:[{key:"q1Sales",caption:"Q1",width:100,renderCell:a=>`$${a.q1Sales.toLocaleString()}`},{key:"q2Sales",caption:"Q2",width:100,renderCell:a=>`$${a.q2Sales.toLocaleString()}`},{key:"q3Sales",caption:"Q3",width:100,renderCell:a=>`$${a.q3Sales.toLocaleString()}`},{key:"q4Sales",caption:"Q4",width:100,renderCell:a=>`$${a.q4Sales.toLocaleString()}`}]},{key:"totalSales",caption:"Total Sales",width:120,freeze:"right",renderCell:a=>`$${a.totalSales.toLocaleString()}`}],y=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Define employee data type
interface IEmployee {
  id: number;
  department: string;
  team: string;
  name: string;
  position: string;
  email: string;
  salary: number;
}

// Generate sample data (must be pre-sorted for rowspan)
const generateEmployeeData = (): IEmployee[] => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR'];
  const teams = ['Frontend', 'Backend', 'DevOps', 'Design'];
  
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    department: departments[Math.floor(index / 5)],
    team: teams[Math.floor(index / 2.5)],
    name: faker.person.fullName(),
    position: faker.person.jobTitle(),
    email: faker.internet.email(),
    salary: faker.number.int({ min: 50000, max: 150000 }),
  }));
};

const BasicRowspanExample = () => {
  const data = generateEmployeeData();

  // Define table headers with enableRowSpan
  const headers: IHeader<IEmployee>[] = [
    { 
      key: 'department', 
      caption: 'Department', 
      width: 150, 
      enableRowSpan: true  // Enable rowspan for duplicate values
    },
    { 
      key: 'team', 
      caption: 'Team', 
      width: 120, 
      enableRowSpan: true  // Enable rowspan for duplicate values
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'email', caption: 'Email', width: 250 },
    { 
      key: 'salary', 
      caption: 'Salary', 
      width: 120, 
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`
    },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable  // Required for rowspan functionality
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`,w=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';

// Define sales report data type
interface ISalesReport {
  id: number;
  region: string;
  country: string;
  salesRep: string;
  product: string;
  q1Sales: number;
  q2Sales: number;
  q3Sales: number;
  q4Sales: number;
  totalSales: number;
}

// Pre-sorted data for proper rowspan merging
const salesData: ISalesReport[] = [
  // North America region (rowSpan = 6)
  //   - USA country (rowSpan = 4)
  //     - John Doe salesRep (rowSpan = 2)
  { id: 1, region: 'North America', country: 'USA', salesRep: 'John Doe', product: 'Laptop', q1Sales: 25000, q2Sales: 30000, q3Sales: 28000, q4Sales: 32000, totalSales: 115000 },
  { id: 2, region: 'North America', country: 'USA', salesRep: 'John Doe', product: 'Desktop', q1Sales: 18000, q2Sales: 22000, q3Sales: 20000, q4Sales: 25000, totalSales: 85000 },
  //     - Jane Smith salesRep (rowSpan = 2)
  { id: 3, region: 'North America', country: 'USA', salesRep: 'Jane Smith', product: 'Laptop', q1Sales: 22000, q2Sales: 26000, q3Sales: 24000, q4Sales: 28000, totalSales: 100000 },
  { id: 4, region: 'North America', country: 'USA', salesRep: 'Jane Smith', product: 'Tablet', q1Sales: 12000, q2Sales: 15000, q3Sales: 14000, q4Sales: 16000, totalSales: 57000 },
  //   - Canada country (rowSpan = 2)
  //     - Mike Johnson salesRep (rowSpan = 2)
  { id: 5, region: 'North America', country: 'Canada', salesRep: 'Mike Johnson', product: 'Laptop', q1Sales: 15000, q2Sales: 18000, q3Sales: 16000, q4Sales: 20000, totalSales: 69000 },
  { id: 6, region: 'North America', country: 'Canada', salesRep: 'Mike Johnson', product: 'Desktop', q1Sales: 12000, q2Sales: 15000, q3Sales: 14000, q4Sales: 17000, totalSales: 58000 },
  // Europe region (rowSpan = 4)
  //   - UK country (rowSpan = 2)
  //     - Sarah Wilson salesRep (rowSpan = 2)
  { id: 7, region: 'Europe', country: 'UK', salesRep: 'Sarah Wilson', product: 'Laptop', q1Sales: 20000, q2Sales: 24000, q3Sales: 22000, q4Sales: 26000, totalSales: 92000 },
  { id: 8, region: 'Europe', country: 'UK', salesRep: 'Sarah Wilson', product: 'Desktop', q1Sales: 14000, q2Sales: 17000, q3Sales: 16000, q4Sales: 19000, totalSales: 66000 },
  //   - Germany country (rowSpan = 2)
  //     - Klaus Mueller salesRep (rowSpan = 2)
  { id: 9, region: 'Europe', country: 'Germany', salesRep: 'Klaus Mueller', product: 'Laptop', q1Sales: 23000, q2Sales: 27000, q3Sales: 25000, q4Sales: 29000, totalSales: 104000 },
  { id: 10, region: 'Europe', country: 'Germany', salesRep: 'Klaus Mueller', product: 'Tablet', q1Sales: 9000, q2Sales: 12000, q3Sales: 11000, q4Sales: 13000, totalSales: 45000 },
];

const AdvancedRowspanExample = () => {
  // Define headers with rowspan + colspan + freeze
  const headers: IHeader<ISalesReport>[] = [
    { 
      key: 'region', 
      caption: 'Region', 
      width: 150, 
      enableRowSpan: true,  // Enable rowspan
      freeze: 'left'        // Freeze column
    },
    { 
      key: 'country', 
      caption: 'Country', 
      width: 120, 
      enableRowSpan: true   // Enable rowspan
    },
    { 
      key: 'salesRep', 
      caption: 'Sales Rep', 
      width: 150, 
      enableRowSpan: true   // Enable rowspan
    },
    { key: 'product', caption: 'Product', width: 120 },
    {
      key: 'group-header-sales',
      caption: 'Quarterly Sales',
      children: [  // Colspan grouping
        { key: 'q1Sales', caption: 'Q1', width: 100, renderCell: (item) => \`$\${item.q1Sales.toLocaleString()}\` },
        { key: 'q2Sales', caption: 'Q2', width: 100, renderCell: (item) => \`$\${item.q2Sales.toLocaleString()}\` },
        { key: 'q3Sales', caption: 'Q3', width: 100, renderCell: (item) => \`$\${item.q3Sales.toLocaleString()}\` },
        { key: 'q4Sales', caption: 'Q4', width: 100, renderCell: (item) => \`$\${item.q4Sales.toLocaleString()}\` },
      ],
    },
    { 
      key: 'totalSales', 
      caption: 'Total Sales', 
      width: 120, 
      freeze: 'right',      // Freeze column
      renderCell: (item) => \`$\${item.totalSales.toLocaleString()}\`
    },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable  // Required for rowspan functionality
        data={salesData} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`,f=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateBasicRowspanData } from './data-generator';
import { basicRowspanHeaders } from './table-headers';

const OnclickExample = () => {
  const data = generateBasicRowspanData();

  return (
    <div className="h-80">
      <KnittoTable
        rowKey="id"
        isLoading={false}
        headers={basicRowspanHeaders}
        data={data}
        useRegularTable
        onClickRow={(item, rowIndex, columnIndex, groupOfItems) => {
          console.log('=== CLICK ROW DEBUG ===');
          console.log('Item:', item);
          console.log('Row Index:', rowIndex);
          console.log('Column Index:', columnIndex);
          console.log('Group of Items:', groupOfItems);
          console.log('========================');
        }}
      />
    </div>
  );
};

export default OnclickExample;`,j=({code:a,title:t})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:a})})]}),i=s.memo(j);function q(){const[a,t]=s.useState(!1),r=s.useMemo(()=>d(),[]),l=s.useMemo(()=>c(),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Rowspan"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>t(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-80",children:e.jsx(n,{useRegularTable:!0,data:r,headers:l,rowKey:"id"})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(i,{code:y,title:"Basic Rowspan Example"})})]})}const k=s.memo(q);function R(){const[a,t]=s.useState(!1),r=s.useMemo(()=>g(),[]),l=s.useMemo(()=>b(),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Advanced Rowspan with Colspan"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>t(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-80",children:e.jsx(n,{useRegularTable:!0,data:r,headers:l,rowKey:"id"})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(i,{code:w,title:"Advanced Rowspan with Colspan Example"})})]})}const N=s.memo(R),v=()=>e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2",children:"Rowspan Requirements & Best Practices"}),e.jsxs("div",{className:"space-y-3 text-sm text-blue-800 dark:text-blue-200",children:[e.jsxs("p",{children:["Rowspan functionality automatically merges consecutive duplicate values in table cells. This feature is ",e.jsx("strong",{children:"exclusive to regular tables"})," and requires specific setup."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-900 dark:text-blue-100 mb-2",children:"✅ Requirements:"}),e.jsxs("ul",{className:"space-y-1 text-xs",children:[e.jsxs("li",{children:["• Must use ",e.jsxs("code",{className:"bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs font-mono",children:["useRegularTable=",!0]})]}),e.jsxs("li",{children:["• Set ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs font-mono",children:"enableRowSpan: true"})," in headers"]}),e.jsx("li",{children:"• Data must be pre-sorted by rowspan columns"}),e.jsx("li",{children:"• Only works with consecutive duplicate values"}),e.jsx("li",{children:"• Cannot be used with special columns (row-selection, expand, action)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-900 dark:text-blue-100 mb-2",children:"💡 Best Practices:"}),e.jsxs("ul",{className:"space-y-1 text-xs",children:[e.jsx("li",{children:"• Disable sorting on rowspan columns"}),e.jsx("li",{children:"• Sort data by hierarchical order (region → country → rep)"}),e.jsx("li",{children:"• Use with freeze columns for better UX"}),e.jsx("li",{children:"• Combine with colspan for complex layouts"}),e.jsx("li",{children:"• Test with different data sizes"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-xs font-medium text-blue-900 dark:text-blue-100",children:["⚠️ ",e.jsx("strong",{children:"Important:"})," Rowspan only works with regular tables. Virtual tables do not support this feature due to their rendering architecture. Data must be pre-sorted for proper merging."]})})]})]})]})}),C=s.memo(v),E=()=>{const[a,t]=s.useState(null),[r,l]=s.useState(!1),p=s.useMemo(()=>d(),[]),m=s.useMemo(()=>c(),[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight mb-4",children:"onClick Row Behavior"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"When using rowspan with regular tables, the onClick callback provides different parameter values depending on which cell is clicked. This is important for understanding how to handle user interactions in rowspan-enabled tables."})]}),e.jsxs("div",{className:"border rounded-lg p-6 bg-muted/30",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Interactive Example"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>l(!r),children:r?"Hide Code":"Show Code"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"h-80",children:e.jsx(n,{rowKey:"id",isLoading:!1,headers:m,data:p,useRegularTable:!0,onClickRow:(u,h,x,S)=>{t({item:u,rowIndex:h,columnIndex:x,groupOfItems:S})}})}),e.jsxs("div",{children:[e.jsx("h5",{children:"Selected Row Data:"}),e.jsx("pre",{children:e.jsx("code",{className:"text-sm",children:JSON.stringify(a,null,2)})})]}),r&&e.jsx(i,{code:f,title:"onClick Implementation Example"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Parameter Differences"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-700 dark:text-green-400",children:"✅ Regular Cells (No Rowspan)"}),e.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"item"})," - The complete row data"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"rowIndex"})," - Actual row position (0-based)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"columnIndex"})," - Column position (0-based)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"groupOfItems"})," - Array with single item"]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-blue-700 dark:text-blue-400",children:"🔄 Rowspan Cells (Merged)"}),e.jsxs("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"item"})," - The complete row data"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"rowIndex"})," - First row of merged group"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"columnIndex"})," - Column position (0-based)"]}),e.jsxs("li",{children:["• ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"groupOfItems"})," - All rows in merged group"]})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 dark:text-blue-100 mb-2",children:"💡 Key Points:"}),e.jsxs("ul",{className:"space-y-1 text-sm text-blue-800 dark:text-blue-200",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"rowIndex"})," always refers to the first row of a merged group for rowspan cells"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"groupOfItems"})," contains all rows that share the same rowspan value"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"item"})," represents the specific row that was clicked, not the merged group"]}),e.jsxs("li",{children:["• Use ",e.jsx("code",{className:"bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs",children:"groupOfItems"})," to access all related data when needed"]})]})]})]})]})},D=s.memo(E);function O(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Rowspan"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Rowspan functionality automatically merges consecutive duplicate values in table cells. This feature is exclusive to regular tables and requires specific setup and data preparation."})]}),e.jsx(C,{}),e.jsx(k,{}),e.jsx(N,{}),e.jsx(D,{})]})}export{O as default};
//# sourceMappingURL=index-IXii3LNx.js.map
