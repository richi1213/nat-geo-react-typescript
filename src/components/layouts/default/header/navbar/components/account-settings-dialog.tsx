import { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  personalInfoSchema,
  type AccountSettingsDialogProps,
  type PersonalInfoSchema,
} from '@/components';
import { useGetMe, useUpdateUserMetadata } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useForm } from 'react-hook-form';

export const AccountSettingsDialog: React.FC<AccountSettingsDialogProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const { firstName, lastName, username } = useGetMe();
  const { mutate: updatePersonalInfo } = useUpdateUserMetadata();

  const form = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
    },
  });

  useEffect(() => {
    if (firstName && lastName && username) {
      form.reset({
        firstName: (firstName ?? '') as string,
        lastName: (lastName ?? '') as string,
        username: (username ?? '') as string,
      });
    }
  }, [firstName, lastName, username, form]);

  const onSubmit = (data: PersonalInfoSchema) => {
    console.log('Submitting data:', data);
    updatePersonalInfo(data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='z-[100] sm:max-w-[425px]'>
        <DialogTitle>
          <VisuallyHidden.Root>Account settings</VisuallyHidden.Root>
        </DialogTitle>
        <DialogHeader>
          <DialogTitle className='text-foreground'>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className='h-12 bg-gray-100 pr-10' />
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
                    <Input {...field} className='h-12 bg-gray-100 pr-10' />
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
                    <Input {...field} className='h-12 bg-gray-100 pr-10' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              className='h-12 w-full bg-primary text-primary-foreground hover:bg-primary'
            >
              Done
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
