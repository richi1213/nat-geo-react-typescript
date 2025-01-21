import qs from 'qs';
import { NavigateFunction, Location } from 'react-router';

export const updateUrl = (
  newParams: Record<string, string | undefined>,
  location: Location,
  navigate: NavigateFunction,
) => {
  const currentParams = qs.parse(location.search, { ignoreQueryPrefix: true });

  const updatedParams = { ...currentParams, ...newParams };
  Object.keys(updatedParams).forEach(
    (key) => updatedParams[key] === undefined && delete updatedParams[key],
  );

  navigate({
    pathname: location.pathname,
    search: qs.stringify(updatedParams, { addQueryPrefix: true }),
  });
};
