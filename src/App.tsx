import React from 'react';
import { RouterProvider } from 'react-router';
import { useAuth } from '@/hooks/auth/use-auth';
import { appRouter } from '@/routes';

export const App: React.FC = () => {
  const { session } = useAuth();

  if (!session) {
    console.log('please login to coninue');
  }

  console.log(session);

  return <RouterProvider router={appRouter} />;
};
