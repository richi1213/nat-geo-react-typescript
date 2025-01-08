import { useTranslation } from 'react-i18next';

export const useFooterTranslation = () => {
  const { t } = useTranslation('footer');
  const getTranslatedLabel = (key: string) => t(key);
  return { getTranslatedLabel };
};
