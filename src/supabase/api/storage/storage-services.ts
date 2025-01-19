import { supabase } from '@/supabase/supabase-client';

const ARTICLE_BUCKET_NAME = 'article-assets';
export const IMAGES_FOLDER_NAME = 'images' as const;
export const VIDEOS_FOLDER_NAME = 'videos' as const;

export const uploadFileToSupabase = async (
  file: File,
  folder: typeof IMAGES_FOLDER_NAME | typeof VIDEOS_FOLDER_NAME,
): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from(ARTICLE_BUCKET_NAME)
    .upload(filePath, file);

  if (error) {
    throw new Error(
      `Failed to upload ${folder === IMAGES_FOLDER_NAME ? 'image' : 'video'}: ${error.message}`,
    );
  }

  return filePath;
};

export const getPublicUrlFromSupabase = (filePath: string): string => {
  const { data: publicUrlData } = supabase.storage
    .from(ARTICLE_BUCKET_NAME)
    .getPublicUrl(filePath);

  if (!publicUrlData?.publicUrl) {
    throw new Error('Failed to retrieve the public URL for the uploaded file.');
  }

  return publicUrlData.publicUrl;
};
