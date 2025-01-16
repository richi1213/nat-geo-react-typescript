import { PropsWithChildren } from 'react';

export const AuthorInfo: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col md:flex-row'>{children}</div>;
};
