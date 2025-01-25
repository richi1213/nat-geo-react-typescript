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
  getPersonalInfoSchema,
  Input,
  type AccountSettingsDialogProps,
  type PersonalInfoSchema,
} from '@/components';
import { useGetMe, useUpdateUserMetadata } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const AccountSettingsDialog: React.FC<AccountSettingsDialogProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation('editProfileForm');

  const { id, firstName, lastName, username } = useGetMe();
  const { mutate: updatePersonalInfo } = useUpdateUserMetadata();

  const form = useForm<PersonalInfoSchema>({
    resolver: zodResolver(getPersonalInfoSchema(t)),
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
    if (!id) {
      console.error('User ID is undefined.');
      return;
    }

    const payload = {
      id,
      username: data.username,
      first_name: data.firstName,
      last_name: data.lastName,
    };

    updatePersonalInfo(payload);
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
          <DialogTitle className='text-foreground'>
            {t('edit_profile')}
          </DialogTitle>
          <DialogDescription>{t('edit_profile_description')}</DialogDescription>
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
              {t('done')}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
