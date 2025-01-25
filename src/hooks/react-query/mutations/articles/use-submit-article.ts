import {
  QUERY_KEYS,
  useCategorySlug,
  useGetMe,
  usePostArticle,
  useUploadFile,
} from '@/hooks';
import { type ArticleSchema, sanitazeHtmlContent } from '@/pages';
import {
  getPublicUrlFromSupabase,
  IMAGES_FOLDER_NAME,
  VIDEOS_FOLDER_NAME,
} from '@/supabase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const useSubmitArticle = (categoryId: string) => {
  const { t } = useTranslation('notifications');

  const queryClient = useQueryClient();
  const { id } = useGetMe();
  const { mutateAsync: uploadFile } = useUploadFile();
  const { mutate: postArticle } = usePostArticle();
  const { data: categorySlug } = useCategorySlug(categoryId);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: ArticleSchema) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.content, 'text/html');

        const sanitizedContent = sanitazeHtmlContent(doc.body.innerHTML);
        const sanitizedDoc = parser.parseFromString(
          sanitizedContent,
          'text/html',
        );

        // Handle <img> uploads
        const images = Array.from(sanitizedDoc.querySelectorAll('img'));
        const imageUploadPromises = images.map(async (img) => {
          const src = img.getAttribute('src');
          if (src?.startsWith('blob:')) {
            const file = await fetch(src).then((r) => r.blob());

            if (file.size > 4 * 1024 * 1024) {
              throw new Error(
                `Image size exceeds the 4MB limit. Please upload a smaller image.`,
              );
            }

            const filePath = await uploadFile({
              file: new File([file], 'uploaded_image', { type: file.type }),
              folder: IMAGES_FOLDER_NAME,
            });
            const publicUrl = getPublicUrlFromSupabase(filePath);
            img.setAttribute('src', publicUrl); // Update img src
          }
        });

        // Handle <iframe> uploads
        const iframes = Array.from(sanitizedDoc.querySelectorAll('iframe'));
        const videoUploadPromises = iframes.map(async (iframe) => {
          const src = iframe.getAttribute('src');
          if (src?.startsWith('blob:')) {
            try {
              const file = await fetch(src).then((r) => r.blob());

              if (file.size > 10 * 1024 * 1024) {
                throw new Error(
                  `Video size exceeds the 10MB limit. Please upload a smaller video.`,
                );
              }

              const filePath = await uploadFile({
                file: new File([file], 'uploaded_video', { type: file.type }),
                folder: VIDEOS_FOLDER_NAME,
              });

              const publicUrl = getPublicUrlFromSupabase(filePath);
              iframe.setAttribute('src', publicUrl); // Update iframe src
            } catch (error) {
              console.error('Error uploading video:', error);
            }
          }
        });

        let coverImageUrl: string | undefined;
        if (data.cover_image) {
          const file = data.cover_image;
          const filePath = await uploadFile({
            file,
            folder: IMAGES_FOLDER_NAME,
          });
          coverImageUrl = getPublicUrlFromSupabase(filePath);
        }

        await Promise.all([...imageUploadPromises, ...videoUploadPromises]);

        const finalSanitizedContent = sanitazeHtmlContent(
          sanitizedDoc.body.innerHTML,
        );

        const finalData = {
          ...data,
          content: finalSanitizedContent,
          cover_image: coverImageUrl || '',
          author_id: id || '',
          category_id: data.category_id,
        };

        await postArticle(finalData);

        console.log('Final Data:', finalData);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error during submission:', error.message);
        } else {
          console.error('Unknown error occurred during submission');
        }
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ARTICLES, categorySlug],
      });
      navigate(`/${categorySlug}`);
      toast.success(t('article_successfully_created'));
    },
    onError: () => toast.error(t('failed_to_create_article')),
  });
};
