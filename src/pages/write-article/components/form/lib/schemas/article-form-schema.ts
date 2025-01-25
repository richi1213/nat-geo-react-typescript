import { z } from 'zod';

export const getArticleFormSchema = (t?: (key: string) => string) => {
  return z.object({
    title_en: z.string().min(4, {
      message: t
        ? t('title_english_minimum_length')
        : 'Title (English) must be at least 4 characters long',
    }),
    title_ka: z.string().min(4, {
      message: t
        ? t('title_georgian_minimum_length')
        : 'Title (Georgian) must be at least 4 characters long',
    }),
    cover_image: z
      .custom<File | null>((value) => value instanceof File || value === null, {
        message: t
          ? t('invalid_image_file')
          : 'Please upload a valid image file.',
      })
      .refine(
        (file) =>
          file === null ||
          (file.size <= 4 * 1024 * 1024 &&
            ['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(
              file.type,
            )),
        {
          message: t
            ? t('image_upload_error')
            : 'Only JPEG, PNG, WebP, or AVIF images are allowed and size must not exceed 4MB.',
        },
      ),
    content: z
      .string()
      .min(4, { message: t ? t('content_required') : 'Content is required' })
      .max(2000, {
        message: t
          ? t('content_max_length')
          : 'Content must not exceed 2000 characters',
      }),
    category_id: z.string({
      errorMap: () => ({
        message: t ? t('category_required') : 'Category is required',
      }),
    }),
  });
};

export type ArticleSchema = z.infer<ReturnType<typeof getArticleFormSchema>>;
