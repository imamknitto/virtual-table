import{r as i,j as e}from"./react-vendor-D4DhKJk1.js";import{K as o}from"./knitto-table-EXajlcu1.js";import{g as c}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-CKMZEWjS.js";import"./knitto-hooks-L0VXpnq7.js";import"./utils-B-dksMZM.js";import"./knitto-icons-DxxDW9og.js";const r=()=>c(25),l=t=>{const{withFreeze:a=!1,withColspan:n=!1}=t||{};return[{key:"id",caption:"ID",width:100,freeze:a?"left":void 0},...n?[{key:"group-header-identity",caption:"Identity",children:[{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:200}]}]:[{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:200}],{key:"company",caption:"Company",width:200},{key:"position",caption:"Position",width:200},...n?[{key:"group-header-contact",caption:"Contact Information",children:[{key:"phone",caption:"Phone",width:200},{key:"address",caption:"Address",width:200},{key:"city",caption:"City",width:200},{key:"country",caption:"Country",width:200}]}]:[{key:"phone",caption:"Phone",width:200},{key:"address",caption:"Address",width:200},{key:"city",caption:"City",width:200},{key:"country",caption:"Country",width:200}],{key:"salary",caption:"Salary",width:200,freeze:a?"right":void 0}]},m=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const BasicImplementation = () => {
  const data = generateEmployeeData();

  // Define table headers
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    { key: 'phone', caption: 'Phone', width: 200 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 200 },
    { key: 'country', caption: 'Country', width: 200 },
    { key: 'salary', caption: 'Salary', width: 200 },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`,h=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const WithColspan = () => {
  const data = generateEmployeeData();

  // Define table headers with group headers (colspan)
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100 },
    {
      key: 'group-header-identity',
      caption: 'Identity',
      children: [
        { key: 'name', caption: 'Name', width: 200 },
        { key: 'email', caption: 'Email', width: 200 },
      ],
    },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      children: [
        { key: 'phone', caption: 'Phone', width: 200 },
        { key: 'address', caption: 'Address', width: 200 },
        { key: 'city', caption: 'City', width: 200 },
        { key: 'country', caption: 'Country', width: 200 },
      ],
    },
    { key: 'salary', caption: 'Salary', width: 200 },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`,p=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const WithFreezeColumn = () => {
  const data = generateEmployeeData();

  // Define table headers with freeze columns
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    { key: 'phone', caption: 'Phone', width: 200 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 200 },
    { key: 'country', caption: 'Country', width: 200 },
    { key: 'salary', caption: 'Salary', width: 200, freeze: 'right' },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`,u=({code:t,title:a})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:a})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:t})})]}),d=i.memo(u);function y(){const[t,a]=i.useState(!1),n=i.useMemo(()=>r(),[]),s=i.useMemo(()=>l(),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Implementation"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>a(!t),children:t?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-80",children:e.jsx(o,{useRegularTable:!0,data:n,headers:s,rowKey:"id"})}),t&&e.jsx("div",{className:"mt-4",children:e.jsx(d,{code:m,title:"Basic Regular Table Example"})})]})}const x=i.memo(y);function b(){const[t,a]=i.useState(!1),n=i.useMemo(()=>r(),[]),s=i.useMemo(()=>l({withColspan:!0}),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"With Group Header (Colspan)"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>a(!t),children:t?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-80",children:e.jsx(o,{useRegularTable:!0,data:n,headers:s,rowKey:"id"})}),t&&e.jsx("div",{className:"mt-4",children:e.jsx(d,{code:h,title:"Regular Table with Group Headers (Colspan) Example"})})]})}const g=i.memo(b);function f(){const[t,a]=i.useState(!1),n=i.useMemo(()=>r(),[]),s=i.useMemo(()=>l({withFreeze:!0}),[]);return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"With Freeze Column"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>a(!t),children:t?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-80",children:e.jsx(o,{useRegularTable:!0,data:n,headers:s,rowKey:"id"})}),t&&e.jsx("div",{className:"mt-4",children:e.jsx(d,{code:p,title:"Regular Table with Freeze Columns Example"})})]})}const w=i.memo(f),j=()=>e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2",children:"Regular Table vs Virtual Table"}),e.jsxs("div",{className:"space-y-3 text-sm text-blue-800 dark:text-blue-200",children:[e.jsxs("p",{children:["When you set"," ",e.jsxs("code",{className:"bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded text-xs font-mono",children:["useRegularTable=",!0]}),", the table switches to native HTML table elements and disables virtualization capabilities."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-900 dark:text-blue-100 mb-2",children:"✅ Available Features:"}),e.jsxs("ul",{className:"space-y-1 text-xs",children:[e.jsx("li",{children:"• Native HTML table semantics"}),e.jsx("li",{children:"• Rowspan merging (enableRowSpan)"}),e.jsx("li",{children:"• Freeze columns (left/right)"}),e.jsx("li",{children:"• Group headers (colspan)"}),e.jsx("li",{children:"• All filtering & sorting"}),e.jsx("li",{children:"• Row selection & expansion"}),e.jsx("li",{children:"• Custom cell rendering"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-red-700 dark:text-red-400 mb-2",children:"❌ Disabled Features:"}),e.jsxs("ul",{className:"space-y-1 text-xs",children:[e.jsx("li",{children:"• Row virtualization"}),e.jsx("li",{children:"• Column virtualization"}),e.jsx("li",{children:"• Infinite scroll optimization"}),e.jsx("li",{children:"• Large dataset performance"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-100 dark:bg-blue-900/50 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-xs font-medium text-blue-900 dark:text-blue-100",children:["💡 ",e.jsx("strong",{children:"Best for:"})," Small to medium datasets (<1000 rows), when you need standard table semantics, or when you require rowspan functionality."]})})]})]})]})}),k=i.memo(j);function S(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Regular Table"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Regular Table is a simple table that is used to display data in a grid. It is a good choice for small datasets and semantic table."})]}),e.jsx(k,{}),e.jsx(x,{}),e.jsx(g,{}),e.jsx(w,{})]})}export{S as default};
//# sourceMappingURL=index-B3dWxy-T.js.map
