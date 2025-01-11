import { useTranslation } from 'react-i18next';

export const useTranslationWithNamespace = (namespace: string) => {
  const { t } = useTranslation(namespace);
  const getTranslatedLabel = (key: string) => t(key);
  return { getTranslatedLabel };
};
