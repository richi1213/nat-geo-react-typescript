import {
  FooterMenuSection,
  SocialMenuSection,
  legalLinks,
  ourSitesLinks,
  joinUsLinks,
} from '.';

export const FooterMenu: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-y-8 p-6 md:grid-cols-4'>
      <FooterMenuSection title='legal' links={legalLinks} />
      <FooterMenuSection title='our sites' links={ourSitesLinks} />
      <FooterMenuSection title='join us' links={joinUsLinks} />
      <SocialMenuSection />
    </div>
  );
};
