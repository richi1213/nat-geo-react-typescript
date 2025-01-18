import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  LinkButton,
} from '@/components';
import { articleSchema, TiptapEditor, type ArticleSchema } from '.';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const ArticleForm: React.FC = () => {
  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      titleEn: '',
      titleKa: '',
      imageFile: undefined,
    },
  });

  const onSubmit = (data: ArticleSchema) => {
    console.log('Form Data:', data);
  };

  const handleChange = (field: string, value: string | File) => {
    console.log(`Field: ${field}, Value: ${value}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mb-20 w-full space-y-4 sm:w-4/5'
      >
        <FormField
          control={form.control}
          name='titleEn'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title (English)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onBlur={() => form.trigger('titleEn')}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange('titleEn', e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='titleKa'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title (Georgian)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onBlur={() => form.trigger('titleKa')}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange('titleKa', e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='imageFile'
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  {...rest}
                  onBlur={() => form.trigger('imageFile')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LinkButton type='submit' className='rounded-md'>
          Create Blog
        </LinkButton>
      </form>
      <TiptapEditor />
    </Form>
  );
};
