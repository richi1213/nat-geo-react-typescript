import { RouterProvider } from 'react-router';
import { appRouter } from '@/routes';

export const App: React.FC = () => <RouterProvider router={appRouter} />;
