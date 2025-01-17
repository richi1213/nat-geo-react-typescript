import {
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Button,
  FormState,
  LoginForm,
  RegisterForm,
  useTranslatedSchemas,
  type EmailSchema,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { checkIfUserExists } from '@/supabase';
import { useState } from 'react';
import type { EnterEmailFormProps } from './types';
import { useTranslation } from 'react-i18next';

export const EnterEmailForm: React.FC<EnterEmailFormProps> = ({ sheetRef }) => {
  const [state, setState] = useState<FormState>(FormState.Idle);
  const [email, setEmail] = useState<string>('');

  const { emailSchema } = useTranslatedSchemas();
  const { t } = useTranslation('header');

  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: EmailSchema) => {
    setEmail(values.email);
    try {
      const userExists = await checkIfUserExists(values.email);

      if (userExists) {
        setState(FormState.UserExists);
      } else {
        setState(FormState.UserDoesNotExist);
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      setState(FormState.Error);
    }
  };

  const handleEditEmail = () => {
    setState(FormState.Idle);
  };

  const renderContent = () => {
    switch (state) {
      case FormState.Idle:
        return (
          <div className='space-y-6 text-secondary'>
            <h2 className='mb-2 text-3xl font-semibold'>
              {t('enter_your_email_to_continue')}
            </h2>
            <p className=''>{t('log_in_to_national_geographic')}</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6 py-2'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type='email'
                          placeholder={t('email')}
                          className='h-12 bg-gray-100'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='h-12 w-full bg-primary hover:bg-primary-foreground hover:text-foreground'
                >
                  {t('continue')}
                </Button>
              </form>
            </Form>
          </div>
        );

      case FormState.UserExists:
        return (
          <LoginForm
            email={email}
            onEditEmail={handleEditEmail}
            sheetRef={sheetRef}
          />
        );

      case FormState.UserDoesNotExist:
        return (
          <RegisterForm
            email={email}
            onEditEmail={handleEditEmail}
            sheetRef={sheetRef}
          />
        );

      case FormState.Error:
        return (
          <div>
            <h2 className='text-xl font-semibold'>
              {t('something_went_wrong')}
            </h2>
            <p className='mt-2'>{t('error_checking_email')}</p>
            <Button
              onClick={() => setState(FormState.Idle)}
              className='mt-4 bg-red-600 text-white'
            >
              {t('try_again')}
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className='mx-auto max-w-[440px] p-6'>{renderContent()}</div>;
};
