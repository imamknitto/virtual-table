import { createContext, useContext } from 'use-context-selector';
import { useState, useCallback, useEffect } from 'react';
import type { IAdjustedHeader } from '../lib';
import { DEFAULT_SIZE } from '../lib';

type IHeaderContext = {
  columns: IAdjustedHeader[];
  flattenColumns: { col: IAdjustedHeader; depth: number; parentKey?: string }[];
  freezeLeftColumns: IAdjustedHeader[];
  freezeRightColumns: IAdjustedHeader[];
  freezeLeftColumnsWidth: number;
  freezeRightColumnsWidth: number;
  isFilterVisible: boolean;
  toggleColumnVisibility: (key: string) => void;
  toggleFilterVisibility: () => void;
  getLeaves: (node: IAdjustedHeader) => IAdjustedHeader[];
  getDepth: (node: IAdjustedHeader) => number;
  updateColumn: (key: string, update: Partial<IAdjustedHeader>) => void;
  updateFreezeColumn: (key: string, freezeType: 'left' | 'right', update: Partial<IAdjustedHeader>) => void;
  updateChildColumn: (parentKey: string, childKey: string, update: Partial<IAdjustedHeader>) => void;
  updateFreezeChildColumn: (
    parentKey: string,
    childKey: string,
    freezeType: 'left' | 'right',
    update: Partial<IAdjustedHeader>,
  ) => void;
};

interface IHeaderContextProvider {
  initialColumns: IAdjustedHeader[];
  children: React.ReactNode;
}

const HeaderContext = createContext<IHeaderContext | null>(null);

export const useHeaderContext = () => useContext(HeaderContext)!;

/**
 * Bangun daftar datar (flat) dari kolom leaf beserta informasi kedalaman (depth)
 * dan parentKey.
 * Renderer body hanya menggambar sel untuk leaf (bukan group),
 * namun butuh info depth untuk perhitungan tinggi header dan pemetaan sederhana.
 */
function flattenHeaderLeaves(columns: IAdjustedHeader[], depth = 0, parentKey?: string) {
  let rows: { col: IAdjustedHeader; depth: number; parentKey?: string }[] = [];

  columns.forEach((col) => {
    if (col.children?.length) {
      rows = rows.concat(flattenHeaderLeaves(col.children, depth + 1, col.key));
    } else {
      rows.push({ col, depth, parentKey });
    }
  });

  return rows;
}

/**
 * Normalisasi tree kolom bertingkat:
 * - Pastikan setiap node punya nilai `visible`
 * - Pastikan setiap leaf punya `width` (fallback ke DEFAULT)
 * - Set `parentKey` pada setiap anak untuk referensi ke atas
 * - Hitung ulang `width` group sebagai jumlah lebar seluruh leaf di bawahnya
 */
function normalizeColumnsRecursive(cols: IAdjustedHeader[]): IAdjustedHeader[] {
  return cols.map((col) => {
    const visible = col.visible ?? true;

    if (col.children && col.children.length > 0) {
      const normalizedChildren = normalizeColumnsRecursive(col.children).map((child) => ({
        ...child,
        parentKey: col.key,
      }));

      const widthFromLeaves = getLeavesOfNode({ ...col, children: normalizedChildren }).reduce(
        (sum, leaf) => sum + (leaf.width || DEFAULT_SIZE.COLUMN_WIDTH),
        0,
      );

      return {
        ...col,
        visible,
        children: normalizedChildren,
        width: widthFromLeaves,
      };
    }

    return {
      ...col,
      visible,
      width: col.width || DEFAULT_SIZE.COLUMN_WIDTH,
    };
  });
}

/**
 * Ambil semua leaf di bawah sebuah node (depth-first).
 * Penggambaran sel selalu per-leaf meski header berkelompok multi-level.
 */
function getLeavesOfNode(node: IAdjustedHeader): IAdjustedHeader[] {
  if (!node.children || node.children.length === 0) return [node];
  return node.children.flatMap((c) => getLeavesOfNode(c));
}

/**
 * Ambil kedalaman maksimum mulai dari `node`.
 * Berguna untuk menghitung tinggi header gabungan (multi-baris).
 */
function getDepthOfNode(node: IAdjustedHeader): number {
  if (!node.children || node.children.length === 0) return 0;
  return 1 + Math.max(...node.children.map((c) => getDepthOfNode(c)));
}

/**
 * Update rekursif descendant dengan `childKey` lalu hitung ulang width ancestor
 * sebagai jumlah lebar semua leaf di bawahnya.
 *
 * Perubahan resize/visibility pada child harus memperbarui seluruh ancestor
 * agar layout dan ukuran virtualizer tetap konsisten.
 */
