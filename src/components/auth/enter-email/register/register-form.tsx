import {
  type RegistrationSchema,
  registrationSchema,
  FormField,
  FormItem,
  FormControl,
  Input,
  FormMessage,
  Button,
  Form,
  Loading,
  type RegisterFormProps,
} from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useRegisterUser } from '@/hooks';

export const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  onEditEmail,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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

  const { mutate: registerUser, isPending } = useRegisterUser();

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
      <div className='mb-8'>
        <img
          src='/disney-logo.svg'
          alt='MyDisney'
          width={120}
          height={40}
          className='mb-6'
        />
        <h1 className='mb-2 text-2xl font-semibold'>
          Create an account to continue
        </h1>
        <p className='text-muted-foreground'>
          With a MyDisney account, you can log in to National Geographic and
          other services across The Walt Disney Family of Companies.
          <br />
          Create your account using {email}
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
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='First Name'
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
                    placeholder='Last Name'
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
                    placeholder='Username'
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
                    placeholder='Facebook Profile Link'
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
                      placeholder='Choose a password'
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
            {isPending ? <Loading /> : 'Agree & Continue'}
          </Button>
        </form>
      </Form>

      <div className='mt-6 text-center'>
        <p className='text-sm'>
          Need help?{' '}
          <Link to='/' className='text-blue-600 hover:underline'>
            Visit our Support Center
          </Link>
          .
        </p>
      </div>
    </>
  );
};
