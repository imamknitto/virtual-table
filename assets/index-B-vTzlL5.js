import{r as n,j as e,L as c}from"./react-vendor-D4DhKJk1.js";import{K as i}from"./knitto-table-EXajlcu1.js";import{q as y,a as s,c as f,b as d,r as j,S as v,d as x,p as w,e as N,f as k,h,j as E,k as l,n as C,i as S}from"./constants-GooGu_-H.js";import"./vendor-Cg9Cit0c.js";import"./knitto-context-CKMZEWjS.js";import"./knitto-hooks-L0VXpnq7.js";import"./utils-B-dksMZM.js";import"./knitto-icons-DxxDW9og.js";const T=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"API Reference"}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:"Expand Row Props"})}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"onRenderExpandedContent"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Function that renders the expanded content for each row."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"onRenderExpandedContent?: (item: TData) => React.ReactNode"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"renderExpandToggle"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Custom function to render the expand/collapse toggle button."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"renderExpandToggle?: (item: TData, isExpanded: boolean) => React.ReactNode"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-sm mb-2",children:"onRowExpand"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Callback function called when a row is expanded or collapsed."}),e.jsx("code",{className:"text-xs bg-muted px-2 py-1 rounded",children:"onRowExpand?: (item: TData) => void"})]})]})]})]}),H=n.memo(T),u=["E-commerce Platform","Mobile App Development","Data Analytics Dashboard","Cloud Migration","API Integration","UI/UX Redesign","Security Audit","Performance Optimization","Feature Enhancement","Bug Fix Sprint"],R=["Active","Completed","On Hold"],A=["Active","Inactive","Planning"],D=()=>Array.from({length:20},(t,a)=>({id:a+1,name:s(l),email:s(E),department:s(h),position:s(k),salary:d(3e4,15e4),startDate:f(5),phone:s(N),address:s(w),city:s(x),country:s(v),skills:y(j,2,5),projects:Array.from({length:d(1,4)},()=>({name:s(u),status:s(R),progress:d(0,100)}))})),P=()=>Array.from({length:15},(t,a)=>({id:a+1,companyName:s(S),industry:s(C),revenue:d(1e6,1e8),employees:d(10,1e3),founded:d(1970,2020),ceo:s(l),headquarters:s(x),departments:Array.from({length:d(3,8)},()=>({name:s(h),manager:s(l),employees:d(5,50),budget:d(1e5,5e6),teams:Array.from({length:d(2,5)},()=>({name:s(u),lead:s(l),members:d(3,15),projects:d(1,8),status:s(A)}))}))})),M=()=>[{key:"expand",caption:"",width:50},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`},{key:"startDate",caption:"Start Date",width:120}],I=()=>[{key:"expand",caption:"",width:100,renderExpandToggle:(t,a)=>e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("button",{"data-action":"expand",className:`px-1 py-1 rounded text-xs font-medium transition-colors ${a?"bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800":"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"}`,type:"button","aria-label":a?"Collapse row":"Expand row",children:a?"Hide Details":"Show Details"})})},{key:"name",caption:"Name",width:200},{key:"email",caption:"Email",width:250},{key:"department",caption:"Department",width:150},{key:"position",caption:"Position",width:180},{key:"salary",caption:"Salary",width:120,renderCell:t=>`$${t.salary.toLocaleString()}`}],L=()=>[{key:"expand",caption:"",width:50},{key:"companyName",caption:"Company",width:200},{key:"industry",caption:"Industry",width:150},{key:"revenue",caption:"Revenue",width:150,renderCell:t=>`$${(t.revenue/1e6).toFixed(1)}M`},{key:"employees",caption:"Employees",width:120},{key:"founded",caption:"Founded",width:100},{key:"ceo",caption:"CEO",width:180},{key:"headquarters",caption:"Headquarters",width:150}],K=()=>[{key:"expand",caption:"",width:50},{key:"name",caption:"Department",width:200},{key:"manager",caption:"Manager",width:200},{key:"employees",caption:"Employees",width:120,renderCell:t=>t.employees.toString()},{key:"budget",caption:"Budget",width:150,renderCell:t=>`$${t.budget.toLocaleString()}`}],$=()=>[{key:"name",caption:"Team Name",width:200},{key:"lead",caption:"Team Lead",width:180},{key:"members",caption:"Members",width:100,renderCell:t=>t.members.toString()},{key:"projects",caption:"Projects",width:100,renderCell:t=>t.projects.toString()},{key:"status",caption:"Status",width:120,renderCell:t=>e.jsx("span",{className:`px-2 py-1 rounded text-xs ${t.status==="Active"?"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200":t.status==="Inactive"?"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200":"bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"}`,children:t.status})}],m={basicExpand:`import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
    <KnittoTable
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
};`,nestedTable:`import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
          <KnittoTable
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
          <KnittoTable
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
    <KnittoTable
      headers={companyHeaders}
      data={data}
      rowKey="id"
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`,customToggle:`import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
    <KnittoTable
      headers={headers}
      data={data}
      rowKey="id"
      onRenderExpandedContent={renderExpandedContent}
    />
  );
};`},_=({title:t,code:a})=>e.jsxs("div",{className:"mt-4 border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"bg-muted px-4 py-2 border-b",children:e.jsx("span",{className:"text-sm font-medium",children:t})}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-background",children:e.jsx("code",{className:"text-sm",children:a})})]}),p=n.memo(_),b=t=>e.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-400",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200",children:"Personal Information"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Phone:"})," ",t.phone]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Address:"})," ",t.address]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"City:"})," ",t.city]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"Country:"})," ",t.country]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200",children:"Skills & Projects"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-sm",children:"Skills:"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:t.skills.map((a,r)=>e.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full",children:a},r))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-sm",children:"Current Projects:"}),e.jsx("div",{className:"mt-1 space-y-1",children:t.projects.map((a,r)=>e.jsxs("div",{className:"text-xs",children:[e.jsx("span",{className:"font-medium",children:a.name}),e.jsx("span",{className:`ml-2 px-2 py-0.5 rounded text-xs ${a.status==="Active"?"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200":a.status==="Completed"?"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200":"bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"}`,children:a.status}),e.jsxs("div",{className:"mt-1",children:[e.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5",children:e.jsx("div",{className:"bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full",style:{width:`${a.progress}%`}})}),e.jsxs("span",{className:"text-xs text-gray-600 dark:text-gray-400",children:[a.progress,"%"]})]})]},r))})]})]})]})]})}),F=({data:t})=>{const[a,r]=n.useState(!1),o=M();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Basic Expand Row"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with expandable rows showing detailed personal information, skills, and current projects."]})}),e.jsx("div",{className:"h-96",children:e.jsx(i,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:o,onRenderExpandedContent:b,rowHeight:32,rowKey:"id"})}),a&&e.jsx(p,{code:m.basicExpand,title:"Basic Expand Row Example"})]})},O=n.memo(F),B=({data:t})=>{const[a,r]=n.useState(!1),o=I();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Custom Expand Toggle"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-purple-800 dark:text-purple-200",children:[e.jsx("strong",{children:"Example:"})," Employee table with custom expand toggle buttons instead of default chevron icons."]})}),e.jsx("div",{className:"h-96",children:e.jsx(i,{data:t.slice(0,10),filterHeight:32,headerHeight:40,headerMode:"double",headers:o,onRenderExpandedContent:b,rowHeight:32,rowKey:"id"})}),a&&e.jsx(p,{code:m.customToggle,title:"Custom Expand Toggle Example"})]})},z=n.memo(B),U=()=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight mb-4",children:"Expand Row Features"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"✅ Core Features"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Click expand button to show/hide row details"}),e.jsx("li",{children:"• Custom expand content with any React components"}),e.jsx("li",{children:"• Nested tables and complex layouts supported"}),e.jsx("li",{children:"• Smooth expand/collapse animations"}),e.jsx("li",{children:"• Virtual scrolling works with expanded rows"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"🎨 Customization"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• Custom expand toggle buttons"}),e.jsx("li",{children:"• Flexible content rendering"}),e.jsx("li",{children:"• Styled expand content areas"}),e.jsx("li",{children:"• Integration with existing table features"}),e.jsx("li",{children:"• TypeScript support for all props"})]})]})]})]}),q=n.memo(U),J=t=>{const a=K(),r=o=>{const g=$();return e.jsxs("div",{className:"p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-400 dark:border-blue-500 ml-4",children:[e.jsxs("h5",{className:"font-medium text-sm mb-3 text-blue-800 dark:text-blue-200",children:[o.name," Teams"]}),e.jsx("div",{className:"h-48",children:e.jsx(i,{data:o.teams,headerHeight:28,headerMode:"single",headers:g,hideHeader:!1,rowHeight:24,rowKey:"name"})})]})};return e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-900 border-l-4 border-green-500 dark:border-green-400",children:[e.jsx("h4",{className:"font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200",children:"Company Departments"}),e.jsx("div",{className:"h-64",children:e.jsx(i,{data:t.departments,headerHeight:32,headerMode:"single",headers:a,hideHeader:!1,onRenderExpandedContent:r,rowHeight:28,rowKey:"name"})})]})},X=({data:t})=>{const[a,r]=n.useState(!1),o=L();return e.jsxs("section",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Nested Table in Expand Row"}),e.jsx("button",{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",onClick:()=>r(!a),children:a?"Hide Code":"Show Code"})]}),e.jsx("div",{className:"mb-4 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-800 dark:text-green-200",children:[e.jsx("strong",{children:"Example:"})," Company table with expandable rows containing nested KnittoTable components. Each department can be expanded to show teams, demonstrating recursive expand functionality."]})}),e.jsx("div",{className:"h-96",children:e.jsx(i,{data:t,filterHeight:32,headerHeight:40,headerMode:"double",headers:o,onRenderExpandedContent:J,rowHeight:32,rowKey:"id"})}),a&&e.jsx(p,{code:m.nestedTable,title:"Nested Table Example"})]})},G=n.memo(X),V=()=>e.jsx("section",{children:e.jsxs("div",{className:"rounded-lg border bg-muted/50 p-6",children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"🚀 Next Steps"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Ready to explore more advanced features? Check out these examples:"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/checkbox-selection",children:"Checkbox Selection"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/freeze-column",children:"Freeze Columns"}),e.jsx(c,{className:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3",to:"/docs/examples/header-customization",children:"Header Customization"})]})]})}),Q=n.memo(V),W=()=>{const t=n.useMemo(()=>D(),[]),a=n.useMemo(()=>P(),[]);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight",children:"Expand Row"}),e.jsx("p",{className:"text-xl text-muted-foreground mt-4",children:"Learn how to implement expandable rows in your virtual table with detailed content, nested tables, and custom expand toggles."})]}),e.jsx(O,{data:t}),e.jsx(G,{data:a}),e.jsx(z,{data:t}),e.jsx(q,{}),e.jsx(H,{}),e.jsx(Q,{})]})},re=n.memo(W);export{re as default};
//# sourceMappingURL=index-B-vTzlL5.js.map
