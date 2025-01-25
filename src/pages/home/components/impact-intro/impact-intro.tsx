import { LinkButton } from '@/components';
import { ImpactIntroGeneralHeading, ImpactPromo } from '.';
import { ArticleCategories } from '@/supabase';
import { useTranslation } from 'react-i18next';

export const ImpactIntro: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section className='flex justify-center px-8 py-14 text-foreground'>
      <div className='w-full max-w-5xl'>
        <ImpactIntroGeneralHeading />
        <ImpactPromo />
        {/* <ImpactCarousel /> */}
        <div className='mt-16 text-center'>
          <LinkButton variant='alternate' to={ArticleCategories.IMPACT}>
            {t('discover_more')}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
