import {
  Form,
  FormField,
  FormItem,
  FormControl,
  Input,
  FormMessage,
  Button,
  Loading,
  loginSchema,
  type LoginFormProps,
  type LoginSchema,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useLoginUser } from '@/hooks';

export const LoginForm: React.FC<LoginFormProps> = ({ email, onEditEmail }) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email,
      password: '',
    },
  });

  const { mutate: loginUser, isPending } = useLoginUser();

  const onSubmit = async (values: LoginSchema) => {
    loginUser(values);
  };
  return (
    <>
      <div className='mb-8'>
        <img
          src='/disney-logo.svg'
          alt='MyDisney'
          width={120}
          height={40}
          className='mb-6'
        />
        <h1 className='mb-2 text-2xl font-semibold'>
          Good news, you already have a MyDisney account
        </h1>
        <p className='text-muted-foreground'>
          Since you&apos;ve already used your email to sign up for one or more
          services across The Walt Disney Family of Companies, you can now log
          in to National Geographic with MyDisney using:
          <br />
          {email}{' '}
          <button
            onClick={onEditEmail}
            className='text-blue-600 hover:underline'
          >
            edit
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
                      placeholder='Password'
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
            className='h-12 w-full bg-[#FFD230] text-black hover:bg-[#FFD230]/90'
            disabled={isPending}
          >
            {isPending ? <Loading /> : 'Log In'}
          </Button>
        </form>
      </Form>

      <div className='mt-6 space-y-4 text-center'>
        <p className='text-sm'>
          <Link to='/' className='text-blue-600 hover:underline'>
            Having trouble logging in? Send a one-time code
          </Link>
        </p>
        <p className='text-sm'>
          <Link to='/' className='text-blue-600 hover:underline'>
            Learn more about MyDisney
          </Link>
        </p>
      </div>
    </>
  );
};
