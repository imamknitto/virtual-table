import{j as e}from"./index-B2iC2mV1.js";import{r as n,L as a}from"./router-BDK15HzG.js";import{V as u}from"./virtual-table-DBXnPqra.js";import{f as o}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const b=({title:t,code:s})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:s})})]}),p=n.memo(b),g=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Checkbox Selection Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Selection Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Individual row selection with checkboxes"}),e.jsx("li",{children:"• Select all functionality in header"}),e.jsx("li",{children:'• Deselect individual rows when "select all" is active'}),e.jsx("li",{children:"• Real-time selection state tracking"}),e.jsx("li",{children:"• Custom selection change callbacks"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎯 Implementation"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Add `row-selection` key to headers"}),e.jsx("li",{children:"• Use `onChangeCheckboxRowSelection` callback"}),e.jsx("li",{children:"• Track selected/deselected rows state"}),e.jsx("li",{children:"• Handle select all vs individual selection"}),e.jsx("li",{children:"• Customize checkbox column width"})]})]})]})]}),k=n.memo(g),y=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/click-row-action",children:"Action Cells"}),e.jsx(a,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/expand-row",children:"Expand Rows"}),e.jsx(a,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"})]})]})}),f=n.memo(y),j=()=>Array.from({length:100},(t,s)=>({id:s+1,name:o.person.fullName(),email:o.internet.email(),company:o.company.name(),position:o.person.jobTitle(),phone:o.phone.number(),city:o.location.city(),country:o.location.country(),salary:o.number.int({min:3e4,max:15e4}),status:o.helpers.arrayElement(["Active","Inactive","Pending"]),department:o.helpers.arrayElement(["Engineering","Marketing","Sales","HR","Finance"])})),w=()=>[{key:"row-selection",caption:"",width:50,hideHeaderAction:!0,hideFilter:{sort:!0,search:!0,filterSelection:!0,filterAdvance:!0}},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"company",caption:"Company",width:200},{key:"position",caption:"Position",width:180},{key:"phone",caption:"Phone",width:150},{key:"city",caption:"City",width:150},{key:"country",caption:"Country",width:120},{key:"department",caption:"Department",width:120},{key:"status",caption:"Status",width:100},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`}],S=`import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data
const generateSampleData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
    status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
    department: faker.helpers.arrayElement(['Engineering', 'Marketing', 'Sales', 'HR', 'Finance']),
  }));
};

