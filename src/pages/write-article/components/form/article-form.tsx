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
import { getArticleFormSchema, TiptapEditor, type ArticleSchema } from '.';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  ArticleCategories,
  getCategoryIdByName,
  type ArticleCategory,
} from '@/supabase';
import { useState } from 'react';
import { useSubmitArticle } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const ArticleForm: React.FC = () => {
  const { t } = useTranslation('writeArticle');

  const form = useForm<ArticleSchema>({
    resolver: zodResolver(getArticleFormSchema(t)),
    defaultValues: {
      title_en: '',
      title_ka: '',
      category_id: '',
      cover_image: null,
      content: '',
    },
  });

  const [categoryId, setCategoryId] = useState<string>('');

  const handleCategorySelect = async (categoryName: ArticleCategory) => {
    try {
      const fetchedCategoryId = await getCategoryIdByName(categoryName);
      setCategoryId(fetchedCategoryId);
      form.setValue('category_id', categoryName as ArticleCategories);
    } catch (error) {
      console.error('Error fetching category ID:', error);
    }
  };

  const { mutateAsync: submitArticle, isPending } =
    useSubmitArticle(categoryId);

  const onSubmit = async (data: ArticleSchema) => {
    try {
      const formData = { ...data, category_id: categoryId };
      await submitArticle(formData);
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
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
              <FormLabel>{t('title_english')}</FormLabel>
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
              <FormLabel>{t('title_georgian')}</FormLabel>
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
              <FormLabel>{t('category')}</FormLabel>
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
              <FormLabel>{t('cover_image')}</FormLabel>
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
        />

        <Controller
          name='content'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('article_content')}</FormLabel>
              <FormControl>
                <TiptapEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LinkButton
          type='submit'
          className='mt-32 rounded-md'
          disabled={isPending}
        >
          {t('create_article')}
        </LinkButton>
      </form>
    </Form>
  );
};
