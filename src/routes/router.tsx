import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router';
import { DefaultLayout } from '@/components';
import {
  HomeView,
  CategoryView,
  NotFound,
  SingleArticleView,
  WriteArticleView,
} from '@/pages';
import { IsUnauthorizedGuard } from '@/routes/guards';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<HomeView />} />
      <Route element={<IsUnauthorizedGuard />}>
        <Route path='write-article' element={<WriteArticleView />} />
      </Route>
      <Route path=':category'>
        <Route index element={<CategoryView />} />
        <Route path='article/:articleSlug' element={<SingleArticleView />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);
