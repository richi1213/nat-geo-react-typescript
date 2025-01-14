export type UseVirtualizedRowProps = {
  itemCount: number;
  estimateSize: (width: number) => number;
  overscan?: number;
  paddingEnd?: number;
};
