import { FooterMenuSection, legalLinks, ourSitesLinks, joinUsLinks } from '.';

export const FooterMenu: React.FC = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      <FooterMenuSection title='legal' links={legalLinks} />
      <FooterMenuSection title='our sites' links={ourSitesLinks} />
      <FooterMenuSection title='join us' links={joinUsLinks} />
    </div>
  );
};
