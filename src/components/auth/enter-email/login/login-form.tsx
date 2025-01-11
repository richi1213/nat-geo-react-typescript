import {
  Form,
  FormField,
  FormItem,
  FormControl,
  Input,
  FormMessage,
  Button,
  type LoginFormProps,
  type LoginSchema,
  useTranslatedSchemas,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginUser } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const LoginForm: React.FC<LoginFormProps> = ({
  email,
  onEditEmail,
  sheetRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { loginSchema } = useTranslatedSchemas();
  const { t } = useTranslation('header');

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email,
      password: '',
    },
  });

  const { mutate: loginUser, isPending, isSuccess } = useLoginUser();

  if (isSuccess) sheetRef.current?.click();

  const onSubmit = async (values: LoginSchema) => {
    loginUser(values);
  };
  return (
    <>
      <div className='mb-8 text-secondary'>
        <h2 className='mb-2 text-2xl font-semibold'>
          {t('good_news_my_disney_account')}
        </h2>
        <p>
          {t('log_in_with_my_disney')} <br />
          <span className='font-semibold'>{email}</span>{' '}
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
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('password')}
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
            className='h-12 w-full bg-primary text-primary-foreground hover:bg-primary'
            disabled={isPending}
          >
            {t('login')}
          </Button>
        </form>
      </Form>
    </>
  );
};
