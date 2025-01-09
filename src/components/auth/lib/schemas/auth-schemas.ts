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
  password: z.string().min(6, 'Password must be at least 6 characters'),
  newsletter: z.boolean().default(false),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type EmailSchema = z.infer<typeof emailSchema>;
export type RegistrationSchema = z.infer<typeof registrationSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