const CheckboxSelectionTable = () => {
  const [data] = useState(generateSampleData());
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [deselectedRows, setDeselectedRows] = useState<(string | number)[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  // Define table headers with checkbox selection
  const headers: IHeader<(typeof data)[0]>[] = [
    { 
      key: 'row-selection', 
      caption: '', 
      width: 50,
      hideHeaderAction: true,
      hideFilter: {
        sort: true,
        search: true,
        filterSelection: true,
        filterAdvance: true,
      }
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'department', caption: 'Department', width: 120 },
    { key: 'status', caption: 'Status', width: 100 },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
    },
  ];

  // Handle checkbox selection changes
  const handleCheckboxSelection = (
    selectedRows: (string | number)[],
    deselectedRows: (string | number)[],
    isSelectAll: boolean
  ) => {
    setSelectedRows(selectedRows);
    setDeselectedRows(deselectedRows);
    setIsSelectAll(isSelectAll);
  };

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onChangeCheckboxRowSelection={handleCheckboxSelection}
    />
  );
};`,v=({data:t,onCheckboxSelection:s})=>{const[i,l]=n.useState(!1),r=w();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>l(!i),children:i?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(u,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:r,onChangeCheckboxRowSelection:s,rowHeight:32,rowKey:"id"})}),i&&e.jsx(p,{code:S,title:"Checkbox Selection Example"})]})},N=n.memo(v),C=({selectedRows:t,deselectedRows:s,isSelectAll:i})=>e.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50 dark:bg-blue-950",children:[e.jsx("h3",{className:"font-semibold text-blue-900 dark:text-blue-200 mb-2",children:"Selected Rows"}),e.jsx("p",{className:"text-2xl font-bold text-blue-700 dark:text-blue-300",children:t.length}),e.jsx("p",{className:"text-sm text-blue-600 dark:text-blue-400 mt-1",children:t.length>0?`IDs: ${t.slice(0,5).join(", ")}${t.length>5?"...":""}`:"No rows selected"})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-orange-50 dark:bg-orange-950",children:[e.jsx("h3",{className:"font-semibold text-orange-900 dark:text-orange-200 mb-2",children:"Deselected Rows"}),e.jsx("p",{className:"text-2xl font-bold text-orange-700 dark:text-orange-300",children:s.length}),e.jsx("p",{className:"text-sm text-orange-600 dark:text-orange-400 mt-1",children:s.length>0?`IDs: ${s.slice(0,5).join(", ")}${s.length>5?"...":""}`:"No rows deselected"})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-green-50 dark:bg-green-950",children:[e.jsx("h3",{className:"font-semibold text-green-900 dark:text-green-200 mb-2",children:"Select All Status"}),e.jsx("p",{className:"text-2xl font-bold text-green-700 dark:text-green-300",children:i?"Active":"Inactive"}),e.jsx("p",{className:"text-sm text-green-600 dark:text-green-400 mt-1",children:i?"All rows are selected":"Individual selection mode"})]})]}),A=n.memo(C),R=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Usage Tips"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4 bg-blue-50 dark:bg-blue-950",children:[e.jsx("h3",{className:"font-semibold text-blue-900 dark:text-blue-200 mb-2",children:"💡 Pro Tips"}),e.jsxs("ul",{className:"text-sm text-blue-800 dark:text-blue-300 space-y-1",children:[e.jsx("li",{children:"• Use `hideHeaderAction: true` and `hideFilter` to clean up the checkbox column"}),e.jsx("li",{children:"• The `onChangeCheckboxRowSelection` callback provides three parameters: selected rows, deselected rows, and select all status"}),e.jsx("li",{children:"• When `isSelectAll` is true, individual selections are tracked as deselected rows"}),e.jsx("li",{children:"• You can implement bulk actions using the selection state"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950",children:[e.jsx("h3",{className:"font-semibold text-yellow-900 dark:text-yellow-200 mb-2",children:"⚠️ Important Notes"}),e.jsxs("ul",{className:"text-sm text-yellow-800 dark:text-yellow-300 space-y-1",children:[e.jsx("li",{children:"• The `row-selection` key is reserved for checkbox functionality"}),e.jsx("li",{children:"• Make sure your `rowKey` is unique for each row"}),e.jsx("li",{children:"• Selection state is managed internally by the component"}),e.jsx("li",{children:"• Use the callback to sync with your application state"})]})]})]})]}),H=n.memo(R),E=()=>{const[t,s]=n.useState([]),[i,l]=n.useState([]),[r,c]=n.useState(!1),d=n.useCallback((m,h,x)=>{s(m),l(h),c(x)},[]);return{selectedRows:t,deselectedRows:i,isSelectAll:r,handleCheckboxSelection:d}},D=()=>{const t=n.useMemo(()=>j(),[]),{selectedRows:s,deselectedRows:i,isSelectAll:l,handleCheckboxSelection:r}=E();return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Checkbox Selection"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement checkbox selection in your virtual table with individual row selection and select all functionality."})]}),e.jsx(A,{deselectedRows:i,isSelectAll:l,selectedRows:s}),e.jsx(N,{data:t,onCheckboxSelection:r}),e.jsx(k,{}),e.jsx(H,{}),e.jsx(f,{})]})},U=n.memo(D);export{U as default};
//# sourceMappingURL=index-zb5pdYS-.js.map
