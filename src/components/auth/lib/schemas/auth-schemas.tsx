// useTranslatedSchemas.ts
import { useTranslationWithNamespace } from '@/hooks'; // Custom translation hook
import * as z from 'zod';

export const useTranslatedSchemas = () => {
  const { getTranslatedLabel } = useTranslationWithNamespace('header');

  const emailSchema = z.object({
    email: z.string().email({
      message: getTranslatedLabel('please_enter_a_valid_email_address'),
    }),
  });

  const registrationSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(2, getTranslatedLabel('first_name_is_required')),
    lastName: z.string().min(2, getTranslatedLabel('last_name_is_required')),
    fbLink: z
      .string()
      .url(getTranslatedLabel('must_be_a_valid_url'))
      .refine(
        (url) => url.includes('facebook.com'),
        getTranslatedLabel('must_be_a_valid_facebook_profile_link'),
      ),
    username: z
      .string()
      .min(3, getTranslatedLabel('username_minimum_length'))
      .regex(
        /^[a-zA-Z0-9_]+$/,
        getTranslatedLabel('username_allowed_characters'),
      ),
    password: z.string().min(6, getTranslatedLabel('password_minimum_length')),
  });

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  return { emailSchema, registrationSchema, loginSchema };
};
