export function generateFilterSelectionOptions<TData, TIndex extends keyof TData>(
  dataSource: TData[],
  dataKey: TIndex,
) {
  const grouping = (dataSource || []).reduce<Record<string, TData[]>>((acc, item) => {
    const key = String(item[dataKey]);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const groupingKeys = Object.keys(grouping);

  const haveKeys = groupingKeys.join(',').length;

  return haveKeys
    ? Object.keys(grouping)
        ?.filter((item) => item !== 'null' && item !== 'undefined' && item !== '')
        ?.map((name) => name)
    : [];
}
