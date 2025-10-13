import { faker } from '@faker-js/faker';
import { VirtualTable, type IHeader } from '../components/virtual-table';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  company: string;
  jobTitle: string;
  city: string;
  country: string;
  status: string;
  salary: string;
  department: string;
}

const generateFakeUser = (id: number): User => ({
  id,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  username: faker.internet.username(),
  phone: faker.phone.number(),
  company: faker.company.name(),
  jobTitle: faker.person.jobTitle() + ' ' + faker.person.jobTitle(),
  city: faker.location.city(),
  country: faker.location.country(),
  status: faker.helpers.arrayElement(['Active', 'Inactive', 'Pending']),
  salary: faker.finance.amount({ min: 30000, max: 150000, dec: 0 }),
  department: faker.commerce.department(),
});

const ExplorePage = () => {
  const data: User[] = Array.from({ length: 1000 }, (_, i) => generateFakeUser(i + 1));

  const headers: IHeader<User>[] = [
    // Freeze Left
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 180 },

    // Multi-level Group Headers (scrollable)
    {
      key: 'group-header-personal',
      caption: 'Personal Information',
      children: [
        {
          key: 'group-header-contact',
          caption: 'Contact Details',
          children: [
            { key: 'email', caption: 'Email', width: 180 },
            { key: 'phone', caption: 'Phone', width: 160 },
          ],
        },
        { key: 'username', caption: 'Username', width: 140 },
      ],
    },
    {
      key: 'group-header-professional',
      caption: 'Professional Information',
      children: [
        {
          key: 'group-header-work',
          caption: 'Work Details',
          children: [
            { key: 'company', caption: 'Company', width: 180 },
            { key: 'jobTitle', caption: 'Job Title', width: 160 },
            { key: 'department', caption: 'Department', width: 140 },
          ],
        },
        {
          key: 'group-header-location',
          caption: 'Location',
          children: [
            { key: 'city', caption: 'City', width: 120 },
            { key: 'country', caption: 'Country', width: 120 },
          ],
        },
      ],
    },

    // Regular Column (scrollable)
    { key: 'salary', caption: 'Salary', width: 120, freeze: 'right' },

    // Freeze Right
    { key: 'status', caption: 'Status', width: 100, freeze: 'right' },
  ];

  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-4 w-full h-[500px]'>
        <h4>Kolom tidak di-virtualisasi dan menggunakan Dynamic Row Height</h4>
        <div className='flex-1'>
          <VirtualTable
            data={data}
            headers={headers}
            rowKey={'id'}
            enableColumnVirtualization={false}
            useDynamicRowHeight={true}
          />
        </div>
      </div>

      <div className='flex flex-col gap-y-4 w-full h-[500px]'>
        <h4>Kolom di-virtualisasi</h4>
        <div className='flex-1'>
          <VirtualTable data={data} headers={headers} rowKey={'id'} />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
