import { useCallback, useState } from 'react';

export const useCheckboxSelection = () => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [deselectedRows, setDeselectedRows] = useState<(string | number)[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleCheckboxSelection = useCallback(
    (
      selected: (string | number)[],
      deselected: (string | number)[],
      selectAll: boolean,
    ) => {
      setSelectedRows(selected);
      setDeselectedRows(deselected);
      setIsSelectAll(selectAll);
    },
    [],
  );

  return {
    selectedRows,
    deselectedRows,
    isSelectAll,
    handleCheckboxSelection,
  };
};

