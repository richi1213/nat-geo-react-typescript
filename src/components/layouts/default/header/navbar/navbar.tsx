import {
  LanguagePicker,
  LinkButton,
  MenuButton,
  UnderlinedButton,
} from '@/components';
import { ChevronsDown, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { t } = useTranslation('header');

  return (
    <nav className='sticky z-[100] h-[49px] w-full items-center border-b border-gray-100 bg-foreground px-2 py-0 text-sm backdrop-blur-lg transition-all md:px-4'>
      <div className='h-full w-full max-w-screen-xl'>
        <div className='flex h-full items-center justify-between p-2'>
          <picture className='hidden cursor-pointer md:block'>
            <source srcSet='/images/natgeo-logo.svg' type='image/svg+xml' />
            <img
              src='/images/natgeo-logo.webp'
              alt='National Full Geographic Logo'
              width={109}
              height={32}
            />
          </picture>

          <picture className='cursor-pointer md:hidden'>
            <source srcSet='/images/ng-border.svg' type='image/svg+xml' />
            <img
              src='/images/ng-border.avif'
              alt='National Geographic Logo'
              width={22}
              height={32}
            />
          </picture>

          <ul className='flex h-full items-center gap-5'>
            <li>
              <MenuButton>{t('login')}</MenuButton>
            </li>
            <li className='hidden md:block'>
              <MenuButton className='font-thin'>
                <Search />
              </MenuButton>
            </li>
            <li className='hidden md:block'>
              <UnderlinedButton to='/' size='sm'>
                {t('newsletters')}
              </UnderlinedButton>
            </li>
            <li>
              <LinkButton to='/'>{t('subscribe')}</LinkButton>
            </li>
            <li>
              <LanguagePicker />
            </li>
            <li>
              <MenuButton className='min-w-8 gap-1'>
                <span className='hidden md:block'>{t('menu')}</span>
                <ChevronsDown className='font-medium' />
              </MenuButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
