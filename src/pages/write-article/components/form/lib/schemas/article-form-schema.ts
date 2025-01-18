import { z } from 'zod';

export const articleSchema = z.object({
  titleEn: z.string().min(1, 'Title (English) is required'),
  titleKa: z.string().min(1, 'Title (Georgian) is required'),
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
});

export type ArticleSchema = z.infer<typeof articleSchema>;
