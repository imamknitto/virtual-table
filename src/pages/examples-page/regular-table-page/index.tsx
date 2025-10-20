import {
  BasicImplementationSection,
  WithColspanSection,
  WithFreezeColumnSection,
  QuickInfoSection,
} from './components/index';

function RegularTablePage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Regular Table</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Regular Table is a simple table that is used to display data in a grid. It is a good choice for small datasets
          and semantic table.
        </p>
      </div>

      <QuickInfoSection />

      <BasicImplementationSection />
      <WithColspanSection />
      <WithFreezeColumnSection />
    </div>
  );
}

export default RegularTablePage;
