import { PropsWithChildren } from 'react';

export const ArticlesGridLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='mt-6'>
      <div className='grid gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2'>
        {children}
      </div>
    </div>
  );
};
