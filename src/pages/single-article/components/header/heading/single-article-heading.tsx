import { PropsWithChildren } from 'react';

export const SingleArticleHeading: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='mx-auto w-full max-w-lg space-y-4 px-5 lg:col-start-2 lg:row-span-1 lg:row-start-2 xl:px-0'>
      {children}
    </div>
  );
};
