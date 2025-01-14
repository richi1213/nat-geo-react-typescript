import {
  ArticleHorizontalCard,
  LinkButton,
  VirtualizedList,
} from '@/components';
import { useArticlesByCategory } from '@/hooks';
import { estimateRowHeight } from '@/utils';
import { cn } from '@/lib/utils';
import { RefreshCcw } from 'lucide-react';

export const ImpactArticlesRow: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useArticlesByCategory('impact');

  const articles = data ? data.pages.flatMap((page) => page.articles) : [];

  return (
    <div className='mb-0 mt-6 space-x-4'>
      <VirtualizedList
        items={articles}
        CardComponent={ArticleHorizontalCard}
        itemCount={hasNextPage ? articles.length + 1 : articles.length}
        estimateSize={estimateRowHeight}
        overscan={5}
        paddingEnd={-500}
      />
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
  );
};
