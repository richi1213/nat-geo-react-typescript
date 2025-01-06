import { HeadingLine } from '@/components';

export const StoryHeading: React.FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <HeadingLine orientation='vertical' />
      <h2 className='text-3xl uppercase'>latest stories</h2>
    </div>
  );
};
