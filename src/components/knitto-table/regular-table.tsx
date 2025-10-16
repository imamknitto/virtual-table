import type { ReactNode } from 'react';
import RegularTableBody from './regular-table-body';
import RegularTableHeader from './regular-table-header';
import { DEFAULT_SIZE, type IKnittoTable } from './lib';

type TPickKnittoTable<TData> = Pick<
  IKnittoTable<TData>,
  'rowKey' | 'headerHeight' | 'rowHeight' | 'onClickRow' | 'onDoubleClickRow'
>;

function RegularTable<TData>(props: TPickKnittoTable<TData>) {
  const {
    rowKey,
    headerHeight = DEFAULT_SIZE.HEADER_HEIGTH,
    rowHeight = DEFAULT_SIZE.ROW_HEIGHT,
    onClickRow,
    onDoubleClickRow,
  } = props;

  return (
    <table className='w-full border-collapse' style={{ tableLayout: 'fixed' }}>
      <RegularTableHeader headerHeight={headerHeight} />
      <RegularTableBody
        rowKey={rowKey}
        rowHeight={rowHeight}
        onClickRowToParent={onClickRow}
        onDoubleClickRowToParent={onDoubleClickRow}
      />
    </table>
  );
}

export default RegularTable as <TData>(props: TPickKnittoTable<TData>) => ReactNode;
