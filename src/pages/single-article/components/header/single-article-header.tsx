import { PropsWithChildren } from 'react';

export const SingleArticleHeader: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='space-y-6 pb-8 pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:space-y-0 lg:pb-0 lg:pt-0'>
      {children}
    </div>
  );
};
