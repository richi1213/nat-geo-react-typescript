import { useState, useLayoutEffect, useRef } from 'react';
import { ArticleHorizontalCard, LinkButton } from '@/components';
import { useArticlesByCategory } from '@/hooks';
import { cn } from '@/lib/utils';
import { RefreshCcw } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';

export const ImpactArticlesRow: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useArticlesByCategory('impact');

  const articles = data ? data.pages.flatMap((page) => page.articles) : [];

  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? articles.length + 1 : articles.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => {
      const width = windowWidth;

      if (width < 480) {
        return 140; // for mobile screens
      } else if (width >= 480 && width < 640) {
        return 190; // for small screens (sm)
      } else if (width >= 640 && width < 1024) {
        return 320; // for medium screens (md)
      } else {
        return 360; // for large screens (lg)
      }
    },
    overscan: 6,
    paddingEnd: -500,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      rowVirtualizer?.measure?.();
    };

    window.addEventListener('resize', handleResize);

    // Measure virtualizer on initial render
    rowVirtualizer?.measure?.();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rowVirtualizer]);

  return (
    <>
      <div className='mb-0 mt-6 space-x-4'>
        <div
          ref={parentRef}
          className='scrollbar-hide h-[500px] w-full space-y-4 overflow-auto'
        >
          <div
            className='relative w-full'
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const article = articles[virtualRow.index];

              if (!article) {
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
                  <ArticleHorizontalCard
                    imageUrl={article.cover_image}
                    category={article.category}
                    title={article.title_en}
                    href='/impact'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='mt-8 text-center'>
          <LinkButton
            variant='penguin'
            onClick={() => fetchNextPage()}
            disabled={isFetching && !isFetchingNextPage}
            className={cn({ hidden: !hasNextPage })}
          >
            <RefreshCcw />
            load more
          </LinkButton>
        </div>
      </div>
    </>
  );
};
