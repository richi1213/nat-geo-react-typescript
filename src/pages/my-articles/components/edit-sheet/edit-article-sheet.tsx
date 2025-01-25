import { activeArticleDataAtom, isSheetOpenAtom } from '@/atoms';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  LinkButton,
} from '@/components';
import { EditTiptapEditor } from '@/pages/my-articles/components/edit-sheet/content';
import { EditArticleSchema, editArticleSchema } from '@/pages/my-articles/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useAtom, useAtomValue } from 'jotai';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

export const EditArticleSheet: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useAtom(isSheetOpenAtom);

  const singleArticle = useAtomValue(activeArticleDataAtom);

  const { title_en, title_ka, content } = singleArticle || {};

  const form = useForm<EditArticleSchema>({
    resolver: zodResolver(editArticleSchema),
    defaultValues: {
      title_en: '',
      title_ka: '',
      content: '',
    },
  });

  useEffect(() => {
    if (title_en && title_ka && content) {
      form.reset({
        title_en,
        title_ka,
        content,
      });
    }
  }, [title_en, title_ka, content, form]);

  const onSubmit = () => {};

  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(false)}>
      <SheetContent
        side='bottom'
        className='z-[500] h-screen w-full overflow-y-auto bg-foreground text-primary-foreground'
        showClose={false}
      >
        <SheetTitle>
          <VisuallyHidden.Root aria-hidden={isSheetOpen ? 'false' : 'true'}>
            Edit Article Sheet
          </VisuallyHidden.Root>
        </SheetTitle>

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

            <Controller
              name='content'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <EditTiptapEditor
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
              Edit an Article
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
