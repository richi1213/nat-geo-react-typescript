import { TravelLayout, Heading, ExpeditionGrid, LatestStories } from '@/pages';

export const Travel: React.FC = () => {
  return (
    <TravelLayout>
      <div className='mx-auto max-w-5xl px-4'>
        <Heading />
        <div className='mt-6 grid gap-4 lg:grid-cols-12'>
          <ExpeditionGrid />
          <LatestStories />
        </div>
      </div>
    </TravelLayout>
  );
};
