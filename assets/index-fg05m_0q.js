import{r as i,j as e,L as o}from"./react-vendor-D4DhKJk1.js";import{K as a}from"./knitto-table-BdyQsNAM.js";import{g as l}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-mnZ17s7N.js";import"./knitto-hooks-QoacNkhm.js";import"./utils-B-dksMZM.js";import"./knitto-icons-DxxDW9og.js";const d=({code:t,title:s})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:s})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:t})})]}),c=i.memo(d),m=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"What's Included"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Core Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Virtual scrolling for performance"}),e.jsx("li",{children:"• Column resizing"}),e.jsx("li",{children:"• Sorting (click column headers)"}),e.jsx("li",{children:"• Search functionality"}),e.jsx("li",{children:"• Filter visibility toggle"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Custom cell rendering"}),e.jsx("li",{children:"• Configurable row heights"}),e.jsx("li",{children:"• Header modes (single/double)"}),e.jsx("li",{children:"• Responsive design"}),e.jsx("li",{children:"• TypeScript support"})]})]})]})]}),h=i.memo(m),x=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(o,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/large-dataset",children:"Large Dataset"})]})]})}),p=i.memo(x),u=`import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Generate sample data
const generateSampleData = () => {
  return generateEmployeeData(20);
};

const MyTable = () => {
  const [data] = useState(generateSampleData());

  // Define table headers
  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 180 },
    { key: 'phone', caption: 'Phone', width: 150 },
    { key: 'city', caption: 'City', width: 150 },
    { key: 'country', caption: 'Country', width: 120 },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
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
};`,g=()=>[{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"company",caption:"Company",width:200},{key:"position",caption:"Position",width:180},{key:"phone",caption:"Phone",width:150},{key:"city",caption:"City",width:150},{key:"country",caption:"Country",width:120},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`}],b=({data:t})=>{const[s,n]=i.useState(!1),r=g();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>n(!s),children:s?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(a,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:r,rowHeight:32,rowKey:"id"})}),s&&e.jsx("div",{className:"mt-4",children:e.jsx(c,{code:u,title:"Basic Usage Example"})})]})},y=i.memo(b),f=()=>{const t=i.useMemo(()=>l(50),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Basic Usage"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Here's a simple example of how to use Knitto Table with sample data."})]}),e.jsx(y,{data:t}),e.jsx(h,{}),e.jsx(p,{})]})},H=i.memo(f);export{H as default};
//# sourceMappingURL=index-fg05m_0q.js.map
