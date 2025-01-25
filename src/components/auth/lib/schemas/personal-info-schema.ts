import { z } from 'zod';

export const getPersonalInfoSchema = (t?: (key: string) => string) => {
  return z.object({
    firstName: z.string().min(2, {
      message: t ? t('first_name_required') : 'First name is required',
    }),
    lastName: z.string().min(2, {
      message: t ? t('last_name_required') : 'Last name is required',
    }),
    username: z
      .string()
      .min(3, {
        message: t
          ? t('username_min_length')
          : 'Username minimum symbols length should be 3',
      })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: t ? t('invalid_characters') : "This characters aren't allowed",
      }),
  });
};

export type PersonalInfoSchema = z.infer<
  ReturnType<typeof getPersonalInfoSchema>
>;
