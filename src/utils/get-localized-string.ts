export const getLocalizedString = (
  item: Record<string, string | null>,
  key: string,
  language: string,
) => item[`${key}_${language}`] || item[`${key}_en`];
