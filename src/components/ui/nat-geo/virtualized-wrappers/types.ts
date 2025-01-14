export type VirtualizedListProps<T> = {
  items: T[];
  CardComponent: React.ComponentType<T>;
  itemCount: number;
  estimateSize: (width: number) => number;
  overscan?: number;
  paddingEnd?: number;
};
