import { UnderlinedButton, HeadingLine } from '@/components';

export const GeneralHeading: React.FC = () => {
  return (
    <div className='text-center'>
      <h2 className='md:8xl text-5xl font-bold uppercase'>latest stories</h2>
      <p className='my-4 text-lg'>
        <UnderlinedButton className='text-lg' size='sm'>
          subscribe
        </UnderlinedButton>{' '}
        for full access to read stories from National Geographic.
      </p>
      <HeadingLine />
    </div>
  );
};
