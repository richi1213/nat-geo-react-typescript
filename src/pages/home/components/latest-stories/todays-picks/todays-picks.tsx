import { ArticlesList } from './articles';
import { Heading } from './heading';

export const TodaysPicks: React.FC = () => {
  return (
    <div className='col-span-4'>
      <Heading />
      <ArticlesList />
    </div>
  );
};
