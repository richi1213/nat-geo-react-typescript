import { useCategoryByName } from '@/hooks';
import { CategoryHeader, CategoryArticles } from '.';
import { useParams } from 'react-router';
import { ArticleCategory } from '@/supabase';
import { Loading } from '@/components';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: ArticleCategory }>();
  const { data } = useCategoryByName(category!);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <CategoryHeader category={data} />
      <CategoryArticles />
    </div>
  );
};

export default CategoryPage;
