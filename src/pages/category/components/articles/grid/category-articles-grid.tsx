import { ArticleCard, ArticlesGridLayout, Loading } from '@/components';
import { useRecentArticlesByCategory } from '@/hooks';
import { ArticleCategory } from '@/supabase';
import { useParams } from 'react-router';

export const CategoryArticlesGrid: React.FC = () => {
  const { category } = useParams<{ category: ArticleCategory }>();
  const { data, isLoading } = useRecentArticlesByCategory(category!);

  if (isLoading) return <Loading />;

  const recentArticles = data?.articles || [];

  return (
    <ArticlesGridLayout>
      {recentArticles?.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          variant={index === 0 ? 'hero' : 'standard'}
        />
      ))}
    </ArticlesGridLayout>
  );
};
