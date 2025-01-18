import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazyWriteArticlePage = lazy(() => import('../components'));

export const WriteArticleView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyWriteArticlePage />
  </Suspense>
);
