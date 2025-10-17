export const CODE_EXAMPLES = {
  basicExpand: `import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
};`,

  nestedTable: `import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
};`,

  customToggle: `import { KnittoTable, type IHeader } from '@knitto/virtual-table';

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
};`,
};

