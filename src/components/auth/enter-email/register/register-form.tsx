import {
  type RegistrationSchema,
  FormField,
  FormItem,
  FormControl,
  Input,
  FormMessage,
  Button,
  Form,
  type RegisterFormProps,
  useTranslatedSchemas,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterUser } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  onEditEmail,
  sheetRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('header');

  const { registrationSchema } = useTranslatedSchemas();

  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email,
      firstName: '',
      lastName: '',
      fbLink: '',
      username: '',
      password: '',
    },
  });

  const { mutate: registerUser, isPending, isSuccess } = useRegisterUser();

  if (isSuccess) sheetRef.current?.click();

  const onSubmit = async (values: RegistrationSchema) => {
    registerUser({
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
      fb_link: values.fbLink,
      username: values.username,
      password: values.password,
    });
  };

  return (
    <>
      <div className='mb-8 text-secondary'>
        <h2 className='mb-2 text-2xl font-semibold'>
          {t('create_account_title')}
        </h2>
        <p>
          {t('create_account_description')} <br />
          {t('create_account_using')}
          <span className='font-semibold'>{email}</span>
          <button
            onClick={onEditEmail}
            className='text-blue-600 hover:underline'
          >
            {t('edit')}
          </button>
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t('placeholder_first_name')}
                    className='h-12 bg-gray-100'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t('placeholder_last_name')}
                    className='h-12 bg-gray-100'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t('placeholder_username')}
                    className='h-12 bg-gray-100'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='fbLink'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='url'
                    placeholder={t('placeholder_facebook_profile')} //
                    className='h-12 bg-gray-100'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('placeholder_password')}
                      className='h-12 bg-gray-100 pr-10'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2'
                    >
                      {showPassword ? (
                        <EyeOffIcon className='h-5 w-5 text-gray-500' />
                      ) : (
                        <EyeIcon className='h-5 w-5 text-gray-500' />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            className='h-12 w-full bg-primary text-base font-semibold hover:bg-primary-foreground hover:text-foreground'
            disabled={isPending}
          >
            {t('agree_and_continue')}
          </Button>
        </form>
      </Form>
    </>
  );
};
