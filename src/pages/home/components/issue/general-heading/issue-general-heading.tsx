import { UnderlinedButton, HeadingLine } from '@/components';

export const IssueGeneralHeading: React.FC = () => {
  return (
    <div className='text-center'>
      <h2 className='md:7xl text-5xl font-bold uppercase'>
        january 2025 issue
      </h2>
      <p className='my-4 text-lg'>
        <UnderlinedButton
          className='bg-inherit text-lg text-foreground hover:text-background'
          size='sm'
        >
          subscribe
        </UnderlinedButton>{' '}
        to see the stories from National Geographic magazine
      </p>
      <HeadingLine />
    </div>
  );
};
