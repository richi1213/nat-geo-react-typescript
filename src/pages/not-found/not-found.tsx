import { UnderlinedButton } from '@/components';

export const NotFound: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4'>
      <h2 className='mb-6 text-center text-3xl font-bold tracking-wider md:text-5xl'>
        SOMETHING WENT
        <br />
        WRONG
      </h2>
      <p className='text-lg'>
        Please try again or{' '}
        <UnderlinedButton size='sm' to='/'>
          return home
        </UnderlinedButton>
        .
      </p>
    </div>
  );
};
