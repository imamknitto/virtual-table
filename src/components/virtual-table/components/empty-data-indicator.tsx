import { useCalcHeaderTotalHeight } from '../context/ui-context';
import { useContainerHeight, useRowVirtualItems } from '../context/virtualizer-context';

function EmptyDataIndicator() {
  const rowVirtualItems = useRowVirtualItems();
  const containerHeight = useContainerHeight();
  const calcHeaderTotalHeight = useCalcHeaderTotalHeight();

  if (rowVirtualItems.length) return;

  return (
    <div className='sticky left-0' style={{ height: containerHeight }}>
      <div
        className='size-full relative flex justify-center items-center'
        style={{ paddingTop: calcHeaderTotalHeight }}
      >
        <p className='text-lg font-medium text-gray-400'>Tidak ada data yang tersedia</p>
      </div>
    </div>
  );
}

export default EmptyDataIndicator;
