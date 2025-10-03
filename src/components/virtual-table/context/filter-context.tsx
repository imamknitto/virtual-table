import { createContext, useContext } from 'use-context-selector';
import type { TFilterAdvanceConfig, TSortOrder } from '../lib';
import { useFilterAdvance, useFilterSearch, useFilterSelection, useFilterSort } from '../hooks';

interface IFilterContext {
  tableKey?: string;
  filteredData: unknown[];
  isResetFilter?: boolean;
  sort: {
    sortKey: string | null;
    sortBy: TSortOrder;
    onChangeSort: (columnKey: string) => void;
    onChangeSpecificSort: (columnKey: string, sortBy: TSortOrder) => void;
  };
  search: {
    activeSearch: Record<string, string>;
    updateSearch: (columnkey: string, value: string) => void;
    resetSearch: (columnKey: string) => void;
  };
  selection: {
    updateFilter: (key: keyof unknown, value: string[]) => void;
    resetFilter: (key: keyof unknown) => void;
  };
  advance: {
    updateAdvanceFilter: (key: keyof unknown, config: TFilterAdvanceConfig, value: string) => void;
    resetAdvanceFilter: (key: keyof unknown) => void;
  };
}

interface IFilterContextProvider<T> {
  children: React.ReactNode;
  useSessionFilter?: { tableKey: string };
  dataSource: T[];
  isResetFilter?: boolean;
  useServerFilter?: {
    sort?: boolean;
    search?: boolean;
    selection?: boolean;
    advance?: boolean;
  };
  onChangeFilter?: {
    sort?: (key: keyof T, sortBy: TSortOrder) => void;
    search?: (data: Record<keyof T, string>) => void;
    selection?: (data: Record<keyof T, string[]>) => void;
    advance?: (data: Record<keyof T, { config_name: TFilterAdvanceConfig; value: string }>) => void;
  };
}

const FilterContext = createContext<IFilterContext | null>(null);

export const useFilterContext = () => useContext(FilterContext)!;

export const FilterContextProvider = <T,>(props: IFilterContextProvider<T>) => {
  const { children, dataSource, isResetFilter, useServerFilter, onChangeFilter, useSessionFilter } = props;

  const { sortKey, sortBy, handleSort, sortedData, handleSpecificSort } = useFilterSort({
    data: dataSource,
    isResetFilter,
    useServerSort: useServerFilter?.sort,
    onChangeSort: onChangeFilter?.sort as (key: string, sortBy: TSortOrder) => void,
  });

  const { searchedData, activeSearch, updateSearch, resetSearch } = useFilterSearch({
    data: sortedData,
    isResetFilter,
    useSessionFilter,
    useServerSearch: useServerFilter?.search,
    onChangeSearch: onChangeFilter?.search,
  });

  const { filteredData, updateFilter, resetFilter } = useFilterSelection({
    data: searchedData,
    isResetFilter,
    useSessionFilter,
    useServerFilter: useServerFilter?.selection,
    onChangeFilter: onChangeFilter?.selection,
  });

  const { filteredAdvanceData, updateAdvanceFilter, resetAdvanceFilter } = useFilterAdvance({
    data: filteredData,
    isResetFilter,
    useSessionFilter,
    useServerAdvanceFilter: useServerFilter?.advance,
    onChangeAdvanceFilter: onChangeFilter?.advance,
  });

  return (
    <FilterContext.Provider
      value={{
        tableKey: useSessionFilter?.tableKey,
        isResetFilter,
        filteredData: filteredAdvanceData,
        sort: {
          sortBy,
          sortKey,
          onChangeSort: handleSort,
          onChangeSpecificSort: handleSpecificSort,
        },
        search: { activeSearch, updateSearch, resetSearch },
        selection: { updateFilter, resetFilter },
        advance: { updateAdvanceFilter, resetAdvanceFilter },
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
