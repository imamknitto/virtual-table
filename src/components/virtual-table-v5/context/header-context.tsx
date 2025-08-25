import { createContext, useContext } from 'use-context-selector';
import { useState, useCallback, useEffect } from 'react';
import type { IHeader } from '../lib';

export interface HeaderContext extends IHeader<unknown> {
  [key: string]: unknown;
}

type IHeaderContext = {
  columns: HeaderContext[];
  freezeLeftColumns: HeaderContext[];
  freezeRightColumns: HeaderContext[];
  freezeLeftColumnsWidth: number;
  freezeRightColumnsWidth: number;
  isFilterVisible: boolean;
  updateColumn: (key: string, update: Partial<HeaderContext>) => void;
  toggleColumnVisibility: (key: string) => void;
  toggleFilterVisibility: () => void;
  updateFreezeColumn: (key: string, freezeType: 'left' | 'right', update: Partial<HeaderContext>) => void;
};

interface IHeaderContextProvider {
  initialColumns: HeaderContext[];
  children: React.ReactNode;
}

const HeaderContext = createContext<IHeaderContext | null>(null);

export const useHeaderContext = () => useContext(HeaderContext)!;

export const HeaderContextProvider = ({ initialColumns, children }: IHeaderContextProvider) => {
  const [columns, setColumns] = useState<HeaderContext[]>([]);
  const [freezeLeftColumns, setFreezeLeftColumns] = useState<HeaderContext[]>([]);
  const [freezeRightColumns, setFreezeRightColumns] = useState<HeaderContext[]>([]);
  const [freezeLeftColumnsWidth, setFreezeLeftColumnsWidth] = useState(0);
  const [freezeRightColumnsWidth, setFreezeRightColumnsWidth] = useState(0);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    if (!initialColumns.length) return;

    const virtualized = initialColumns.filter((col) => !col.freeze);
    const freezeLeft = initialColumns.filter((col) => col.freeze === 'left');
    const freezeRight = initialColumns.filter((col) => col.freeze === 'right');

    setColumns(virtualized);
    setFreezeLeftColumns(freezeLeft);
    setFreezeRightColumns(freezeRight);
  }, [initialColumns]);

  // Note: Update total lebar dari kolom yang freeze kiri jika ada perubahan.
  useEffect(() => {
    const newWidth = freezeLeftColumns.reduce((acc, col) => acc + (col.width || 0), 0);
    setFreezeLeftColumnsWidth(newWidth);
  }, [freezeLeftColumns]);

  // Note: Update total lebar dari kolom yang freeze kanan jika ada perubahan.
  useEffect(() => {
    const newWidth = freezeRightColumns.reduce((acc, col) => acc + (col.width || 0), 0);
    setFreezeRightColumnsWidth(newWidth);
  }, [freezeRightColumns]);

  const updateColumn = useCallback((key: string, update: Partial<HeaderContext>) => {
    setColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
  }, []);

  const updateFreezeColumn = useCallback(
    (key: string, freezeType: 'left' | 'right', update: Partial<HeaderContext>) => {
      if (freezeType === 'left') {
        setFreezeLeftColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
      } else {
        setFreezeRightColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
      }
    },
    [],
  );

  const toggleColumnVisibility = useCallback(
    (key: string) => {
      updateColumn(key, { visible: !columns.find((col) => col.key === key)?.visible });
    },
    [columns, updateColumn],
  );

  const toggleFilterVisibility = useCallback(() => setIsFilterVisible((prev) => !prev), []);

  return (
    <HeaderContext.Provider
      value={{
        columns,
        freezeLeftColumns,
        freezeRightColumns,
        freezeLeftColumnsWidth,
        freezeRightColumnsWidth,
        isFilterVisible,
        updateColumn,
        updateFreezeColumn,
        toggleColumnVisibility,
        toggleFilterVisibility,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
