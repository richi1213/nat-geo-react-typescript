import * as z from 'zod';

export const emailSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export const registrationSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  fbLink: z
    .string()
    .url('Must be a valid URL')
    .refine(
      (url) => url.includes('facebook.com'),
      'Must be a valid Facebook profile link',
    ),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores',
    ),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type EmailSchema = z.infer<typeof emailSchema>;
export type RegistrationSchema = z.infer<typeof registrationSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
