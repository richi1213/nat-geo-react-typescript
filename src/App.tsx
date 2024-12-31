import { appRouter } from '@/routes';
import { RouterProvider } from 'react-router';

export const App: React.FC = () => <RouterProvider router={appRouter} />;
