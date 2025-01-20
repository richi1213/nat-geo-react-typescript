import { toast } from 'sonner';

export const handleCopyLink = () => {
  const currentUrl = window.location.href;

  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      toast.success('Link copied to clipboard!', {
        description: 'You can now share the link.',
      });
    })
    .catch(() => {
      toast.error('Failed to copy the link. Please try again.');
    });
};
