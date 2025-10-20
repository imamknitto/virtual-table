import { BasicRowspanSection, AdvancedRowspanSection, QuickInfoSection } from './components/index';

function RowspanPage() {
  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Rowspan</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Rowspan functionality automatically merges consecutive duplicate values in table cells. This feature is
          exclusive to regular tables and requires specific setup and data preparation.
        </p>
      </div>

      <QuickInfoSection />

      <BasicRowspanSection />
      <AdvancedRowspanSection />
    </div>
  );
}

export default RowspanPage;
