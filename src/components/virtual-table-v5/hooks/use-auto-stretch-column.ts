import type { Virtualizer } from '@tanstack/react-virtual';
import { useEffect } from 'react';
import { DEFAULT_SIZE, type IHeader } from '../lib';

interface IAutoStretchColumn {
  containerWidth: number;
  columns: IHeader<unknown>[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

export function useAutoStretchColumn(props: IAutoStretchColumn) {
  const { containerWidth, columns, columnVirtualizer } = props;

  useEffect(() => {
    if (containerWidth === 0) return;

    const visibleColumns = columns.filter((column) => column.visible && !column.noStretch);

    const totalWidth = visibleColumns.reduce((sum, column) => {
      return sum + (column.width || DEFAULT_SIZE.COLUMN_WIDTH);
    }, 0);

    const totalNoStretchWidth = columns.reduce((sum, column) => {
      return sum + (column.noStretch ? column.width! : 0);
    }, 0);

    if (totalWidth < containerWidth - totalNoStretchWidth) {
      const scale = (containerWidth - totalNoStretchWidth) / totalWidth;

      visibleColumns.forEach((column) => {
        const columnIndex = columns.indexOf(column);

        columnVirtualizer.resizeItem(columnIndex, column.width! * scale);
      });
    }
  }, [columns, containerWidth, columnVirtualizer]);
}
