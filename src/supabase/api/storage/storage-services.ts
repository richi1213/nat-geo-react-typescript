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

export const fetchFilesFromSupabase = async (
  folder: string,
): Promise<string[]> => {
  const { data, error } = await supabase.storage
    .from(ARTICLE_BUCKET_NAME)
    .list(folder, { limit: 15 });

  if (error) {
    throw new Error(`Failed to fetch files from ${folder}: ${error.message}`);
  }

  if (!data) {
    return [];
  }

  const publicUrls = data
    .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp|avif)$/))
    .map((file) => {
      const { data: publicUrlData } = supabase.storage
        .from(ARTICLE_BUCKET_NAME)
        .getPublicUrl(`${folder}/${file.name}`);
      return publicUrlData?.publicUrl;
    });

  return publicUrls.filter(Boolean) as string[];
};
