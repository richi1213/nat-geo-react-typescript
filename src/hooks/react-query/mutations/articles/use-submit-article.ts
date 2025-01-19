import { useGetMe, usePostArticle, useUploadFile } from '@/hooks';
import { type ArticleSchema } from '@/pages';
import {
  getPublicUrlFromSupabase,
  IMAGES_FOLDER_NAME,
  VIDEOS_FOLDER_NAME,
} from '@/supabase';
import { useMutation } from '@tanstack/react-query';

export const useSubmitArticle = () => {
  const { mutateAsync: uploadFile } = useUploadFile();
  const { mutate: postArticle } = usePostArticle();
  const { id } = useGetMe();

  return useMutation({
    mutationFn: async (data: ArticleSchema) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.content, 'text/html');

        // Handle <img> uploads
        const images = Array.from(doc.querySelectorAll('img'));
        const imageUploadPromises = images.map(async (img) => {
          const src = img.getAttribute('src');
          if (src?.startsWith('blob:')) {
            const file = await fetch(src).then((r) => r.blob());

            // Validate the image file size
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
            img.setAttribute('src', publicUrl);
          }
        });

        // Handle <iframe> uploads
        const iframes = Array.from(doc.querySelectorAll('iframe'));
        const videoUploadPromises = iframes.map(async (iframe) => {
          const src = iframe.getAttribute('src');
          if (src?.startsWith('blob:')) {
            const file = await fetch(src).then((r) => r.blob());

            // Validate the video file size
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
            iframe.setAttribute('src', publicUrl);
          }
        });

        // Wait for all uploads to complete
        await Promise.all([...imageUploadPromises, ...videoUploadPromises]);

        // Update the content with new URLs
        const updatedContent = doc.body.innerHTML;

        const finalData = {
          ...data,
          content: updatedContent,
          author_id: id,
          category_id: '36cbfd8f-c487-49f2-b7d8-055ae1fa7fa2',
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
  });
};
