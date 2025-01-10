import { RouterProvider } from 'react-router';
import { appRouter } from '@/routes';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/atoms';

export const App: React.FC = () => {
  const session = useAtomValue(userAtom);
  console.log(session);
  return <RouterProvider router={appRouter} />;
};
