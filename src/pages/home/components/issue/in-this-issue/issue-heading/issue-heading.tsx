import { HeadingLine } from '@/components';

export const IssueHeading: React.FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <HeadingLine orientation='vertical' />
      <h2 className='text-3xl uppercase'>in this issue</h2>
    </div>
  );
};
