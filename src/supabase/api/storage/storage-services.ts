import { supabase } from '@/supabase/supabase-client';

const articleBucketName = 'article-assets';
const imageFolderName = 'images';

export const uploadImageToSupabase = async (file: File): Promise<string> => {
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${imageFolderName}/${fileName}`;

  const { error } = await supabase.storage
    .from(articleBucketName)
    .upload(filePath, file);

  if (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  return filePath;
};

export const getPublicUrlFromSupabase = (filePath: string): string => {
  const { data: publicUrlData } = supabase.storage
    .from(articleBucketName)
    .getPublicUrl(filePath);

  if (!publicUrlData?.publicUrl) {
    throw new Error(
      'Failed to retrieve the public URL for the uploaded image.',
    );
  }

  return publicUrlData.publicUrl;
};
