import { z } from 'zod';

export const editArticleSchema = z.object({
  title_en: z
    .string()
    .min(4, 'Title (English) must be at least 4 characters long'),
  title_ka: z
    .string()
    .min(4, 'Title (Georgian) must be at least 4 characters long'),
  cover_image: z
    .string()
    .url('Please provide a valid URL for the cover image')
    .nullable(),
  content: z
    .string()
    .min(4, 'Content is required')
    .max(2000, 'Content must not exceed 2000 characters'),
  category_id: z.string({
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

export type EditArticleSchema = z.infer<typeof editArticleSchema>;
