import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazySearchtPage = lazy(() => import('../components'));

export const SearchView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazySearchtPage />
  </Suspense>
);
