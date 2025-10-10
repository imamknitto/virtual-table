import { useCallback, useEffect, useState } from 'react';
import type { TFilterAdvanceConfig, TSortOrder } from '../../../../components/virtual-table/lib/types';
import { fetchCombinedData } from '../utils/api';
import type { CombinedData, ServerFilters } from '../utils/types';

export const useServerFilter = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<ServerFilters>({
    search: {},
    sort: { key: null, order: 'unset' },
    selection: {},
    advance: {},
  });

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchParams = {
        ...filters,
        sort: filters.sort.key ? { key: filters.sort.key, order: filters.sort.order } : undefined,
      };

      const result = await fetchCombinedData(fetchParams);
      setData(result);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleFilterChange = useCallback(
    (filterType: 'sort' | 'search' | 'selection' | 'advance', filterData: unknown) => {
      setFilters((prev) => {
        const newFilters = { ...prev };

        if (filterType === 'sort') {
          newFilters.sort = filterData as { key: string | null; order: TSortOrder };
        } else if (filterType === 'search') {
          newFilters.search = filterData as Record<string, string>;
        } else if (filterType === 'selection') {
          newFilters.selection = filterData as Record<string, string[]>;
        } else if (filterType === 'advance') {
          newFilters.advance = filterData as Record<
            string,
            { config_name: TFilterAdvanceConfig; value: string }
          >;
        }

        return newFilters;
      });
    },
    [],
  );

  return {
    data,
    loading,
    filters,
    handleFilterChange,
  };
};

