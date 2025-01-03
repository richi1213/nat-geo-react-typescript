import { HeadingLine } from '@/components';

export const Heading: React.FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <HeadingLine orientation='vertical' />
      <h2 className='text-3xl uppercase'>today's picks</h2>
    </div>
  );
};
