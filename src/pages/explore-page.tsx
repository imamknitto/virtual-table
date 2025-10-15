import { faker } from '@faker-js/faker';
import { KnittoTable, type IHeader } from '../components/knitto-table';
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  website: string;
  company: string;
  jobTitle: string;
  department: string;
  salary: number;
  hireDate: string;
  birthDate: string;
  gender: string;
}

const headers: IHeader<User>[] = [
  { key: 'id', caption: 'ID' },
  { key: 'name', caption: 'Name' },
  { key: 'email', caption: 'Email' },
  { key: 'age', caption: 'Age' },
  {
    key: 'group-header-location',
    caption: 'Location',
    children: [
      { key: 'address', caption: 'Address' },
      { key: 'city', caption: 'City' },
      { key: 'state', caption: 'State' },
      { key: 'zip', caption: 'Zip' },
      { key: 'country', caption: 'Country' },
    ],
  },
  { key: 'phone', caption: 'Phone' },
  { key: 'website', caption: 'Website' },
  { key: 'company', caption: 'Company' },
  { key: 'jobTitle', caption: 'Job Title' },
  { key: 'department', caption: 'Department' },
  { key: 'salary', caption: 'Salary' },
  { key: 'hireDate', caption: 'Hire Date' },
  { key: 'birthDate', caption: 'Birth Date' },
  { key: 'gender', caption: 'Gender' },
];

const data: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 60 }),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  city: faker.location.city(),
  state: faker.location.state(),
  zip: faker.location.zipCode(),
  country: faker.location.country(),
  website: faker.internet.url(),
  company: faker.company.name(),
  jobTitle: faker.person.jobTitle(),
  department: faker.person.jobDescriptor(),
  salary: faker.number.int({ min: 10000, max: 100000 }),
  hireDate: faker.date.past().toISOString().split('T')[0],
  birthDate: faker.date.past().toISOString().split('T')[0],
  gender: faker.person.gender(),
}));

// ========== Row Span Example Data ==========
// NOTE: Type definition untuk Product
type Product = {
  id: number;
  category: string; // ✅ Akan di-rowspan (merge duplicate values)
  subcategory: string; // ✅ Akan di-rowspan (merge duplicate values)
  productName: string; // ❌ Unique per row
  price: number; // ❌ Unique per row
  stock: number; // ❌ Unique per row
};

// NOTE: Data sudah di-sort berdasarkan category dan subcategory
// Ini PENTING supaya rowspan merging bekerja dengan benar!
const rowSpanData: Product[] = [
  // NOTE: Electronics category (rowSpan = 4)
  //   - Mobile subcategory (rowSpan = 2)
  { id: 1, category: 'Electronics', subcategory: 'Mobile', productName: 'iPhone 15', price: 999, stock: 50 },
  { id: 2, category: 'Electronics', subcategory: 'Mobile', productName: 'Samsung S24', price: 899, stock: 30 },
  //   - Laptop subcategory (rowSpan = 2)
  { id: 3, category: 'Electronics', subcategory: 'Laptop', productName: 'MacBook Pro', price: 2499, stock: 20 },
  { id: 4, category: 'Electronics', subcategory: 'Laptop', productName: 'Dell XPS', price: 1799, stock: 25 },

  // NOTE: Clothing category (rowSpan = 3)
  //   - Shirts subcategory (rowSpan = 2)
  { id: 5, category: 'Clothing', subcategory: 'Shirts', productName: 'T-Shirt Blue', price: 25, stock: 100 },
  { id: 6, category: 'Clothing', subcategory: 'Shirts', productName: 'T-Shirt Red', price: 25, stock: 150 },
  //   - Pants subcategory (rowSpan = 1)
  { id: 7, category: 'Clothing', subcategory: 'Pants', productName: 'Jeans', price: 60, stock: 80 },

  // NOTE: Food category (rowSpan = 5)
  //   - Fruits subcategory (rowSpan = 2)
  { id: 8, category: 'Food', subcategory: 'Fruits', productName: 'Apple', price: 3, stock: 200 },
  { id: 9, category: 'Food', subcategory: 'Fruits', productName: 'Banana', price: 2, stock: 300 },
  //   - Vegetables subcategory (rowSpan = 3)
  { id: 10, category: 'Food', subcategory: 'Vegetables', productName: 'Carrot', price: 2, stock: 150 },
  { id: 11, category: 'Food', subcategory: 'Vegetables', productName: 'Tomato', price: 2, stock: 150 },
  { id: 12, category: 'Food', subcategory: 'Vegetables', productName: 'Onion', price: 2, stock: 150 },
];

const rowSpanHeaders: IHeader<Product>[] = [
  { key: 'category', caption: 'Category', width: 150, enableRowSpan: true },
  { key: 'subcategory', caption: 'Subcategory', width: 150, enableRowSpan: true },
  { key: 'productName', caption: 'Product Name', width: 200 },
  { key: 'price', caption: 'Price ($)', width: 120 },
  { key: 'stock', caption: 'Stock', width: 120 },
];

function ExplorePage() {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='space-y-2.5'>
        <h4>Regular Table With Col Span / Header Grouping</h4>

        <div className='h-80'>
          <KnittoTable
            rowKey='id'
            isLoading={false}
            headers={headers}
            data={data}
            headerHeight={40}
            useRegularTable
            useDynamicRowHeight
          />
        </div>
      </div>

      <div className='space-y-2.5'>
        <h4>Regular Table With Row Span (Grouped Data)</h4>

        <div className='h-80'>
          <KnittoTable
            rowKey='id'
            isLoading={false}
            headers={rowSpanHeaders}
            data={rowSpanData}
            headerHeight={40}
            useRegularTable
          />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
