import { memo } from 'react';
import RegularRowspan from './regular-rowspan';
import VirtualTable from './virtual-table';
import RegularTable from './regular-table';

function ExplorePage() {
  return (
    <div className='space-y-8'>
      <div>
        <h2 className='text-2xl font-bold mb-2'>Regular Rowspan</h2>
        <RegularRowspan />
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-2'>Virtual Table</h2>
        <VirtualTable />
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-2'>Regular Table</h2>
        <RegularTable />
      </div>
    </div>
  );
}

export default memo(ExplorePage);
