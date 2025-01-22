import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'first_name_is_required'),
  lastName: z.string().min(2, 'last_name_is_required'),
  username: z
    .string()
    .min(3, 'username_minimum_length')
    .regex(/^[a-zA-Z0-9_]+$/, 'username_allowed_characters'),
});

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;
