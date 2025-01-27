import { z } from 'zod';

export const getEmailSchema = (t?: (key: string) => string) => {
  return z.object({
    email: z.string().email({
      message: t
        ? t('please_enter_a_valid_email_address')
        : 'Please enter a valid email address',
    }),
  });
};

export const getRegistrationSchema = (t?: (key: string) => string) => {
  return z.object({
    email: z.string().email({
      message: t
        ? t('please_enter_a_valid_email_address')
        : 'Please enter a valid email address',
    }),
    firstName: z.string().min(2, {
      message: t ? t('first_name_is_required') : 'First name is required',
    }),
    lastName: z.string().min(2, {
      message: t ? t('last_name_is_required') : 'Last name is required',
    }),
    username: z
      .string()
      .min(3, {
        message: t
          ? t('username_minimum_length')
          : 'Username minimum symbols length should be 3',
      })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: t
          ? t('username_allowed_characters')
          : "This characters aren't allowed",
      }),
    password: z.string().min(6, {
      message: t
        ? t('password_minimum_length')
        : 'Password must be at least 6 characters long',
    }),
  });
};

export const getLoginSchema = (t?: (key: string) => string) => {
  return z.object({
    email: z.string().email({
      message: t
        ? t('please_enter_a_valid_email_address')
        : 'Please enter a valid email address',
    }),
    password: z.string().min(6, {
      message: t
        ? t('password_minimum_length')
        : 'Password must be at least 6 characters',
    }),
  });
};

export type LoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;

export type RegistrationSchema = z.infer<
  ReturnType<typeof getRegistrationSchema>
>;

export type EmailSchema = z.infer<ReturnType<typeof getEmailSchema>>;
