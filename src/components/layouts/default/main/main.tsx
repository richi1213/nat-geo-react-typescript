import { PropsWithChildren } from 'react';

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className='flex flex-grow flex-col px-4 py-2'>{children}</main>;
};
