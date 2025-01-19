import { z } from 'zod';

export const articleSchema = z.object({
  titleEn: z
    .string()
    .min(4, 'Title (English) must be at leas 4 characters long'),
  titleKa: z
    .string()
    .min(4, 'Title (Georgian) must be at leas 4 characters long'),
  imageFile: z
    .custom<File>((value) => value instanceof File, {
      message: 'Please upload a valid image file.',
    })
    .refine((file) => file.size <= 4 * 1024 * 1024, {
      message: 'Image file size must not exceed 4MB.',
    })
    .refine(
      (file) =>
        ['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(
          file.type,
        ),
      {
        message: 'Only JPEG, PNG, WebP, or AVIF images are allowed.',
      },
    ),
  content: z
    .string()
    .min(4, 'Content is required')
    .max(2000, 'Content must not exceed 2000 characters'),
});

export type ArticleSchema = z.infer<typeof articleSchema>;
