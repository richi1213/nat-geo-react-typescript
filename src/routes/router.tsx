import { DefaultLayout } from '@/components';
import { HomeView, NotFound } from '@/pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<HomeView />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>,
  ),
);
