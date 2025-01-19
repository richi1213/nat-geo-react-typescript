import {
  CategorySelector,
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
import {
  ArticleCategories,
  getCategoryIdByName,
  type ArticleCategory,
} from '@/supabase';
import { useState } from 'react';
import { QUERY_KEYS, useCategorySlug, useSubmitArticle } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const ArticleForm: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title_en: '',
      title_ka: '',
      category_id: '',
      cover_image: undefined,
      content: '',
    },
  });

  const [categoryId, setCategoryId] = useState<string>('');

  const { data: categorySlug } = useCategorySlug(categoryId);

  const handleCategorySelect = async (categoryName: ArticleCategory) => {
    try {
      const fetchedCategoryId = await getCategoryIdByName(categoryName);
      setCategoryId(fetchedCategoryId);
      form.setValue('category_id', categoryName as ArticleCategories);
    } catch (error) {
      console.error('Error fetching category ID:', error);
    }
  };

  const { mutateAsync: submitArticle, isPending } = useSubmitArticle();

  const onSubmit = async (data: ArticleSchema) => {
    try {
      const formData = { ...data, category_id: categoryId };
      await submitArticle(formData);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ARTICLES, categorySlug],
      });
      navigate(`/${categorySlug}`);
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mb-20 w-full space-y-4 sm:w-4/5'
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
                  className='w-[180px]'
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
                  onBlur={() => form.trigger('cover_image')}
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

        <LinkButton type='submit' className='rounded-md' disabled={isPending}>
          Create Blog
        </LinkButton>
      </form>
    </Form>
  );
};
