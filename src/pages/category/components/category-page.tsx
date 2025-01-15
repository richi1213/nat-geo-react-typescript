import { useCategoryByName } from '@/hooks';
import { CategoryHeader } from '.';
import { useParams } from 'react-router';
import { ArticleCategory } from '@/supabase';
import { Loading } from '@/components';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: ArticleCategory }>();
  const { data } = useCategoryByName(category!);

  if (!data) {
    return <Loading />;
  }

  console.log(data);

  return (
    <div>
      <CategoryHeader category={data} />
    </div>
  );
};

export default CategoryPage;
