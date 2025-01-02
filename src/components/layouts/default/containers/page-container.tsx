import { PropsWithChildren } from 'react';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='container mx-auto'>{children}</div>;
};
