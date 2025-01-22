import { PropsWithChildren } from 'react';

export const SearchedArticles: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='h-[95vh]'>{children}</div>;
};
