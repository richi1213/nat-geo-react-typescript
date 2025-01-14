import { useRef, useLayoutEffect, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { UseVirtualizedRowProps } from './types';
import { estimateRowHeight } from '@/utils';

export const useVirtualizedRow = ({
  itemCount,
  overscan = 6,
  paddingEnd = 0,
}: UseVirtualizedRowProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowHeight(windowWidth),
    overscan,
    paddingEnd,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      rowVirtualizer?.measure?.();
    };

    window.addEventListener('resize', handleResize);
    rowVirtualizer?.measure?.();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rowVirtualizer]);

  return { parentRef, rowVirtualizer };
};
