import { PropsWithChildren } from 'react';

export const SearchMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='space-y-3'>{children}</div>;
};
