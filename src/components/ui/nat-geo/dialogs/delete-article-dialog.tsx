import {
  Button,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components';
import type { DeleteArticleDialogProps } from './types';
import { useDeleteArticle } from '@/hooks';

export const DeleteArticleDialog: React.FC<DeleteArticleDialogProps> = ({
  open,
  articleId,
  onClose,
}) => {
  const { mutate: deleteArticle, isPending } = useDeleteArticle();

  const handleDelete = () => {
    deleteArticle(articleId);
    console.log('hi');
    onClose();
  };

  console.log(articleId);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button variant='outline' onClick={handleDelete}>
          Delete Article
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this article?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Deleting this article will permanently
            remove it from the system and it cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isPending}>
            {isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
