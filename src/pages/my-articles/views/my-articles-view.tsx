import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazyMyArticlesPage = lazy(() => import('../components'));

export const MyArticlesView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyMyArticlesPage />
  </Suspense>
);
