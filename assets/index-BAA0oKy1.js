import{j as e}from"./index-D9Yh-vIY.js";import{r as s,L as i}from"./router-BDK15HzG.js";import{V as o}from"./virtual-table-BKF0fMpz.js";import{f as n}from"./chunk-4X5ZEQ5K-B-QA3Nks.js";import"./utils-BrsFTMAM.js";import"./vendor-1zw1pNgy.js";import"./virtual-C9-IbyhX.js";const x=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"API Reference"}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:"Expand Row Props"})}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"onRenderExpandedContent"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Function that renders the expanded content for each row."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"onRenderExpandedContent?: (item: TData) => React.ReactNode"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"renderExpandToggle"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Custom function to render the expand/collapse toggle button."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"renderExpandToggle?: (item: TData, isExpanded: boolean) => React.ReactNode"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"onRowExpand"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Callback function called when a row is expanded or collapsed."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"onRowExpand?: (item: TData) => void"})]})]})]})]}),h=s.memo(x),u=()=>Array.from({length:20},(t,a)=>({id:a+1,name:n.person.fullName(),email:n.internet.email(),department:n.commerce.department(),position:n.person.jobTitle(),salary:n.number.int({min:3e4,max:15e4}),startDate:n.date.past({years:5}).toISOString().split("T")[0],phone:n.phone.number(),address:n.location.streetAddress(),city:n.location.city(),country:n.location.country(),skills:n.helpers.arrayElements(["React","TypeScript","Node.js","Python","Java","C#","Go","Rust"],{min:2,max:5}),projects:Array.from({length:n.number.int({min:1,max:4})},()=>({name:n.company.buzzPhrase(),status:n.helpers.arrayElement(["Active","Completed","On Hold"]),progress:n.number.int({min:0,max:100})}))})),b=()=>Array.from({length:15},(t,a)=>({id:a+1,companyName:n.company.name(),industry:n.commerce.department(),revenue:n.number.int({min:1e6,max:1e8}),employees:n.number.int({min:10,max:1e3}),founded:n.date.past({years:50}).getFullYear(),ceo:n.person.fullName(),headquarters:n.location.city(),departments:Array.from({length:n.number.int({min:3,max:8})},()=>({name:n.commerce.department(),manager:n.person.fullName(),employees:n.number.int({min:5,max:50}),budget:n.number.int({min:1e5,max:5e6}),teams:Array.from({length:n.number.int({min:2,max:5})},()=>({name:n.company.buzzPhrase(),lead:n.person.fullName(),members:n.number.int({min:3,max:15}),projects:n.number.int({min:1,max:8}),status:n.helpers.arrayElement(["Active","Inactive","Planning"])}))}))})),g=()=>[{key:"expand",caption:"",width:50},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`},{key:"startDate",caption:"Start Date",width:120}],y=()=>[{key:"expand",caption:"",width:100,renderExpandToggle:(t,a)=>e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("button",{"data-action":"expand",className:`px-1 py-1 rounded text-xs font-medium transition-colors ${a?"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800":"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"}`,type:"button","aria-label":a?"Collapse row":"Expand row",children:a?"Hide Details":"Show Details"})})},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`}],f=()=>[{key:"expand",caption:"",width:50},{key:"companyName",caption:"Company",width:200},{key:"industry",caption:"Industry",width:150},{key:"revenue",caption:"Revenue",width:150,renderCell:t=>`$${(t.revenue/1e6).toFixed(1)}M`},{key:"employees",caption:"Employees",width:120},{key:"founded",caption:"Founded",width:100},{key:"ceo",caption:"CEO",width:180},{key:"headquarters",caption:"Headquarters",width:150}],j=()=>[{key:"expand",caption:"",width:50},{key:"name",caption:"Department",width:200},{key:"manager",caption:"Manager",width:200},{key:"employees",caption:"Employees",width:120,renderCell:t=>t.employees.toString()},{key:"budget",caption:"Budget",width:150,renderCell:t=>`$${t.budget.toLocaleString()}`}],v=()=>[{key:"name",caption:"Team Name",width:200},{key:"lead",caption:"Team Lead",width:180},{key:"members",caption:"Members",width:100,renderCell:t=>t.members.toString()},{key:"projects",caption:"Projects",width:100,renderCell:t=>t.projects.toString()},{key:"status",caption:"Status",width:120,renderCell:t=>e.jsx("span",{className:`px-2 py-1 rounded text-xs ${t.status==="Active"?"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200":t.status==="Inactive"?"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200":"bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"}`,children:t.status})}],l={basicExpand:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const EmployeeTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'expand', caption: '', width: 50 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'department', caption: 'Department', width: 150 },
    { key: 'position', caption: 'Position', width: 180 },
    { 
      key: 'salary', 
      caption: 'Salary', 
      width: 120, 
      renderCell: (item) => \`$\${item.salary.toLocaleString()}\` 
    },
    { key: 'startDate', caption: 'Start Date', width: 120 },
  ];

  const renderExpandedContent = (employee) => (
    <div className="p-4 bg-gray-50 border-l-4 border-blue-500">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-lg mb-3">Personal Information</h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Phone:</span> {employee.phone}</div>
            <div><span className="font-medium">Address:</span> {employee.address}</div>
            <div><span className="font-medium">City:</span> {employee.city}</div>
            <div><span className="font-medium">Country:</span> {employee.country}</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Skills & Projects</h4>
          {/* Skills and projects content */}
        </div>
      </div>
    </div>
  );

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`,nestedTable:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const CompanyTable = () => {
  const [data] = useState(generateCompanyData());

  const renderExpandedContent = (company) => {
    const departmentHeaders: IHeader<(typeof company.departments)[0]>[] = [
      { key: 'expand', caption: '', width: 50 },
      { key: 'name', caption: 'Department', width: 200 },
      { key: 'manager', caption: 'Manager', width: 200 },
      { key: 'employees', caption: 'Employees', width: 120 },
      { key: 'budget', caption: 'Budget', width: 150 },
    ];

    const renderDepartmentTeams = (department) => (
      <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
        <h5 className="font-medium text-sm mb-3">{department.name} Teams</h5>
        <div className="h-48">
          <VirtualTable
            headers={teamHeaders}
            data={department.teams}
            rowKey="name"
            headerMode="single"
            rowHeight={24}
            headerHeight={28}
          />
        </div>
      </div>
    );

    return (
      <div className="p-4 bg-gray-50 border-l-4 border-green-500">
        <h4 className="font-semibold text-lg mb-4">Company Departments</h4>
        <div className="h-64">
          <VirtualTable
            headers={departmentHeaders}
            data={company.departments}
            rowKey="name"
            onRenderExpandedContent={renderDepartmentTeams}
          />
        </div>
      </div>
    );
  };

  return (
    <VirtualTable
      headers={companyHeaders}
      data={data}
      rowKey="id"
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`,customToggle:`import { VirtualTable, type IHeader } from '@knitto/virtual-table';

const CustomExpandTable = () => {
  const [data] = useState(generateEmployeeData());

  const headers: IHeader<(typeof data)[0]>[] = [
    { 
      key: 'expand', 
      caption: '', 
      width: 80,
      renderExpandToggle: (item, isExpanded) => (
        <div className="flex justify-center items-center w-full h-full">
          <button
            data-action="expand"
            className={\`px-3 py-1 rounded text-xs font-medium transition-colors \${
              isExpanded 
                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
            }\`}
            type="button"
            aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
          >
            {isExpanded ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      )
    },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
    { key: 'department', caption: 'Department', width: 150 },
  ];

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`},w=({title:t,code:a})=>e.jsxs("div",{className:"mt-4 border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:a})})]}),c=s.memo(w),m=t=>e.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-400",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200",children:"Personal Information"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Phone:"})," ",t.phone]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Address:"})," ",t.address]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"City:"})," ",t.city]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Country:"})," ",t.country]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200",children:"Skills & Projects"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-sm",children:"Skills:"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:t.skills.map((a,r)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full",children:a},r))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-sm",children:"Current Projects:"}),e.jsx("div",{className:"mt-1 space-y-1",children:t.projects.map((a,r)=>e.jsxs("div",{className:"text-xs",children:[e.jsx("span",{className:"font-medium",children:a.name}),e.jsx("span",{className:`ml-2 px-2 py-0.5 rounded text-xs ${a.status==="Active"?"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200":a.status==="Completed"?"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200":"bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"}`,children:a.status}),e.jsxs("div",{className:"mt-1",children:[e.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5",children:e.jsx("div",{className:"bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full",style:{width:`${a.progress}%`}})}),e.jsxs("span",{className:"text-xs text-gray-600 dark:text-gray-400",children:[a.progress,"%"]})]})]},r))})]})]})]})]})}),N=({data:t})=>{const[a,r]=s.useState(!1),d=g();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Expand Row"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with expandable rows showing detailed personal information, skills, and current projects."]})}),e.jsx("div",{className:"h-96",children:e.jsx(o,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:d,onRenderExpandedContent:m,rowHeight:32,rowKey:"id"})}),a&&e.jsx(c,{code:l.basicExpand,title:"Basic Expand Row Example"})]})},k=s.memo(N),C=({data:t})=>{const[a,r]=s.useState(!1),d=y();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Custom Expand Toggle"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-purple-800 dark:text-purple-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with custom expand toggle buttons instead of default chevron icons."]})}),e.jsx("div",{className:"h-96",children:e.jsx(o,{data:t.slice(0,10),filterHeight:32,headerHeight:40,headerMode:"double",headers:d,onRenderExpandedContent:m,rowHeight:32,rowKey:"id"})}),a&&e.jsx(c,{code:l.customToggle,title:"Custom Expand Toggle Example"})]})},E=s.memo(C),S=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Expand Row Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Core Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Click expand button to show/hide row details"}),e.jsx("li",{children:"• Custom expand content with any React components"}),e.jsx("li",{children:"• Nested tables and complex layouts supported"}),e.jsx("li",{children:"• Smooth expand/collapse animations"}),e.jsx("li",{children:"• Virtual scrolling works with expanded rows"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Custom expand toggle buttons"}),e.jsx("li",{children:"• Flexible content rendering"}),e.jsx("li",{children:"• Styled expand content areas"}),e.jsx("li",{children:"• Integration with existing table features"}),e.jsx("li",{children:"• TypeScript support for all props"})]})]})]})]}),H=s.memo(S),T=t=>{const a=j(),r=d=>{const p=v();return e.jsxs("div",{className:"p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-500 ml-4",children:[e.jsxs("h5",{className:"font-medium text-sm mb-3 text-blue-800 dark:text-blue-200",children:[d.name," Teams"]}),e.jsx("div",{className:"h-48",children:e.jsx(o,{data:d.teams,headerHeight:28,headerMode:"single",headers:p,hideHeader:!1,rowHeight:24,rowKey:"name"})})]})};return e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-green-500 dark:border-green-400",children:[e.jsx("h4",{className:"font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200",children:"Company Departments"}),e.jsx("div",{className:"h-64",children:e.jsx(o,{data:t.departments,headerHeight:32,headerMode:"single",headers:a,hideHeader:!1,onRenderExpandedContent:r,rowHeight:28,rowKey:"name"})})]})},D=({data:t})=>{const[a,r]=s.useState(!1),d=f();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Nested Table in Expand Row"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-800 dark:text-green-200",children:[e.jsx("strong",{children:"Example:"})," Company table with expandable rows containing nested VirtualTable components. Each department can be expanded to show teams, demonstrating recursive expand functionality."]})}),e.jsx("div",{className:"h-96",children:e.jsx(o,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:d,onRenderExpandedContent:T,rowHeight:32,rowKey:"id"})}),a&&e.jsx(c,{code:l.nestedTable,title:"Nested Table Example"})]})},R=s.memo(D),$=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(i,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(i,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(i,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/header-customization",children:"Header Customization"})]})]})}),P=s.memo($),A=()=>{const t=s.useMemo(()=>u(),[]),a=s.useMemo(()=>b(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Expand Row"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement expandable rows in your virtual table with detailed content, nested tables, and custom expand toggles."})]}),e.jsx(k,{data:t}),e.jsx(R,{data:a}),e.jsx(E,{data:t}),e.jsx(H,{}),e.jsx(h,{}),e.jsx(P,{})]})},B=s.memo(A);export{B as default};
//# sourceMappingURL=index-BAA0oKy1.js.map
