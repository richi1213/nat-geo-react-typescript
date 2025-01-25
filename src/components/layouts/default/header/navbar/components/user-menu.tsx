import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  AccountSettingsDialog,
} from '@/components';
import { useLogoutUser } from '@/hooks';
import { type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const UserMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const { mutate: logout } = useLogoutUser();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { t } = useTranslation('header');

  const handleLogout = () => {
    logout();
  };

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='rounded-none bg-transparent hover:bg-transparent'>
              {children}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-48 p-2'>
                <nav className='flex flex-col space-y-2 capitalize'>
                  <div className='cursor-pointer px-2 py-1.5 hover:text-primary'>
                    <Link to={`/${DEFAULT_LAYOUT_PATHS.MY_ARTICLES}`}>
                      {t('my_articles')}
                    </Link>
                  </div>

                  <div className='cursor-pointer px-2 py-1.5 hover:text-primary'>
                    <Link to={`/${DEFAULT_LAYOUT_PATHS.WRITE_ARTICLE}`}>
                      {t('write_article')}
                    </Link>
                  </div>

                  <div
                    onClick={openDialog}
                    className='cursor-pointer px-2 py-1.5 hover:text-primary'
                  >
                    {t('acc_settings')}
                  </div>

                  <div
                    onClick={handleLogout}
                    className='cursor-pointer px-2 py-1.5 hover:text-primary'
                  >
                    {t('log_out')}
                  </div>
                </nav>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <AccountSettingsDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
