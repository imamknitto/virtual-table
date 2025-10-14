import{j as e}from"./index-BRWBM3tW.js";import{r as n,L as l}from"./router-BDK15HzG.js";import{c as o}from"./utils-BrsFTMAM.js";import{V as b}from"./virtual-table-CEJfn5i2.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const y=t=>{switch(t){case"active":return{bg:"bg-green-100 dark:bg-green-900",text:"text-green-800 dark:text-green-200",label:"Active"};case"inactive":return{bg:"bg-red-100 dark:bg-red-900",text:"text-red-800 dark:text-red-200",label:"Inactive"};case"pending":return{bg:"bg-yellow-100 dark:bg-yellow-900",text:"text-yellow-800 dark:text-yellow-200",label:"Pending"};default:return{bg:"bg-gray-100 dark:bg-gray-800",text:"text-gray-800 dark:text-gray-200",label:"Unknown"}}},d=n.memo(({status:t})=>{const s=y(t);return e.jsx("span",{className:o("px-2 py-1 rounded-full text-xs font-medium",s.bg,s.text),children:s.label})});d.displayName="StatusBadge";const c=n.memo(({value:t})=>e.jsxs("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:[e.jsx("div",{className:o("h-2 rounded-full transition-all duration-300",{"bg-red-500":t<70,"bg-yellow-500":t>=70&&t<85,"bg-green-500":t>=85}),style:{width:`${t}%`}}),e.jsxs("span",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1 block",children:[t,"%"]})]}));c.displayName="ProgressBar";const m=n.memo(({name:t})=>{const s=t.split(" ").map(a=>a[0]).join("").toUpperCase();return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium",children:s}),e.jsx("span",{className:"font-medium",children:t})]})});m.displayName="AvatarCell";const u=n.memo(({salary:t})=>e.jsxs("span",{className:"font-mono text-green-600 dark:text-green-400",children:["$",t.toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})]}));u.displayName="SalaryCell";const p=n.memo(({skills:t})=>e.jsx("div",{className:"flex flex-wrap gap-1",children:t.map((s,a)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md border border-blue-200 dark:border-blue-700",children:s},a))}));p.displayName="SkillsTags";const x=n.memo(({employee:t})=>{const[s,a]=n.useState(!1),r=()=>{a(!s),console.log(s?"Saving employee:":"Editing employee:",t)},i=()=>{console.log("Deleting employee:",t)};return e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-xs rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors",onClick:r,children:s?"Save":"Edit"}),e.jsx("button",{className:"px-3 py-1 bg-red-500 dark:bg-red-600 text-white text-xs rounded hover:bg-red-600 dark:hover:bg-red-700 transition-colors",onClick:i,children:"Delete"})]})});x.displayName="ActionButtons";const f=({title:t,code:s})=>e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:s})})]}),j=n.memo(f),v=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"What's Included"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Custom Components"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Status badges with color coding"}),e.jsx("li",{children:"• Progress bars with dynamic colors"}),e.jsx("li",{children:"• Avatar cells with initials"}),e.jsx("li",{children:"• Action buttons with state management"}),e.jsx("li",{children:"• Skills tags and formatted values"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"⚡ Performance & Styling"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Efficient virtualization with custom cells"}),e.jsx("li",{children:"• Conditional styling based on data"}),e.jsx("li",{children:"• Lightweight components for optimal performance"}),e.jsx("li",{children:"• TypeScript support with proper typing"}),e.jsx("li",{children:"• Responsive design patterns"})]})]})]})]}),w=n.memo(v),k=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"💡 Implementation Tips"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Here are some best practices for creating custom cells:"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Custom Cell Rendering"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• Use ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"renderCell"})," prop for custom content"]}),e.jsxs("li",{children:["• Access row data:"," ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"renderCell: (data) => <Component />"})]}),e.jsx("li",{children:"• Keep components lightweight for performance"}),e.jsx("li",{children:"• Use React.memo for complex components"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Conditional Styling"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsxs("li",{children:["• Use ",e.jsx("code",{className:"bg-muted px-1 rounded",children:"classNameCell"})," for dynamic styling"]}),e.jsx("li",{children:"• Apply styles based on data values"}),e.jsx("li",{children:"• Consider row and column indices"}),e.jsx("li",{children:"• Use Tailwind CSS for consistent styling"})]})]})]})]})}),N=n.memo(k),C=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/header-customization",children:"Header Customization"}),e.jsx(l,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/expand-row",children:"Expand Rows"}),e.jsx(l,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/footer",children:"Footer"})]})]})}),S=n.memo(C),D=[{id:1,name:"John Doe",position:"Senior Developer",department:"Engineering",salary:85e3,status:"active",joinDate:"2022-01-15",performance:92,skills:["React","TypeScript","Node.js"]},{id:2,name:"Jane Smith",position:"Product Manager",department:"Product",salary:95e3,status:"active",joinDate:"2021-08-20",performance:88,skills:["Strategy","Analytics","Leadership"]},{id:3,name:"Mike Johnson",position:"UI/UX Designer",department:"Design",salary:75e3,status:"pending",joinDate:"2023-03-10",performance:85,skills:["Figma","Adobe XD","Prototyping"]},{id:4,name:"Sarah Wilson",position:"Data Analyst",department:"Analytics",salary:7e4,status:"inactive",joinDate:"2020-11-05",performance:78,skills:["Python","SQL","Tableau"]},{id:5,name:"David Brown",position:"DevOps Engineer",department:"Engineering",salary:9e4,status:"active",joinDate:"2022-06-12",performance:94,skills:["AWS","Docker","Kubernetes"]}],A=`// Custom Cell Rendering Examples

// 1. Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-100', text: 'text-green-800', label: 'Active' };
      case 'inactive':
        return { bg: 'bg-red-100', text: 'text-red-800', label: 'Inactive' };
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Unknown' };
    }
  };

  const config = getStatusConfig(status);
  return (
    <span className={\`px-2 py-1 rounded-full text-xs font-medium \${config.bg} \${config.text}\`}>
      {config.label}
    </span>
  );
};

// 2. Progress Bar Component
const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className={\`h-2 rounded-full transition-all duration-300 \${
        value < 70 ? 'bg-red-500' : value < 85 ? 'bg-yellow-500' : 'bg-green-500'
      }\`}
      style={{ width: \`\${value}%\` }}
    />
    <span className="text-xs text-gray-600 mt-1 block">{value}%</span>
  </div>
);

// 3. Avatar with Initials
const AvatarCell = ({ name }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
        {initials}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

// 4. Header Configuration with Custom Render
const headers: IHeader<Employee>[] = [
    { key: 'row-selection', caption: '', width: 50 },
    {
      key: 'name',
      caption: 'Employee',
      width: 200,
      renderCell: (employee) => <AvatarCell name={employee.name} />,
    },
    { key: 'position', caption: 'Position', width: 150 },
    {
      key: 'department',
      caption: 'Department',
      width: 120,
      renderCell: (employee) => <span className='font-medium text-blue-600'>{employee.department}</span>,
    },
    {
      key: 'salary',
      caption: 'Salary',
      width: 120,
      renderCell: (employee) => <SalaryCell salary={employee.salary} />,
    },
    {
      key: 'status',
      caption: 'Status',
      width: 100,
      renderCell: (employee) => <StatusBadge status={employee.status} />,
    },
    {
      key: 'performance',
      caption: 'Performance',
      width: 150,
      renderCell: (employee) => <ProgressBar value={employee.performance} />,
    },
    {
      key: 'skills',
      caption: 'Skills',
      width: 200,
      renderCell: (employee) => <SkillsTags skills={employee.skills} />,
    },
    {
      key: 'joinDate',
      caption: 'Join Date',
      width: 120,
      renderCell: (employee) => (
        <span className='text-sm text-gray-600'>{new Date(employee.joinDate).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'action',
      caption: 'Actions',
      width: 150,
      renderCell: (employee) => <ActionButtons employee={employee} />,
    },
  ];

// 5. Virtual Table with Custom Cells
<VirtualTable
  headers={headers}
  data={sampleData}
  rowKey='id'
  headerMode='double'
  rowHeight={70}
  headerHeight={40}
  filterHeight={32}
  classNameCell={(data, rowIndex, columnIndex) => {
      // Custom cell styling examples
      if (columnIndex === 4) return 'bg-blue-50'; // Department column
      if (data.status === 'inactive') return 'opacity-60';
      // Add some visual feedback for even/odd rows
      if (rowIndex % 2 === 0) return 'bg-gray-50';
    return '';
  }}
/>`,P=()=>[{key:"row-selection",caption:"",width:50},{key:"name",caption:"Employee",width:200,renderCell:t=>e.jsx(m,{name:t.name})},{key:"position",caption:"Position",width:150},{key:"department",caption:"Department",width:120,renderCell:t=>e.jsx("span",{className:"font-medium text-blue-600 dark:text-blue-400",children:t.department})},{key:"salary",caption:"Salary",width:120,renderCell:t=>e.jsx(u,{salary:t.salary})},{key:"status",caption:"Status",width:100,renderCell:t=>e.jsx(d,{status:t.status})},{key:"performance",caption:"Performance",width:150,renderCell:t=>e.jsx(c,{value:t.performance})},{key:"skills",caption:"Skills",width:200,renderCell:t=>e.jsx(p,{skills:t.skills})},{key:"joinDate",caption:"Join Date",width:120,renderCell:t=>e.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400",children:new Date(t.joinDate).toLocaleDateString()})},{key:"action",caption:"Actions",width:150,renderCell:t=>e.jsx(x,{employee:t})}],E=({data:t})=>{const[s,a]=n.useState(!1),r=P();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Preview"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>a(!s),children:s?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"h-96",children:e.jsx(b,{classNameCell:(i,g,h)=>h===4?"bg-blue-50 dark:bg-blue-950":i.status==="inactive"?"opacity-60":g%2===0?"bg-gray-50 dark:bg-gray-900":"",data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:r,rowHeight:70,rowKey:"id"})}),s&&e.jsx(j,{code:A,title:"Custom Cell Rendering Example"})]})},B=n.memo(E),I=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Custom Cell Rendering"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to create custom cell components for the Virtual Table. Custom cell rendering allows you to display rich content like badges, progress bars, buttons, and more."})]}),e.jsx(B,{data:D}),e.jsx(w,{}),e.jsx(N,{}),e.jsx(S,{})]}),F=n.memo(I);export{F as default};
//# sourceMappingURL=index-C0aU4M6T.js.map
