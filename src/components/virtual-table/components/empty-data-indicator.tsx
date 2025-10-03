import { useUIContext } from '../context/ui-context';
import { useVirtualizerContext } from '../context/virtualizer-context';

function EmptyDataIndicator() {
  const { rowVirtualItems, containerHeight } = useVirtualizerContext();
  const { calcHeaderTotalHeight } = useUIContext();

  if (rowVirtualItems.length) return;

  return (
    <div className="sticky left-0" style={{ height: containerHeight }}>
      <div
        className="size-full relative flex justify-center items-center"
        style={{ paddingTop: calcHeaderTotalHeight }}
      >
        <p className="text-lg font-medium text-gray-400">Tidak ada data yang tersedia</p>
      </div>
    </div>
  );
}

export default EmptyDataIndicator;
