import { memo, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import type { IHeader } from './lib';
import ExpandToggleButton from './components/expand-toggle-button';
import { useTableContext } from './context/table-context';
import { Checkbox } from './components';

interface IVirtualTableCell<TData> {
  position: 'absolute' | 'sticky';
  rowData: TData;
  header: IHeader<TData>;
  rowIndex: number;
  columnWidth: number;
  columnHeight: number;
  leftPosition: number;
  zIndexColumn: number;
}

function VirtualTableCell<TData>(cellProps: IVirtualTableCell<TData>) {
  const {
    position,
    header,
    rowData,
    rowIndex,
    columnWidth,
    columnHeight,
    leftPosition,
    zIndexColumn,
  } = cellProps;

  // Optimize context calls by getting all needed values in one selector
  const contextValues = useTableContext((ctx) => ({
    expandedRows: ctx.expandedRows,
    selectedRow: ctx.selectedRow,
    getRowKey: ctx.getRowKey,
    handleClickExpandRow: ctx.handleClickExpandRow,
    handleClickRow: ctx.handleClickRow,
    handleDoubleClickRow: ctx.handleDoubleClickRow,
    handleRightClickRow: ctx.handleRightClickRow,
    checkboxSelectionRow: ctx.checkboxSelectionRow,
  }));

  const {
    expandedRows,
    selectedRow,
    getRowKey,
    handleClickExpandRow,
    handleClickRow,
    handleDoubleClickRow,
    handleRightClickRow,
    checkboxSelectionRow,
  } = contextValues;

  // Memoize expensive computations
  const rowKey = useMemo(() => getRowKey(rowData), [getRowKey, rowData]);
  const isRowExpanded = useMemo(() => expandedRows.has(rowKey), [expandedRows, rowKey]);
  const isRowSelected = useMemo(() => checkboxSelectionRow?.selectedRows.has(rowKey) ?? false, [checkboxSelectionRow?.selectedRows, rowKey]);
  
  const selectedKey = useMemo(() => selectedRow ? getRowKey(selectedRow) : undefined, [selectedRow, getRowKey]);
  const isSelected = useMemo(() => rowKey === selectedKey, [rowKey, selectedKey]);

  // Memoize column type checks
  const columnTypes = useMemo(() => ({
    isExpandColumn: header.key === 'expand',
    isActionColumn: header.key === 'action',
    isCheckboxSelectionColumn: header.key === 'row-selection',
    isStickyRightColumn: header.sticky === 'right',
  }), [header.key, header.sticky]);

  const { isExpandColumn, isActionColumn, isCheckboxSelectionColumn, isStickyRightColumn } = columnTypes;

  // Memoize cell content
  const cellContent = useMemo(() => {
    if (isExpandColumn || isCheckboxSelectionColumn) return null;
    
    const cellValue = String(rowData[header.key as keyof TData] ?? '');
    return header.render?.(rowData) || cellValue;
  }, [isExpandColumn, isCheckboxSelectionColumn, header.key, header.render, rowData]);

  // Memoize event handlers
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExpandColumn) handleClickRow?.(rowData);
  }, [isExpandColumn, handleClickRow, rowData]);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExpandColumn) handleDoubleClickRow?.(rowData);
  }, [isExpandColumn, handleDoubleClickRow, rowData]);

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isExpandColumn) {
      handleRightClickRow?.(rowData, { x: e.clientX, y: e.clientY });
    }
  }, [isExpandColumn, handleRightClickRow, rowData]);

  const handleExpandClick = useCallback(() => {
    handleClickExpandRow(rowData);
  }, [handleClickExpandRow, rowData]);

  const handleCheckboxChange = useCallback(() => {
    checkboxSelectionRow?.handleSelectCheckboxRow(rowData);
  }, [checkboxSelectionRow, rowData]);

  const handleCheckboxClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  // Memoize styles
  const cellStyle = useMemo(() => ({
    position,
    width: columnWidth,
    height: columnHeight,
    top: 0,
    left: leftPosition,
    zIndex: zIndexColumn,
  }), [position, columnWidth, columnHeight, leftPosition, zIndexColumn]);

  const innerStyle = useMemo(() => ({
    ...(isStickyRightColumn && { boxShadow: '-1px 0px 0px 0px #e5e7eb' }),
    willChange: 'transform',
    contain: 'layout style paint',
  }), [isStickyRightColumn]);

  // Memoize className
  const cellClassName = useMemo(() => clsx(
    'size-full text-xs px-1.5 flex items-center border-r border-b border-gray-200 group-hover/body-row:bg-blue-50',
    rowIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white',
    (handleClickRow || handleDoubleClickRow) ? 'cursor-pointer' : 'cursor-default',
    isSelected && '!bg-blue-50 !border-r border-y border-y-blue-950',
  ), [rowIndex, handleClickRow, handleDoubleClickRow, isSelected]);

  return (
    <td
      style={cellStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
    >
      <div className={cellClassName} style={innerStyle}>
        {!isExpandColumn && !isCheckboxSelectionColumn && cellContent}

        {isExpandColumn && !isCheckboxSelectionColumn && !isActionColumn && (
          <div className='flex justify-center items-center'>
            <ExpandToggleButton
              onClick={handleExpandClick}
              isExpanded={isRowExpanded}
            />
          </div>
        )}

        {isCheckboxSelectionColumn && !isExpandColumn && !isActionColumn && (
          <div className='size-full flex justify-center items-center'>
            <Checkbox
              name={`checkbox-row-${rowKey}`}
              checked={isRowSelected}
              onChecked={handleCheckboxChange}
              onClick={handleCheckboxClick}
            />
          </div>
        )}
      </div>
    </td>
  );
}

export default memo(VirtualTableCell) as typeof VirtualTableCell;
