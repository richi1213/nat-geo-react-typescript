import { PropsWithChildren } from 'react';

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return <header>{children}</header>;
};
