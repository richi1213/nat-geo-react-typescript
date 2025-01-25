import { useVirtualizedRow } from '@/hooks';
import type { VirtualizedListProps } from './types';

export const VirtualizedList = <T,>({
  items,
  CardComponent,
  itemCount,
  estimateSize,
  overscan = 5,
  paddingEnd = 0,
}: VirtualizedListProps<T>) => {
  const { parentRef, rowVirtualizer } = useVirtualizedRow({
    itemCount,
    estimateSize,
    overscan,
    paddingEnd,
  });

  return (
    <div
      ref={parentRef}
      className='h-[85vh] w-full space-y-4 overflow-auto scrollbar-hide'
    >
      <div
        className='relative mb-0 w-full'
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = items[virtualRow.index];

          if (!item) {
            return null;
          }

          return (
            <div
              key={virtualRow.index}
              className='absolute left-0 top-0 w-full'
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <CardComponent {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
