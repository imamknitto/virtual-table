import React, { useMemo } from 'react';
import { KnittoTable, type IHeader } from '../../components/knitto-table';
import { generateEmployeeData, type Employee } from '../../lib/constants';

const employeeHeaders = (): IHeader<Employee>[] => [
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
    renderCell: (item) => `$${item.salary.toLocaleString()}`,
  },
];

function RegularTable() {
  const data = useMemo(() => generateEmployeeData(100), []);

  return (
    <div className='h-96'>
      <KnittoTable
        data={data}
        filterHeight={32}
        headerHeight={40}
        headerMode='double'
        headers={employeeHeaders()}
        rowHeight={32}
        rowKey='id'
        useRegularTable
        useFooter
      />
    </div>
  );
}

export default RegularTable;
