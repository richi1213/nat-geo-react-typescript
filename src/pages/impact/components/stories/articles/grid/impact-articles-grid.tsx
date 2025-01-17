import { ArticlesGridLayout, Loading, MayLikeCard } from '@/components';
import { useRecentArticlesByCategory } from '@/hooks';

export const ImpactArticlesGrid: React.FC = () => {
  const { data, isLoading } = useRecentArticlesByCategory('impact');

  if (isLoading) return <Loading />;

  const recentArticles = data?.articles || [];

  return (
    <ArticlesGridLayout>
      {recentArticles?.map((article, index) => (
        <MayLikeCard
          key={article.id}
          article={article}
          variant={index === 0 ? 'hero' : 'standard'}
        />
      ))}
    </ArticlesGridLayout>
  );
};
