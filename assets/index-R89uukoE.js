import{j as e}from"./index-DdrOnBXB.js";import{r as n,L as s}from"./router-CkuGn6NB.js";import{V as l}from"./virtual-table-CcC802ag.js";import{f as t}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-DWDUgH9Z.js";import"./vendor-1zw1pNgy.js";import"./virtual-HUy1ZbEG.js";const c=({code:i,title:o})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:o})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:i})})]}),d=n.memo(c),m=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"What's Included"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Core Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Virtual scrolling for performance"}),e.jsx("li",{children:"• Column resizing"}),e.jsx("li",{children:"• Sorting (click column headers)"}),e.jsx("li",{children:"• Search functionality"}),e.jsx("li",{children:"• Filter visibility toggle"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Custom cell rendering"}),e.jsx("li",{children:"• Configurable row heights"}),e.jsx("li",{children:"• Header modes (single/double)"}),e.jsx("li",{children:"• Responsive design"}),e.jsx("li",{children:"• TypeScript support"})]})]})]})]}),h=n.memo(m),p=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(s,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(s,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/large-dataset",children:"Large Dataset"})]})]})}),u=n.memo(p),x=`import { VirtualTable, type IHeader } from '@knitto/virtual-table';
import { faker } from '@faker-js/faker';

// Generate sample data
const generateSampleData = () => {
  return Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    country: faker.location.country(),
    salary: faker.number.int({ min: 30000, max: 150000 }),
  }));
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
};`,b=()=>Array.from({length:50},(i,o)=>({id:o+1,name:t.person.fullName(),email:t.internet.email(),company:t.company.name(),position:t.person.jobTitle(),phone:t.phone.number(),address:t.location.streetAddress(),city:t.location.city(),country:t.location.country(),salary:t.number.int({min:3e4,max:15e4})})),f=()=>[{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"company",caption:"Company",width:200},{key:"position",caption:"Position",width:180},{key:"phone",caption:"Phone",width:150},{key:"city",caption:"City",width:150},{key:"country",caption:"Country",width:120},{key:"salary",caption:"Salary",width:120,renderCell:i=>`$${i.salary.toLocaleString()}`}],g=({data:i})=>{const[o,r]=n.useState(!1),a=f();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!o),children:o?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(l,{data:i,filterHeight:32,headerHeight:40,headerMode:"double",headers:a,rowHeight:32,rowKey:"id"})}),o&&e.jsx("div",{className:"mt-4",children:e.jsx(d,{code:x,title:"Basic Usage Example"})})]})},y=n.memo(g),j=()=>{const i=n.useMemo(()=>b(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Basic Usage"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Here's a simple example of how to use Knitto Table with sample data."})]}),e.jsx(y,{data:i}),e.jsx(h,{}),e.jsx(u,{})]})},E=n.memo(j);export{E as default};
//# sourceMappingURL=index-R89uukoE.js.map
