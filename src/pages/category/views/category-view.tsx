import { lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import { Loading } from '@/components';
import { NotFound, ImpactView } from '@/pages';
import { ArticleCategories, type ArticleCategory } from '@/supabase';

const LazyCategoryPage = lazy(() => import('../components'));

export const CategoryView: React.FC = () => {
  const { category } = useParams<{ category?: ArticleCategory }>();

  if (
    !category ||
    !Object.keys(ArticleCategories).includes(category.toUpperCase())
  ) {
    return <NotFound />;
  }

  if (category === ArticleCategories.IMPACT) {
    return <ImpactView />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <LazyCategoryPage />
    </Suspense>
  );
};
