import { useCallback, useState } from 'react';
import type { ContextMenuPosition, Product } from '../utils';

export const useRowInteractions = () => {
  const [selectedRow, setSelectedRow] = useState<Product | null>(null);
  const [doubleClickedRow, setDoubleClickedRow] = useState<Product | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState<ContextMenuPosition | null>(null);
  const [contextMenuRow, setContextMenuRow] = useState<Product | null>(null);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [interactionLog, setInteractionLog] = useState<string[]>([]);

  const addToLog = useCallback((message: string) => {
    setInteractionLog((prev) => [
      `${new Date().toLocaleTimeString()}: ${message}`,
      ...prev.slice(0, 4),
    ]);
  }, []);

  const handleClickRow = useCallback(
    (item: Product, rowIndex: number, columnIndex: number) => {
      setSelectedRow(item);
      addToLog(`Clicked on "${item.name}" (Row ${rowIndex}, Column ${columnIndex})`);
    },
    [addToLog],
  );

  const handleDoubleClickRow = useCallback(
    (item: Product, rowIndex: number, columnIndex: number) => {
      setDoubleClickedRow(item);
      addToLog(`Double-clicked on "${item.name}" (Row ${rowIndex}, Column ${columnIndex})`);
    },
    [addToLog],
  );

  const handleRightClickRow = useCallback(
    (item: Product, position: ContextMenuPosition) => {
      setSelectedRow(item);
      setContextMenuRow(item);
      setContextMenuPosition(position);
      setShowContextMenu(true);
      addToLog(`Right-clicked on "${item.name}" at position (${position.x}, ${position.y})`);
    },
    [addToLog],
  );

  const handleContextMenuAction = useCallback(
    (action: string) => {
      if (contextMenuRow) {
        addToLog(`${action} on "${contextMenuRow.name}"`);
      }
      setShowContextMenu(false);
    },
    [contextMenuRow, addToLog],
  );

  const handleCloseContextMenu = useCallback(() => {
    setShowContextMenu(false);
  }, []);

  return {
    selectedRow,
    doubleClickedRow,
    contextMenuPosition,
    contextMenuRow,
    showContextMenu,
    interactionLog,
    handleClickRow,
    handleDoubleClickRow,
    handleRightClickRow,
    handleContextMenuAction,
    handleCloseContextMenu,
  };
};

