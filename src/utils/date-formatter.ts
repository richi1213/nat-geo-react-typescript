export const formatArticleDate = (date: string): string => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date string');
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return parsedDate.toLocaleDateString('en-US', options);
};
