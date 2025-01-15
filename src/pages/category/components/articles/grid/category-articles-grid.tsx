import { ArticleCard, ArticlesGridLayout } from '@/components';
import { useRecentArticlesByCategory } from '@/hooks';
import { ArticleCategory } from '@/supabase';
import { useParams } from 'react-router';

export const CategoryArticlesGrid: React.FC = () => {
  const { category } = useParams<{ category: ArticleCategory }>();
  const { data } = useRecentArticlesByCategory(category!);

  const recentArticles = data?.articles;

  return (
    <ArticlesGridLayout>
      {recentArticles?.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </ArticlesGridLayout>
  );
};
