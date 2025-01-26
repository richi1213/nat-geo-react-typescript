import {
  ArticleHorizontalCard,
  LinkButton,
  VirtualizedList,
} from '@/components';
import { useArticlesByCategory } from '@/hooks';
import { cn } from '@/lib/utils';
import { ArticleCategory } from '@/supabase';
import { estimateRowHeight } from '@/utils';
import { RefreshCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

export const CategoryArticlesRow: React.FC = () => {
  const { t } = useTranslation('common');
  const { category } = useParams<{ category: ArticleCategory }>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useArticlesByCategory(category!);

  const articles = data ? data.pages.flatMap((page) => page.articles) : [];

  if (articles.length === 0) {
    return null;
  }

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
          {t('load_more')}
        </LinkButton>
      </div>
    </div>
  );
};
