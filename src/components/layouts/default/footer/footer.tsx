import { FooterMenu, FooterCopyright } from '.';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-background text-foreground'>
      <FooterMenu />
      <FooterCopyright />
    </footer>
  );
};
