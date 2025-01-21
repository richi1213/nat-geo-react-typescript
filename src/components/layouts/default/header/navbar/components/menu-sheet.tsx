import {
  Sheet,
  SheetTrigger,
  SheetContent,
  Separator,
  SheetClose,
} from '@/components';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DialogTitle } from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { ChevronsUp } from 'lucide-react';
import { ArticleCategories } from '@/supabase';

export const MenuSheet: React.FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation('header');

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='top'
        className='z-[100] h-[100vh] w-full overflow-y-auto bg-background text-foreground'
        showClose={false}
      >
        <DialogTitle>
          <VisuallyHidden.Root>Navigation menu</VisuallyHidden.Root>
        </DialogTitle>

        <div className='mt-4 flex flex-col gap-16 p-8 font-natGeo text-lg font-bold uppercase leading-loose tracking-widest md:flex-row md:justify-between md:gap-8 xl:gap-0'>
          <div>
            <h2 className='mb-10 flex items-center font-natGeo2 text-base text-chart-4'>
              {t('topics')}
              <Separator className='ml-2 h-[0.16rem] w-9 bg-chart-3/70' />
            </h2>
            <ul className='space-y-16 text-5xl'>
              <li>
                <SheetClose asChild>
                  <Link to={ArticleCategories.ANIMALS}>{t('animals')}</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={ArticleCategories.ENVIRONMENT}>
                    {t('environment')}
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={ArticleCategories.HISTORY}>
                    {t('history_and_culture')}
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={ArticleCategories.SCIENCE}>{t('science')}</Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link to={ArticleCategories.TRAVEL}>{t('travel')}</Link>
                </SheetClose>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='mb-10 flex items-center font-natGeo2 text-base text-chart-4'>
              {t('sites')}
              <Separator className='ml-2 h-[0.16rem] w-9 bg-chart-3/70' />
            </h2>
            <ul className='space-y-10 text-xl text-primary'>
              <li>
                <Link to='https://www.nationalgeographic.com/tv/'>
                  {t('watch_tv')}
                </Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.com/magazine'>
                  {t('read_the_magazine')}
                </Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.com/family'>
                  {t('visit_nat_geo_family')}
                </Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.com/expeditions/'>
                  {t('book_a_trip')}
                </Link>
              </li>
              <li>
                <Link to='https://kids.nationalgeographic.com'>
                  {t('inspire_your_kids')}
                </Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.com/podcasts/overheard'>
                  {t('listen_to_podcasts')}
                </Link>
              </li>
              <li>
                <Link to='https://www.shopdisney.com/franchises/national-geographic/'>
                  {t('shop_nat_geo')}
                </Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.com/events/'>
                  {t('attend_a_live_event')}
                </Link>
              </li>
              <li>
                <Link to='/impact/'>{t('learn_about_our_impact')}</Link>
              </li>
              <li>
                <Link to='https://www.nationalgeographic.org/society/become-a-member/'>
                  {t('support_our_mission')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <SheetClose className='absolute right-1 top-1 rounded-sm bg-transparent p-1 text-chart-2 transition-colors hover:bg-chart-4 hover:text-foreground'>
          <ChevronsUp className='size-7' />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
