import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazySingleArticlePage = lazy(() => import('../components'));

export const SingleArticleView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazySingleArticlePage />
  </Suspense>
);
