import { useCallback, useState } from 'react';

export const useCustomizationControls = () => {
  const [headerMode, setHeaderMode] = useState<'single' | 'double'>('double');
  const [customHeaderEnabled, setCustomHeaderEnabled] = useState(true);
  const [filterSelectionEnabled, setFilterSelectionEnabled] = useState(true);
  const [filterVisibilityEnabled, setFilterVisibilityEnabled] = useState(true);
  const [showCode, setShowCode] = useState(false);

  const toggleHeaderMode = useCallback((mode: 'single' | 'double') => {
    setHeaderMode(mode);
  }, []);

  const toggleCustomHeader = useCallback(() => {
    setCustomHeaderEnabled((prev) => !prev);
  }, []);

  const toggleFilterSelection = useCallback(() => {
    setFilterSelectionEnabled((prev) => !prev);
  }, []);

  const toggleFilterVisibility = useCallback(() => {
    setFilterVisibilityEnabled((prev) => !prev);
  }, []);

  const toggleShowCode = useCallback(() => {
    setShowCode((prev) => !prev);
  }, []);

  return {
    headerMode,
    customHeaderEnabled,
    filterSelectionEnabled,
    filterVisibilityEnabled,
    showCode,
    toggleHeaderMode,
    toggleCustomHeader,
    toggleFilterSelection,
    toggleFilterVisibility,
    toggleShowCode,
  };
};

