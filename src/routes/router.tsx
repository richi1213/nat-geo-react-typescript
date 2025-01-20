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
import { DEFAULT_LAYOUT_PATHS } from '@/routes/enums';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={DEFAULT_LAYOUT_PATHS.HOME} element={<DefaultLayout />}>
      <Route index element={<HomeView />} />
      <Route element={<IsUnauthorizedGuard />}>
        <Route
          path={DEFAULT_LAYOUT_PATHS.WRITE_ARTICLE}
          element={<WriteArticleView />}
        />
      </Route>
      <Route path={DEFAULT_LAYOUT_PATHS.CATEGORY}>
        <Route index element={<CategoryView />} />
        <Route
          path={DEFAULT_LAYOUT_PATHS.SINGLE_ARTICLE}
          element={<SingleArticleView />}
        />
      </Route>
      <Route path={DEFAULT_LAYOUT_PATHS.NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);
