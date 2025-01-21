import { useTranslationWithNamespace } from '@/hooks';
import * as z from 'zod';

export const emailSchema = z.object({
  email: z.string().email({
    message: 'please_enter_a_valid_email_address',
  }),
});

export const registrationSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2, 'first_name_is_required'),
  lastName: z.string().min(2, 'last_name_is_required'),
  username: z
    .string()
    .min(3, 'username_minimum_length')
    .regex(/^[a-zA-Z0-9_]+$/, 'username_allowed_characters'),
  password: z.string().min(6, 'password_minimum_length'),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const useTranslatedSchemas = () => {
  const { getTranslatedLabel } = useTranslationWithNamespace('header');

  const translatedEmailSchema = emailSchema.refine(() => true, {
    message: getTranslatedLabel('please_enter_a_valid_email_address'),
  });

  const translatedRegistrationSchema = registrationSchema.transform((data) => ({
    ...data,
    messages: {
      email: getTranslatedLabel('email_required'),
      firstName: getTranslatedLabel('first_name_is_required'),
      lastName: getTranslatedLabel('last_name_is_required'),
      fbLink: getTranslatedLabel('must_be_a_valid_url'),
      username: getTranslatedLabel('username_minimum_length'),
      password: getTranslatedLabel('password_minimum_length'),
    },
  }));

  const translatedLoginSchema = loginSchema;

  return {
    emailSchema: translatedEmailSchema,
    registrationSchema: translatedRegistrationSchema,
    loginSchema: translatedLoginSchema,
  };
};

export type EmailSchema = z.infer<typeof emailSchema>;
export type RegistrationSchema = z.infer<typeof registrationSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
