import {
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Button,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { type EmailSchema, emailSchema, FormState } from '@/components/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { checkIfUserExists } from '@/supabase';
import { useState } from 'react';

export const EnterEmailForm: React.FC = () => {
  const [state, setState] = useState<FormState>(FormState.Idle);

  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: EmailSchema) => {
    setState(FormState.Loading);
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

  const renderContent = () => {
    switch (state) {
      case FormState.Idle:
        return (
          <>
            <p className='text-muted-foreground'>
              Log in to National Geographic with your MyDisney account. If you
              don&apos;t have one, you will be prompted to create one.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
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
                          placeholder='Email'
                          className='h-12 bg-gray-100'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='h-12 w-full bg-[#FFD230] text-black hover:bg-[#FFD230]/90'
                >
                  Continue
                </Button>
              </form>
            </Form>
          </>
        );

      case FormState.UserExists:
        return (
          <div>
            <h2 className='text-xl font-semibold'>Welcome Back!</h2>
            <p className='mt-2'>
              It seems like you already have an account. Please log in to
              continue.
            </p>
            <Link
              to='/login'
              className='mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white'
            >
              Go to Login
            </Link>
          </div>
        );

      case FormState.UserDoesNotExist:
        return (
          <div>
            <h2 className='text-xl font-semibold'>Create Your Account</h2>
            <p className='mt-2'>
              We couldn&apos;t find an account with this email. Let&apos;s get
              you signed up!
            </p>
            <Link
              to='/signup'
              className='mt-4 inline-block rounded bg-green-600 px-4 py-2 text-white'
            >
              Create Account
            </Link>
          </div>
        );

      case FormState.Error:
        return (
          <div>
            <h2 className='text-xl font-semibold'>Something Went Wrong</h2>
            <p className='mt-2'>
              We encountered an error while checking your email. Please try
              again later.
            </p>
            <Button
              onClick={() => setState(FormState.Idle)}
              className='mt-4 bg-red-600 text-white'
            >
              Try Again
            </Button>
          </div>
        );

      case FormState.Loading:
        return <p>Checking your email...</p>;

      default:
        return null;
    }
  };

  return (
    <div className='mx-auto max-w-[440px] p-6'>
      <div className='mb-8'>
        <h2 className='mb-2 text-2xl font-semibold'>
          Enter your email to continue
        </h2>
      </div>
      {renderContent()}
    </div>
  );
};
