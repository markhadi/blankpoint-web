import { useState, useCallback } from 'react';

export const useVisibleProjects = (data, initialCount = 2, step = 2) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + step);
  }, [step]);

  const visibleItems = data.slice(0, visibleCount);
  const isAllLoaded = visibleCount >= data.length;

  return {
    visibleItems,
    isAllLoaded,
    handleLoadMore,
  };
};
