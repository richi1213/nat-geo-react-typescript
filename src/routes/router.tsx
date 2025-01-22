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
  SearchView,
  MyArticlesView,
} from '@/pages';
import { IsUnauthorizedGuard } from '@/routes/guards';
import { DEFAULT_LAYOUT_PATHS } from '@/routes/enums';

const {
  HOME,
  WRITE_ARTICLE,
  MY_ARTICLES,
  SEARCH,
  CATEGORY,
  SINGLE_ARTICLE,
  NOT_FOUND,
} = DEFAULT_LAYOUT_PATHS;

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<DefaultLayout />}>
      <Route index element={<HomeView />} />
      <Route element={<IsUnauthorizedGuard />}>
        <Route path={WRITE_ARTICLE} element={<WriteArticleView />} />
        <Route path={MY_ARTICLES} element={<MyArticlesView />} />
      </Route>
      <Route path={SEARCH} element={<SearchView />} />
      <Route path={CATEGORY}>
        <Route index element={<CategoryView />} />
        <Route path={SINGLE_ARTICLE} element={<SingleArticleView />} />
      </Route>
      <Route path={NOT_FOUND} element={<NotFound />} />
    </Route>,
  ),
);
