import { memo, useMemo, useCallback } from 'react';
import Icon from '../icons';
import { useTableContext } from '../context/table-context';
import VirtualColumnAction from '../virtual-column-action';
import { Checkbox } from './index';

type IHeaderCaption = {
  isShowFilter: boolean;
  headerCaption: string;
  headerKey: string;
};

const HeaderCaption = ({ isShowFilter, headerCaption, headerKey }: IHeaderCaption) => {
  // Optimize context calls by getting all needed values in one selector
  const contextValues = useTableContext((ctx) => ({
    sort: ctx.sort,
    headerHeight: ctx.headerHeight,
    handleToggleFilterVisibility: ctx.handleToggleFilterVisibility,
    flattenedData: ctx.flattenedData,
    checkboxSelectionRow: ctx.checkboxSelectionRow,
  }));

  const { sort, headerHeight, handleToggleFilterVisibility, flattenedData, checkboxSelectionRow } = contextValues;

  const { sortKey, sortBy, handleSort, handleSpecificSort } = sort || {};

  // Memoize event handlers
  const onClickSort = useCallback(() => handleSort?.(headerKey), [handleSort, headerKey]);

  // Logic untuk kolom selection
  const isSelectAllColumn = useMemo(() => headerKey === 'row-selection', [headerKey]);
  
  const totalRows = useMemo(
    () => flattenedData.filter((item) => item.type === 'row').length,
    [flattenedData],
  );
  
  const selectedCount = useMemo(() => checkboxSelectionRow?.selectedRows?.size || 0, [checkboxSelectionRow?.selectedRows]);
  const isChecked = useMemo(() => selectedCount === totalRows && totalRows > 0, [selectedCount, totalRows]);

  const handleSelectAllChange = useCallback((checked: boolean) => {
    if (checked) {
      checkboxSelectionRow?.handleSelectAllCheckboxRow();
    } else {
      checkboxSelectionRow?.handleUnselectAllCheckboxRow();
    }
  }, [checkboxSelectionRow]);

  if (isSelectAllColumn) {
    return (
      <div
        className='flex items-center justify-center border-b border-gray-200'
        style={{ height: headerHeight }}
      >
        <Checkbox
          name='checkbox-select-all'
          checked={isChecked}
          onChecked={handleSelectAllChange}
        />
      </div>
    );
  }

  return (
    <div
      className='flex items-center px-1.5 border-b border-gray-200 cursor-pointer'
      style={{ height: headerHeight }}
      onClick={onClickSort}
    >
      {headerCaption}

      {isShowFilter && (
        <div className='w-full flex justify-between items-center'>
          <Icon
            name='sort'
            className='cursor-pointer ms-2'
            sort={headerKey === sortKey ? sortBy : 'unset'}
            onClick={onClickSort}
          />
          <VirtualColumnAction
            onClickSort={(sortBy) => handleSpecificSort(headerKey, sortBy)}
            onToggleFilterVisibility={handleToggleFilterVisibility}
          />
        </div>
      )}
    </div>
  );
};

export default memo(HeaderCaption) as typeof HeaderCaption;