function updateChildDeep(
  col: IAdjustedHeader,
  childKey: string,
  update: Partial<IAdjustedHeader>,
): IAdjustedHeader {
  if (!col.children || col.children.length === 0) return col;

  const nextChildren = col.children.map((child) => {
    if (child.key === childKey) {
      // Jika ini adalah leaf yang diupdate
      return { ...child, ...update } as IAdjustedHeader;
    }
    // Cek child-child lainnya
    return updateChildDeep(child, childKey, update);
  });

  // Hitung total width dari semua leaf children
  const widthFromLeaves = nextChildren.reduce((sum, child) => {
    if (!child.children || child.children.length === 0) {
      // Ini leaf node, gunakan width-nya
      return sum + (child.width || DEFAULT_SIZE.COLUMN_WIDTH);
    } else {
      // Ini parent node, gunakan width dari leaves-nya
      return (
        sum +
        getLeavesOfNode(child).reduce(
          (leafSum, leaf) => leafSum + (leaf.width || DEFAULT_SIZE.COLUMN_WIDTH),
          0,
        )
      );
    }
  }, 0);

  return {
    ...col,
    children: nextChildren,
    width: widthFromLeaves,
  } as IAdjustedHeader;
}

export const HeaderContextProvider = ({ initialColumns, children }: IHeaderContextProvider) => {
  const [columns, setColumns] = useState<IAdjustedHeader[]>([]);
  const [freezeLeftColumns, setFreezeLeftColumns] = useState<IAdjustedHeader[]>([]);
  const [freezeRightColumns, setFreezeRightColumns] = useState<IAdjustedHeader[]>([]);
  const [freezeLeftColumnsWidth, setFreezeLeftColumnsWidth] = useState(0);
  const [freezeRightColumnsWidth, setFreezeRightColumnsWidth] = useState(0);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [flattenColumns, setFlattenColumns] = useState<
    { col: IAdjustedHeader; depth: number; parentKey?: string }[]
  >([]);

  useEffect(() => {
    if (!initialColumns.length) return;

    const processedColumns = normalizeColumnsRecursive(initialColumns);
    const virtualized = processedColumns.filter((col) => !col.freeze);
    const freezeLeft = processedColumns.filter((col) => col.freeze === 'left');
    const freezeRight = processedColumns.filter((col) => col.freeze === 'right');

    setFlattenColumns(flattenHeaderLeaves(virtualized));
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

  const updateColumn = useCallback((key: string, update: Partial<IAdjustedHeader>) => {
    setColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
  }, []);

  const updateChildColumn = useCallback(
    (parentKey: string, childKey: string, update: Partial<IAdjustedHeader>) => {
      // Update child bertingkat pada kolom non-freeze dan propagasi perubahan width ke ancestor
      setColumns((prev) =>
        prev.map((col) => {
          if (col.key !== parentKey) return col;
          return updateChildDeep(col, childKey, update);
        }),
      );
    },
    [],
  );

  const updateFreezeColumn = useCallback(
    (key: string, freezeType: 'left' | 'right', update: Partial<IAdjustedHeader>) => {
      if (freezeType === 'left') {
        setFreezeLeftColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
      } else {
        setFreezeRightColumns((prev) => prev.map((col) => (col.key === key ? { ...col, ...update } : col)));
      }
    },
    [],
  );

  const updateFreezeChildColumn = useCallback(
    (parentKey: string, childKey: string, freezeType: 'left' | 'right', update: Partial<IAdjustedHeader>) => {
      // Update child bertingkat pada kolom freeze (kiri/kanan) dan propagasi perubahan width ke ancestor
      const updateFn = (prev: IAdjustedHeader[]) =>
        prev.map((col) => {
          if (col.key !== parentKey) return col;
          return updateChildDeep(col, childKey, update);
        });

      if (freezeType === 'left') {
        setFreezeLeftColumns(updateFn);
      } else {
        setFreezeRightColumns(updateFn);
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
        flattenColumns,
        freezeLeftColumns,
        freezeRightColumns,
        freezeLeftColumnsWidth,
        freezeRightColumnsWidth,
        isFilterVisible,
        getLeaves: getLeavesOfNode,
        getDepth: getDepthOfNode,
        updateColumn,
        updateChildColumn,
        updateFreezeChildColumn,
        updateFreezeColumn,
        toggleColumnVisibility,
        toggleFilterVisibility,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
