import { PropsWithChildren } from 'react';

export const AuthorInfo: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row lg:col-start-2 lg:row-span-1 lg:row-start-3'>
      {children}
    </div>
  );
};
