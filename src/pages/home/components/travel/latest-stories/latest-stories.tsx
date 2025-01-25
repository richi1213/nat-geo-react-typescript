import { TravelArticlesList, StoryHeading } from '.';

export const LatestStories: React.FC = () => {
  return (
    <div className='lg:col-span-4'>
      <StoryHeading />
      <TravelArticlesList />
    </div>
  );
};
