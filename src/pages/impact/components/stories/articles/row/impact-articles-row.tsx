import { ArticleHorizontalCard, LinkButton } from '@/components';
import { useArticlesByCategory } from '@/hooks';
import { cn } from '@/lib/utils';
import { RefreshCcw } from 'lucide-react';

export const ImpactArticlesRow: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useArticlesByCategory('impact');

  console.log(data);

  const articles = data?.pages.flatMap((page) => page.articles);

  return (
    <>
      <div className='mb-0 mt-6 space-x-4'>
        {articles?.map((article) => (
          <ArticleHorizontalCard
            key={article.id}
            imageUrl={article.cover_image}
            category={article.category}
            title={article.title_en}
            href='/'
          />
        ))}
        <div className='mt-8 text-center'>
          <LinkButton
            variant='penguin'
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
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
