import { useMemo } from 'react';
import { KnittoTable, type IHeader } from '../../components/knitto-table';
import { generateEmployeeData, type Employee } from '../../lib/constants';
import clsx from 'clsx';

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

function VirtualTable() {
  const data = useMemo(() => generateEmployeeData(100), []);

  return (
    <div className='h-96'>
      <KnittoTable
        data={data}
        useFooter
        filterHeight={32}
        headerHeight={40}
        headerMode='double'
        headers={employeeHeaders()}
        rowHeight={32}
        rowKey='id'
        classNameCell={(_, __, ___, opts) => {
          return clsx({
            '!border-l !border-l-blue-950': opts?.isFirstIndex && opts?.isRowHighlighted,
            '!border-r !border-r-blue-950': opts?.isLastIndex && opts?.isRowHighlighted,
            '!border-y !border-y-blue-950 bg-[#ECEEFF]': opts?.isRowHighlighted,
          });
        }}
        onClickRow={(item, rowIndex, columnIndex) => {
          console.log({ item, rowIndex, columnIndex });
        }}
      />
    </div>
  );
}

export default VirtualTable;
