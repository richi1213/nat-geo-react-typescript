import { GeneralHeading, ArticlesGrid, TodaysPicks } from '@/pages';

export const LastestStories: React.FC = () => {
  return (
    <section className='flex justify-center bg-background px-4 py-8 text-foreground'>
      <div className='w-full max-w-5xl'>
        <GeneralHeading />
        <div className='space mt-6 grid gap-y-4 lg:grid-cols-12'>
          <TodaysPicks />
          <ArticlesGrid />
        </div>
      </div>
    </section>
  );
};
