import { DefaultLayout } from '@/components';
import { NotFound } from '@/pages';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='*' element={<NotFound />} />
      </Route>
    </>,
  ),
);
