import type { IHeader } from '../components/virtual-table-v5';
import { generateFilterSelectionOptions } from './utils';

export interface IUser {
  id: number;
  name?: string;
  email?: string;
  age?: number;
  gender?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  company?: string;
  company2?: string;
  company3?: string;
  company4?: string;
}

export const dummyData: IUser[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  age: Math.floor(Math.random() * 50),
  gender: Math.random() > 0.5 ? 'Male' : 'Female',
  phone: `+62 ${Math.floor(Math.random() * 100)}${Math.floor(Math.random() * 100)}${Math.floor(
    Math.random() * 100,
  )}`,
  address: `Address ${index + 1}`,
  city: `City ${index + 1}`,
  country: `Country ${index + 1}`,
  company: `Company ${index + 1}`,
  company2: `Company ${index + 1}`,
  company3: `Company ${index + 1}`,
  company4: `Company ${index + 1}`,
}));

export const columns: IHeader<IUser>[] = [
  { key: 'expand', caption: '', width: 40, noStretch: true, freeze: 'left' },
  { key: 'row-selection', caption: '', width: 40, noStretch: true, freeze: 'left' },
  {
    key: 'name',
    caption: 'Name',
    filterSelectionOptions: generateFilterSelectionOptions(dummyData, 'name'),
    renderFooter: () => (
      <div className='size-full bg-red-500/50 text-white content-center px-1.5'>Footer Name</div>
    ),
  },
  { key: 'id', caption: 'ID' },
  { key: 'age', caption: 'Age', width: 150 },
  {
    key: 'email',
    caption: 'Email',
    width: 200,
    renderFooter: () => <div className='size-full bg-green-500/50 content-center px-1.5'>Footer Email</div>,
  },
  { key: 'gender', caption: 'Gender', width: 160 },
  { key: 'phone', caption: 'Phone', width: 200 },
  { key: 'address', caption: 'Address', width: 200 },
  { key: 'city', caption: 'City', width: 140 },
  { key: 'country', caption: 'Country', width: 200 },
  { key: 'company', caption: 'Company', width: 200 },
  {
    key: 'group-header',
    caption: 'Group Company',
    children: [
      { key: 'company2', caption: 'Company 2' },
      { key: 'company3', caption: 'Company 3' },
    ],
  },
  // {
  //   key: 'company4',
  //   caption: 'Company4',
  //   renderFooter: () => (
  //     <div className='size-full bg-blue-500/50 content-center px-1.5'>Footer Company 4</div>
  //   ),
  // },
  {
    key: 'action',
    caption: '',
    width: 100,
    render: (item) => (
      <button className='p-1 bg-amber-200 cursor-pointer' onClick={() => alert(JSON.stringify(item))}>
        Edit
      </button>
    ),
  },
];
