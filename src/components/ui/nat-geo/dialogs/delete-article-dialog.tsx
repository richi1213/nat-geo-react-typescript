import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components';
import type { DeleteArticleDialogProps } from './types';
import { useDeleteArticle } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const DeleteArticleDialog: React.FC<DeleteArticleDialogProps> = ({
  articleId,
  onClose,
}) => {
  const { t } = useTranslation('notifications');

  const { mutate: deleteArticle, isPending } = useDeleteArticle();

  const handleDelete = () => {
    deleteArticle(articleId);
    onClose();
  };

  return (
    <AlertDialog
      open={!!articleId}
      onOpenChange={() => {
        setTimeout(() => (document.body.style.pointerEvents = ''), 100);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-foreground'>
            {t('deleteConfirmation')}
          </AlertDialogTitle>
          <AlertDialogDescription>{t('deleteWarning')}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose} className='text-foreground'>
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isPending}>
            {isPending ? t('deleting') : t('delete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
