import { DefaultLayout } from '@/components';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<DefaultLayout />}>
        {/* <Route element={<IsAuthorizedGuard />}>{AUTH_LAYOUT}</Route>
        <Route element={<IsUnauthorizedGuard />}>{DASHBOARD_LAYOUT}</Route> */}
      </Route>
      {/* <Route path='*' element={<NotFound />} /> */}
    </>,
  ),
);
