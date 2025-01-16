import { DefaultLayout } from '@/components';
import { HomeView, CategoryView, NotFound, SingleArticleView } from '@/pages';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<HomeView />} />
      <Route path=':category'>
        <Route index element={<CategoryView />} />
        <Route path='article/:articleSlug' element={<SingleArticleView />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);
