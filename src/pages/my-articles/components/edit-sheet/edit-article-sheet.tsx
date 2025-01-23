import { activeArticleSlugAtom, isSheetOpenAtom } from '@/atoms';
import {
  Sheet,
  SheetContent,
  SheetClose,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  CategorySelector,
  LinkButton,
} from '@/components';
import { useSingleArticle, useUpdateArticle } from '@/hooks';
import {
  TiptapEditor,
  editArticleSchema,
  type EditArticleSchema,
} from '@/pages';
import {
  Article,
  ArticleCategories,
  getCategoryIdByName,
  type ArticleCategory,
} from '@/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogTitle } from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useAtom, useAtomValue } from 'jotai';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export const EditArticleSheet: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useAtom(isSheetOpenAtom);
  const articleSlug = useAtomValue(activeArticleSlugAtom);

  const { data } = useSingleArticle(articleSlug!);
  const { title_en, title_ka, category_id, cover_image, content } =
    (data as Article) || {};

  const form = useForm<EditArticleSchema>({
    resolver: zodResolver(editArticleSchema),
    defaultValues: {
      title_en: '',
      title_ka: '',
      category_id: '',
      cover_image: null,
      content: '',
    },
  });

  useEffect(() => {
    if (title_en && title_ka && category_id && content) {
      form.reset({
        title_en: (title_en ?? '') as string,
        title_ka: (title_ka ?? '') as string,
        category_id: (category_id ?? '') as string,
        content: (content ?? '') as string,
      });
    }
  }, [title_en, title_ka, category_id, content, form]);

  const {} = useUpdateArticle(articleSlug!);

  const [categoryId, setCategoryId] = useState<string>('');

  const onSubmit = (data: EditArticleSchema) => {};

  const handleCategorySelect = async (categoryName: ArticleCategory) => {
    try {
      const fetchedCategoryId = await getCategoryIdByName(categoryName);
      setCategoryId(fetchedCategoryId);
      form.setValue('category_id', categoryName as ArticleCategories);
    } catch (error) {
      console.error('Error fetching category ID:', error);
    }
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(false)}>
      <SheetContent
        side='bottom'
        className='z-[500] h-screen w-full overflow-y-auto bg-foreground text-primary-foreground'
        showClose={false}
        aria-hidden={isSheetOpen ? 'false' : 'true'}
      >
        <DialogTitle>
          <VisuallyHidden.Root>Edit Article Sheet</VisuallyHidden.Root>
        </DialogTitle>

        <div>
          <h2 className='mb-10 flex items-center font-natGeo2 text-base text-chart-4'>
            Edit an article
          </h2>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mb-20 w-full space-y-6 px-4'
          >
            <FormField
              control={form.control}
              name='title_en'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (English)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onBlur={() => form.trigger('title_en')}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='title_ka'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (Georgian)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onBlur={() => form.trigger('title_ka')}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='category_id'
              render={() => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <CategorySelector
                      onSelect={handleCategorySelect}
                      placeholder='Select a category'
                      label='Categories'
                      className='w-72 font-bold uppercase tracking-widest'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='cover_image'
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <div className='space-y-2'>
                      {/* Display current image preview if `value` is a URL */}
                      {typeof value === 'string' &&
                        value.startsWith('http') && (
                          <img
                            src={value}
                            alt='Current Cover'
                            className='h-32 w-32 rounded border object-cover'
                          />
                        )}

                      {/* File input for uploading a new image */}
                      <Input
                        className='w-72 px-0 tracking-widest'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file); // Update the form state with the new file
                        }}
                        {...rest}
                        onBlur={() => form.trigger('cover_image')}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name='cover_image'
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      className='w-72 px-0 tracking-widest'
                      type='file'
                      accept='image/*'
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                      {...rest}
                      onBlur={() => form.trigger('cover_image')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Controller
              name='content'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <TiptapEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LinkButton
              type='submit'
              className='mt-32 rounded-md'
              // disabled={isPending}
            >
              Create an Article
            </LinkButton>
          </form>
        </Form>

        <SheetClose className='absolute right-1 top-1 rounded-none bg-transparent p-1 transition-colors'>
          <X className='size-7' />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
