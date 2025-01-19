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
import { Controller, useForm } from 'react-hook-form';
import { getPublicUrlFromSupabase, uploadImageToSupabase } from '@/supabase';

export const ArticleForm: React.FC = () => {
  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      titleEn: '',
      titleKa: '',
      imageFile: undefined,
      content: '',
    },
  });

  const onSubmit = async (data: ArticleSchema) => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.content, 'text/html');

      // Find all <img> elements in the content
      const images = Array.from(doc.querySelectorAll('img'));
      const uploadPromises = images.map(async (img) => {
        const src = img.getAttribute('src');
        if (src?.startsWith('blob:')) {
          // Get the File from the Tiptap editor upload handler (requires tracking)
          const file = await fetch(src).then((r) => r.blob());
          const filePath = await uploadImageToSupabase(
            new File([file], 'uploaded_image', { type: file.type }),
          );
          const publicUrl = getPublicUrlFromSupabase(filePath);
          img.setAttribute('src', publicUrl);
        }
      });

      // Wait for all uploads to complete
      await Promise.all(uploadPromises);

      // Update the content with the new URLs
      const updatedContent = doc.body.innerHTML;

      // Prepare the final submission data
      const finalData = { ...data, content: updatedContent };
      console.log('Final Data:', finalData);

      // Send the data to the server
      // await submitToServer(finalData); // Replace with your submission logic
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  // const handleChange = (field: string, value: string | File) => {};

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
                    // handleChange('titleEn', e.target.value);
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
                    // handleChange('titleKa', e.target.value);
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

        <Controller
          name='content'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <TiptapEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LinkButton type='submit' className='rounded-md'>
          Create Blog
        </LinkButton>
      </form>
    </Form>
  );
};
