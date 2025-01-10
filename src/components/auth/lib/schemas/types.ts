import { z } from 'zod';
import { emailSchema, loginSchema, registrationSchema } from '@/components';

export type EmailSchema = z.infer<typeof emailSchema>;
export type RegistrationSchema = z.infer<typeof registrationSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
