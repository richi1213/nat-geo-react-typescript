import { IssueHeading, IssueArticlesList } from '.';

export const InThisIssue: React.FC = () => {
  return (
    <div className='lg:col-span-4'>
      <IssueHeading />
      <IssueArticlesList />
    </div>
  );
};
