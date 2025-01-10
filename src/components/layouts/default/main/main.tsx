import type { PropsWithChildren } from 'react';

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className='flex flex-grow flex-col'>{children}</main>;
};
