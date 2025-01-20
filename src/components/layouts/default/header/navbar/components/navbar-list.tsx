import { useGetMe } from '@/hooks';
import { ChevronsDown, Search } from 'lucide-react';
import {
  LanguagePicker,
  LinkButton,
  MenuButton,
  UnderlinedButton,
  MenuSheet,
  AuthSheet,
  UserMenu,
} from '@/components';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const NavbarList: React.FC = () => {
  const { firstName } = useGetMe();
  const { t } = useTranslation('header');
  return (
    <ul className='flex h-full items-center gap-5'>
      <li>
        {firstName ? (
          <UserMenu>
            <div className='flex items-center gap-1 font-normal'>
              {firstName as string}
            </div>
          </UserMenu>
        ) : (
          <AuthSheet>
            <MenuButton>{t('login')}</MenuButton>
          </AuthSheet>
        )}
      </li>
      <li className='hidden md:block'>
        <MenuButton className='font-thin'>
          <Search />
        </MenuButton>
      </li>
      <li className='hidden md:block'>
        <UnderlinedButton to={DEFAULT_LAYOUT_PATHS.HOME} size='sm'>
          {t('newsletters')}
        </UnderlinedButton>
      </li>
      <li>
        <LinkButton to={DEFAULT_LAYOUT_PATHS.HOME}>{t('subscribe')}</LinkButton>
      </li>
      <li>
        <LanguagePicker />
      </li>
      <li>
        <MenuSheet>
          <MenuButton className='min-w-8 gap-1'>
            <span className='hidden md:block'>{t('menu')}</span>
            <ChevronsDown className='font-medium' />
          </MenuButton>
        </MenuSheet>
      </li>
    </ul>
  );
};
