import { forwardRef, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  DeleteArticleDialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components';
import { Link } from 'react-router';
import { MoreHorizontal, ScanText } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ShowCardArticle } from '@/supabase';
import { useTranslation } from 'react-i18next';
import { getLocalizedString } from '@/utils';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';
import { EditArticleSheet } from '@/pages';
import { useSetAtom } from 'jotai';
import { activeArticleDataAtom, isSheetOpenAtom } from '@/atoms';
import { useSingleArticle } from '@/hooks';

export const ArticleHorizontalCard = forwardRef<
  HTMLAnchorElement,
  ShowCardArticle
>(
  (
    {
      id,
      category,
      title_en,
      title_ka,
      cover_image,
      className,
      style,
      slug,
      variant = 'default',
    },
    ref,
  ) => {
    const { i18n, t } = useTranslation('common');
    const currentLanguage = i18n.language;

    const title = getLocalizedString(
      { title_en, title_ka },
      'title',
      currentLanguage,
    );

    const categoryName = getLocalizedString(category, 'name', currentLanguage);

    const [isEditing, setIsEditing] = useState(false);
    const setIsSheetOpen = useSetAtom(isSheetOpenAtom);
    const setActiveArticle = useSetAtom(activeArticleDataAtom);

    const [articleToDelete, setArticleToDelete] = useState<string | null>(null);

    const { data: singleArticleData } = useSingleArticle(slug!, isEditing);

    useEffect(() => {
      if (isEditing) {
        if (singleArticleData) {
          setActiveArticle(singleArticleData);
          setIsSheetOpen(true);
        }
      }
    }, [isEditing, singleArticleData, setActiveArticle, setIsSheetOpen]);

    const handleOpenSheet = () => {
      setIsEditing(true);
    };

    const handleDeleteButtonClick = (id: string) => {
      setArticleToDelete(id);
    };

    const handleCloseDialog = () => {
      setArticleToDelete(null);
    };

    const CustomCardContent = (
      <div className='flex'>
        <div className='relative w-5/12 overflow-hidden'>
          <div className='relative aspect-[27/20]'>
            <img
              src={cover_image}
              alt={title || title_en}
              className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
        </div>

        <div className='flex w-7/12 flex-col justify-around -space-y-5 pl-5'>
          <div className='hidden text-sm font-semibold uppercase tracking-[0.18rem] text-gray-600 md:block'>
            {categoryName}
          </div>
          <h3 className='text-lg font-bold md:text-2xl'>{title}</h3>
          <div className='hidden items-center gap-1 p-0 sm:flex'>
            <ScanText className='text-primary-foreground' />
            <span className='text-sm font-semibold uppercase tracking-[0.16rem]'>
              {t('read')}
            </span>
          </div>
        </div>
      </div>
    );

    if (variant === 'withActions') {
      return (
        <div className={cn('group', className)} style={style}>
          <Card className='group overflow-hidden rounded-none'>
            <CardContent className='bg-foreground p-0 text-primary-foreground'>
              <Link
                ref={ref}
                to={`${DEFAULT_LAYOUT_PATHS.ARTICLE}/${slug}`}
                className={cn('group block', className)}
                style={style}
              >
                {CustomCardContent}
              </Link>
              <div className='absolute right-2 top-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='ghost'
                      className='h-8 w-8 rounded-none p-0 hover:bg-gray-50'
                    >
                      <span className='sr-only'>Open menu</span>
                      <MoreHorizontal className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={handleOpenSheet}>
                      {t('edit')}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleDeleteButtonClick(id)}
                    >
                      {t('delete')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          <EditArticleSheet />

          {articleToDelete && (
            <DeleteArticleDialog
              articleId={articleToDelete}
              onClose={handleCloseDialog}
            />
          )}
        </div>
      );
    }

    return (
      <Link
        ref={ref}
        to={`${DEFAULT_LAYOUT_PATHS.ARTICLE}/${slug}`}
        className={cn('group block', className)}
        style={style}
      >
        <Card className='group overflow-hidden rounded-none'>
          <CardContent className='bg-foreground p-0 text-primary-foreground'>
            {CustomCardContent}
          </CardContent>
        </Card>
      </Link>
    );
  },
);
