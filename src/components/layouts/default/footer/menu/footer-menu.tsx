import { Separator } from '@/components';
import {
  FooterMenuSection,
  SocialMenuSection,
  legalLinks,
  ourSitesLinks,
  joinUsLinks,
} from '.';
import { useTranslationWithNamespace } from '@/hooks';

export const FooterMenu: React.FC = () => {
  const { getTranslatedLabel } = useTranslationWithNamespace('footer');
  return (
    <div className='col-span-full row-start-2 row-end-11 md:col-span-full md:row-start-1 md:row-end-11'>
      <div className='grid grid-cols-2 gap-y-8 p-6 md:grid-cols-4'>
        <FooterMenuSection
          title={getTranslatedLabel('legal')}
          links={legalLinks}
        />
        <FooterMenuSection
          title={getTranslatedLabel('our_sites')}
          links={ourSitesLinks}
        />
        <FooterMenuSection
          title={getTranslatedLabel('join_us')}
          links={joinUsLinks}
        />
        <SocialMenuSection />
      </div>
      <Separator />
    </div>
  );
};
