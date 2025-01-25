import { ArticleCard, Loading } from '@/components';
import { useRandomArticles } from '@/hooks';

export const ArticlesGrid: React.FC = () => {
  const { data, isLoading } = useRandomArticles(undefined, 3);

  if (isLoading) return <Loading />;

  if (!data) return <div>No data</div>;

  return (
    <div className='order-1 lg:order-2 lg:col-span-8'>
      <div className='space-y-6'>
        <ArticleCard article={data[0]} variant='hero' />
        <div className='grid gap-4 sm:grid-cols-2'>
          {data.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
