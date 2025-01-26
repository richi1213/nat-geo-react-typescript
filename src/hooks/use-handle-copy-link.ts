import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useHandleCopyLink = () => {
  const { t } = useTranslation('notifications');

  return () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success(t('copySuccess'), {
          description: t('copySuccessDescription'),
        });
      })
      .catch(() => {
        toast.error(t('copyError'));
      });
  };
};
