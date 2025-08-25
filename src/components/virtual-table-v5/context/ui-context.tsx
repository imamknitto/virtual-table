import { useMemo, type ReactNode } from 'react';
import { createContext, useContext } from 'use-context-selector';
import { useHeaderContext } from './header-context';
import { useVirtualizerContext } from './virtualizer-context';

export interface IUIContext {
  freezeColLeftPositions: number[];
  freezeColRightPositions: number[];
  calcTotalTableWidth: number;
  useFooter: boolean;
  filterHeight: number;
  expandedContent: (rowData: unknown) => ReactNode;
}

const UIContext = createContext<IUIContext | null>(null);

export const useUIContext = () => useContext(UIContext)!;

interface IUIContextProviderProps {
  children: ReactNode;
  filterHeight: number;
  useFooter: boolean;
  expandedContent?: (rowData: unknown) => ReactNode;
}

export const UIContextProvider = (props: IUIContextProviderProps) => {
  const { children, filterHeight, expandedContent, useFooter = false } = props;

  const { freezeLeftColumns, freezeLeftColumnsWidth, freezeRightColumns, freezeRightColumnsWidth } =
    useHeaderContext();
  const { columnVirtualizer } = useVirtualizerContext();
  const virtualizedColumnsWidth = columnVirtualizer?.getTotalSize() || 0;

  // Note: Hitung posisi left absolute dari kolom yang freeze di kiri.
  const freezeColLeftPositions = useMemo<number[]>(() => {
    return freezeLeftColumns.reduce<number[]>((acc, _column, idx) => {
      const left = idx === 0 ? 0 : acc[idx - 1] + (freezeLeftColumns[idx - 1].width || 0);
      return [...acc, left];
    }, []);
  }, [freezeLeftColumns]);

  // Note: Hitung posisi right absolute dari kolom yang freeze di kanan.
  const freezeColRightPositions = useMemo<number[]>(() => {
    return freezeRightColumns.reduce<number[]>((acc, _column, idx) => {
      const right = idx === 0 ? 0 : acc[idx - 1] + (freezeRightColumns[idx - 1].width || 0);
      return [...acc, right];
    }, []);
  }, [freezeRightColumns]);

  // Note: Hitung total lebar dari semua jenis kolom.
  const calcTotalTableWidth = useMemo(() => {
    return virtualizedColumnsWidth + freezeLeftColumnsWidth + freezeRightColumnsWidth;
  }, [virtualizedColumnsWidth, freezeLeftColumnsWidth, freezeRightColumnsWidth]);

  return (
    <UIContext.Provider
      value={{
        freezeColLeftPositions,
        freezeColRightPositions,
        calcTotalTableWidth,
        useFooter,
        filterHeight,
        expandedContent: expandedContent || (() => null),
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
