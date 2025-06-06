import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('../components'));

export const HomeView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyHomePage />
  </Suspense>
);
