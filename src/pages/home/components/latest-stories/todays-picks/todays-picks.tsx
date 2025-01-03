import { ArticlesList } from './articles';
import { Heading } from './heading';

export const TodaysPicks: React.FC = () => {
  return (
    <div className='order-2 lg:order-1 lg:col-span-4'>
      <Heading />
      <ArticlesList />
    </div>
  );
};
