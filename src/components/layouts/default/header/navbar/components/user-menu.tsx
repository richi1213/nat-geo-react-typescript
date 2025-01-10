import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components';
import { useLogoutUser } from '@/hooks';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router';

export const UserMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const { mutate: logout } = useLogoutUser();
  const handleLogout = () => {
    logout();
    console.log('hi');
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='rounded-none bg-transparent hover:bg-transparent'>
            {children}
          </NavigationMenuTrigger>
          <NavigationMenuContent className=''>
            <div className='w-48 p-2'>
              <nav className='flex flex-col space-y-2 capitalize'>
                <Link
                  to='/'
                  className='cursor-pointer px-2 py-1.5 hover:text-primary'
                >
                  account settings
                </Link>
                <div
                  onClick={handleLogout}
                  className='cursor-pointer px-2 py-1.5 hover:text-primary'
                >
                  log out
                </div>
              </nav>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
