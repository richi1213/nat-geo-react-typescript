import { ArticlesList } from '@/pages/home/components/latest-stories/todays-picks/articles';
import { IssueHeading } from './issue-heading';

export const InThisIssue: React.FC = () => {
  return (
    <div className='lg:col-span-4'>
      <IssueHeading />
      <ArticlesList />
    </div>
  );
};
