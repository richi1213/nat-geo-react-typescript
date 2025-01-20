import { z } from 'zod';

export const articleSchema = z.object({
  title_en: z
    .string()
    .min(4, 'Title (English) must be at least 4 characters long'),
  title_ka: z
    .string()
    .min(4, 'Title (Georgian) must be at least 4 characters long'),
  cover_image: z
    .custom<File | null>((value) => value instanceof File || value === null, {
      message: 'Please upload a valid image file.',
    })
    .refine(
      (file) =>
        file === null ||
        (file.size <= 4 * 1024 * 1024 &&
          ['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(
            file.type,
          )),
      {
        message:
          'Only JPEG, PNG, WebP, or AVIF images are allowed and size must not exceed 4MB.',
      },
    ),
  content: z
    .string()
    .min(4, 'Content is required')
    .max(2000, 'Content must not exceed 2000 characters'),
  category_id: z.string({
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

export type ArticleSchema = z.infer<typeof articleSchema>;
