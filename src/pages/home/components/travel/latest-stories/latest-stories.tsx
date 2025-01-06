import { ArticlesList } from '@/pages/home/components/latest-stories/todays-picks/articles';
import { StoryHeading } from './heading';

export const LatestStories: React.FC = () => {
  return (
    <div className='lg:col-span-4'>
      <StoryHeading />
      <ArticlesList />
    </div>
  );
};
