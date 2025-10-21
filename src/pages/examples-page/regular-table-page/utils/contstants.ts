export const CODE_EXAMPLE_BASIC = `import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const BasicImplementation = () => {
  const data = generateEmployeeData();

  // Define table headers
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    { key: 'phone', caption: 'Phone', width: 200 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 200 },
    { key: 'country', caption: 'Country', width: 200 },
    { key: 'salary', caption: 'Salary', width: 200 },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`;

export const CODE_EXAMPLE_WITH_COLSPAN = `import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const WithColspan = () => {
  const data = generateEmployeeData();

  // Define table headers with group headers (colspan)
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100 },
    {
      key: 'group-header-identity',
      caption: 'Identity',
      children: [
        { key: 'name', caption: 'Name', width: 200 },
        { key: 'email', caption: 'Email', width: 200 },
      ],
    },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    {
      key: 'group-header-contact',
      caption: 'Contact Information',
      children: [
        { key: 'phone', caption: 'Phone', width: 200 },
        { key: 'address', caption: 'Address', width: 200 },
        { key: 'city', caption: 'City', width: 200 },
        { key: 'country', caption: 'Country', width: 200 },
      ],
    },
    { key: 'salary', caption: 'Salary', width: 200 },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`;

export const CODE_EXAMPLE_WITH_FREEZE = `import { KnittoTable, type IHeader } from '@knitto/virtual-table';
import { generateEmployeeData } from './lib/constants';

// Define employee data type
interface IEmployee {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
}

// Generate sample data
const generateEmployeeData = (): IEmployee[] => {
  return generateEmployeeData(25);
};

const WithFreezeColumn = () => {
  const data = generateEmployeeData();

  // Define table headers with freeze columns
  const headers: IHeader<IEmployee>[] = [
    { key: 'id', caption: 'ID', width: 100, freeze: 'left' },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 200 },
    { key: 'company', caption: 'Company', width: 200 },
    { key: 'position', caption: 'Position', width: 200 },
    { key: 'phone', caption: 'Phone', width: 200 },
    { key: 'address', caption: 'Address', width: 200 },
    { key: 'city', caption: 'City', width: 200 },
    { key: 'country', caption: 'Country', width: 200 },
    { key: 'salary', caption: 'Salary', width: 200, freeze: 'right' },
  ];

  return (
    <div className='h-80'>
      <KnittoTable 
        useRegularTable 
        data={data} 
        headers={headers} 
        rowKey='id' 
      />
    </div>
  );
};`;
