import { ArticlesGridLayout, ArticleCard, Loading } from '@/components';
import { useRecentArticlesByCategory } from '@/hooks';

export const ImpactArticlesGrid: React.FC = () => {
  const { data, isLoading } = useRecentArticlesByCategory('impact');

  if (isLoading) return <Loading />;

  const recentArticles = data?.articles || [];

  console.log(data?.articles);
  return (
    <ArticlesGridLayout>
      {recentArticles?.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
          variant={index === 0 ? 'hero' : 'standard'}
        />
      ))}
    </ArticlesGridLayout>
  );
};
