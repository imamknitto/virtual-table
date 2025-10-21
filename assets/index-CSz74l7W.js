import{r as i,j as e,L as o}from"./react-vendor-D4DhKJk1.js";import{K as l}from"./knitto-table-BoAivJtR.js";import{a as t,c as d,b as c,o as m,h,S as u,d as x,p,e as f,f as g,i as b,j as y,k as j}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-DinZKU-6.js";import"./knitto-hooks-CAg_E1Mn.js";import"./knitto-icons-DLPAaKXB.js";import"./utils-B-dksMZM.js";const v=({title:s,code:r})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:s})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:r})})]}),S=i.memo(v),N=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Freeze Column Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🔒 Left Freeze"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Keep important columns visible when scrolling horizontally"}),e.jsx("li",{children:"• Perfect for ID, Name, or primary identifiers"}),e.jsx("li",{children:"• Maintains sticky positioning on the left side"}),e.jsx("li",{children:"• Supports custom cell rendering"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🔒 Right Freeze"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Keep action columns or totals always visible"}),e.jsx("li",{children:"• Ideal for status, actions, or calculated values"}),e.jsx("li",{children:"• Sticky positioning on the right side"}),e.jsx("li",{children:"• Works seamlessly with virtual scrolling"})]})]})]})]}),w=i.memo(N),k=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced table features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/expand-row",children:"Expand Rows"}),e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/custom-render-cell",children:"Custom Cells"})]})]})}),E=i.memo(k),C=()=>Array.from({length:50},(s,r)=>({id:r+1,name:t(j),email:t(y),company:t(b),position:t(g),phone:t(f),address:t(p),city:t(x),country:t(u),salary:c(3e4,15e4),department:t(h),startDate:d(5),status:t(m)})),z=()=>[{key:"name",caption:"Name",width:200,freeze:"left"},{key:"email",caption:"Email",width:250},{key:"company",caption:"Company",width:200},{key:"position",caption:"Position",width:180},{key:"phone",caption:"Phone",width:150},{key:"address",caption:"Address",width:200},{key:"city",caption:"City",width:150},{key:"country",caption:"Country",width:120},{key:"department",caption:"Department",width:150},{key:"startDate",caption:"Start Date",width:120},{key:"status",caption:"Status",width:100,freeze:"right"},{key:"salary",caption:"Salary",width:120,freeze:"right",renderCell:s=>`$${s.salary.toLocaleString()}`}],P=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Generate sample data
const generateSampleData = () => {
  return generateEmployeeData(30);
};

const MyTable = () => {
  const [data] = useState(generateSampleData());

  // Define table headers with freeze columns
  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'id', caption: 'ID', width: 80, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200, freeze: 'left' },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      freeze: 'right',
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\`,
    },
  ];

  return (
    <KnittoTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
    />
  );
};`,A=({data:s})=>{const[r,n]=i.useState(!1),a=z();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>n(!r),children:r?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(l,{data:s,filterHeight:32,headerHeight:40,headerMode:"double",headers:a,rowHeight:32,rowKey:"id"})}),r&&e.jsx("div",{className:"mt-4",children:e.jsx(S,{code:P,title:"Freeze Columns Example"})})]})},L=i.memo(A),M=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Usage Guidelines"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"💡 Best Practices"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Left Freeze:"})," Use for primary identifiers (ID, Name) that users need to reference while scrolling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Right Freeze:"})," Use for action buttons, status indicators, or summary data"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance:"})," Freeze columns don't affect virtual scrolling performance"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Responsive:"})," Freeze columns maintain their behavior across different screen sizes"]})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"⚙️ Implementation"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-2",children:[e.jsxs("li",{children:["Add ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"freeze: 'left'"})," or"," ",e.jsx("code",{className:"bg-muted px-1 py-0.5 rounded text-xs",children:"freeze: 'right'"})," to your header configuration"]}),e.jsx("li",{children:"You can have multiple left-freeze columns (they stack from left to right)"}),e.jsx("li",{children:"You can have multiple right-freeze columns (they stack from right to left)"}),e.jsx("li",{children:"Regular columns scroll normally between the frozen sections"})]})]})]})]}),D=i.memo(M),F=()=>{const s=i.useMemo(()=>C(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Freeze Columns"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to freeze columns on the left or right side of your table for better data navigation."})]}),e.jsx(L,{data:s}),e.jsx(w,{}),e.jsx(D,{}),e.jsx(E,{})]})},O=i.memo(F);export{O as default};
//# sourceMappingURL=index-CSz74l7W.js.map
