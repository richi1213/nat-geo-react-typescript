import dayjs from 'dayjs';

export const formatArticleDate = (createdAt: string) => {
  const date = dayjs(createdAt);

  return date.format('MMMM D, YYYY');
};
