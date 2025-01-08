import { FooterMenu, FooterCopyright, NatGeoLogo } from '.';

export const Footer: React.FC = () => {
  return (
    <footer className='grid grid-cols-12 grid-rows-[1fr_10fr_1fr] bg-background text-foreground'>
      <NatGeoLogo />
      <FooterMenu />
      <FooterCopyright />
    </footer>
  );
};
