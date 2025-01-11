import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LazyImpactPage = lazy(() => import('../components'));

export const ImpactView: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LazyImpactPage />
  </Suspense>
);
