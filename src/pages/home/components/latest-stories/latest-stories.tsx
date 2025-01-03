import { GeneralHeading, ArticlesGrid, TodaysPicks } from '@/pages';

export const LastestStories: React.FC = () => {
  return (
    <section className='flex justify-center bg-background px-4 text-foreground'>
      <div className='w-full max-w-5xl'>
        <GeneralHeading />
        <div className='grid lg:grid-cols-12'>
          <TodaysPicks />
          <ArticlesGrid />
        </div>
      </div>
    </section>
  );
};
