import { KnittoTable, type IHeader } from '../components/knitto-table';

// ========== Combined Colspan & Rowspan Example Data ==========
type SalesReport = {
  id: number;
  region: string; // ✅ Rowspan (merge duplicate values)
  country: string; // ✅ Rowspan (merge duplicate values)
  salesRep: string; // ✅ Rowspan (merge duplicate values)
  product: string; // ❌ Unique per row
  q1Sales: number; // ❌ Unique per row
  q2Sales: number; // ❌ Unique per row
  q3Sales: number; // ❌ Unique per row
  q4Sales: number; // ❌ Unique per row
  totalSales: number; // ❌ Unique per row
};

// NOTE: Data sudah di-sort berdasarkan region, country, dan salesRep
const combinedExampleData: SalesReport[] = [
  // NOTE: North America region (rowSpan = 8)
  //   - USA country (rowSpan = 6)
  //     - John Doe salesRep (rowSpan = 3)
  {
    id: 1,
    region: 'North America',
    country: 'USA',
    salesRep: 'John Doe',
    product: 'Laptop',
    q1Sales: 25000,
    q2Sales: 30000,
    q3Sales: 28000,
    q4Sales: 32000,
    totalSales: 115000,
  },
  {
    id: 2,
    region: 'North America',
    country: 'USA',
    salesRep: 'John Doe',
    product: 'Desktop',
    q1Sales: 18000,
    q2Sales: 22000,
    q3Sales: 20000,
    q4Sales: 25000,
    totalSales: 85000,
  },
  {
    id: 3,
    region: 'North America',
    country: 'USA',
    salesRep: 'John Doe',
    product: 'Tablet',
    q1Sales: 12000,
    q2Sales: 15000,
    q3Sales: 14000,
    q4Sales: 16000,
    totalSales: 57000,
  },
  //     - Jane Smith salesRep (rowSpan = 3)
  {
    id: 4,
    region: 'North America',
    country: 'USA',
    salesRep: 'Jane Smith',
    product: 'Laptop',
    q1Sales: 22000,
    q2Sales: 26000,
    q3Sales: 24000,
    q4Sales: 28000,
    totalSales: 100000,
  },
  {
    id: 5,
    region: 'North America',
    country: 'USA',
    salesRep: 'Jane Smith',
    product: 'Desktop',
    q1Sales: 16000,
    q2Sales: 20000,
    q3Sales: 18000,
    q4Sales: 22000,
    totalSales: 76000,
  },
  {
    id: 6,
    region: 'North America',
    country: 'USA',
    salesRep: 'Jane Smith',
    product: 'Tablet',
    q1Sales: 10000,
    q2Sales: 13000,
    q3Sales: 12000,
    q4Sales: 14000,
    totalSales: 49000,
  },
  //   - Canada country (rowSpan = 2)
  //     - Mike Johnson salesRep (rowSpan = 2)
  {
    id: 7,
    region: 'North America',
    country: 'Canada',
    salesRep: 'Mike Johnson',
    product: 'Laptop',
    q1Sales: 15000,
    q2Sales: 18000,
    q3Sales: 16000,
    q4Sales: 20000,
    totalSales: 69000,
  },
  {
    id: 8,
    region: 'North America',
    country: 'Canada',
    salesRep: 'Mike Johnson',
    product: 'Desktop',
    q1Sales: 12000,
    q2Sales: 15000,
    q3Sales: 14000,
    q4Sales: 17000,
    totalSales: 58000,
  },

  // NOTE: Europe region (rowSpan = 6)
  //   - UK country (rowSpan = 3)
  //     - Sarah Wilson salesRep (rowSpan = 3)
  {
    id: 9,
    region: 'Europe',
    country: 'UK',
    salesRep: 'Sarah Wilson',
    product: 'Laptop',
    q1Sales: 20000,
    q2Sales: 24000,
    q3Sales: 22000,
    q4Sales: 26000,
    totalSales: 92000,
  },
  {
    id: 10,
    region: 'Europe',
    country: 'UK',
    salesRep: 'Sarah Wilson',
    product: 'Desktop',
    q1Sales: 14000,
    q2Sales: 17000,
    q3Sales: 16000,
    q4Sales: 19000,
    totalSales: 66000,
  },
  {
    id: 11,
    region: 'Europe',
    country: 'UK',
    salesRep: 'Sarah Wilson',
    product: 'Tablet',
    q1Sales: 8000,
    q2Sales: 10000,
    q3Sales: 9000,
    q4Sales: 11000,
    totalSales: 38000,
  },
  //   - Germany country (rowSpan = 3)
  //     - Klaus Mueller salesRep (rowSpan = 3)
  {
    id: 12,
    region: 'Europe',
    country: 'Germany',
    salesRep: 'Klaus Mueller',
    product: 'Laptop',
    q1Sales: 23000,
    q2Sales: 27000,
    q3Sales: 25000,
    q4Sales: 29000,
    totalSales: 104000,
  },
  {
    id: 13,
    region: 'Europe',
    country: 'Germany',
    salesRep: 'Klaus Mueller',
    product: 'Desktop',
    q1Sales: 17000,
    q2Sales: 21000,
    q3Sales: 19000,
    q4Sales: 23000,
    totalSales: 80000,
  },
  {
    id: 14,
    region: 'Europe',
    country: 'Germany',
    salesRep: 'Klaus Mueller',
    product: 'Tablet',
    q1Sales: 9000,
    q2Sales: 12000,
    q3Sales: 11000,
    q4Sales: 13000,
    totalSales: 45000,
  },
];

const combinedHeaders: IHeader<SalesReport>[] = [
  { key: 'region', caption: 'Region', enableRowSpan: true },
  { key: 'country', caption: 'Country', enableRowSpan: true },
  { key: 'salesRep', caption: 'Sales Rep', width: 150, enableRowSpan: true },
  { key: 'product', caption: 'Product', width: 120 },
  {
    key: 'group-header-sales',
    caption: 'Quarterly Sales',
    children: [
      { key: 'q1Sales', caption: 'Q1', width: 100 },
      { key: 'q2Sales', caption: 'Q2', width: 100 },
      { key: 'q3Sales', caption: 'Q3', width: 100 },
      { key: 'q4Sales', caption: 'Q4', width: 100 },
    ],
  },
  { key: 'totalSales', caption: 'Total Sales', width: 120 },
];

function ExplorePage() {
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='space-y-2.5'>
        <h4>Regular Table pake Kombinasi Colspan & Rowspan</h4>
        <p className='text-sm text-gray-600'>
          Contoh laporan penjualan dengan hierarchical data (Region → Country → Sales Rep) yang menggunakan rowspan
          untuk merge duplicate values, dan colspan untuk group quarterly sales data.
        </p>

        <div className='h-96'>
          <KnittoTable
            rowKey='id'
            isLoading={false}
            headers={combinedHeaders}
            data={combinedExampleData}
            useRegularTable
          />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
