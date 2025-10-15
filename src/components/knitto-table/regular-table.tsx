import type { ReactNode } from 'react';
import RegularTableBody from './regular-table-body';
import RegularTableHeader from './regular-table-header';
import { DEFAULT_SIZE } from './lib';

interface IRegularTable<TData> {
  rowKey: keyof TData | ((data: TData, index: number) => string);
  headerHeight?: number;
  rowHeight?: number;
  onClickRow?: (item: TData, rowIndex: number, columnIndex: number) => void;
  onDoubleClickRow?: (item: TData, rowIndex: number, columnIndex: number) => void;
}

function RegularTable<TData>(props: IRegularTable<TData>) {
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

export default RegularTable as <TData>(props: IRegularTable<TData>) => ReactNode;
