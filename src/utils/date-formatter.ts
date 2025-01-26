import dayjs from 'dayjs';
import 'dayjs/locale/ka';

export const formatArticleDate = (
  createdAt: string,
  currentLanguage: string,
) => {
  const date = dayjs(createdAt);
  const locale = currentLanguage === 'ka' ? 'ka' : 'en';

  return date.locale(locale).format('MMMM D, YYYY');
};
