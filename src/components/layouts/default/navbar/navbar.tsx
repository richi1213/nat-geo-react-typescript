import { LinkButton, MenuButton, UnderlinedButton } from '@/components';
import { ChevronsDown, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className='sticky z-[100] h-[49px] w-full items-center border-b border-gray-100 bg-foreground px-4 py-0 text-sm backdrop-blur-lg transition-all'>
      <div className='h-full w-full max-w-screen-xl'>
        <div className='flex h-full items-center justify-between p-2'>
          <img
            src='https://i.natgeofe.com/n/e76f5368-6797-4794-b7f6-8d757c79ea5c/ng-logo-2fl.png'
            alt='National Geographic Logo'
            width={109}
            height={32}
            className='hidden cursor-pointer md:block'
          />
          <img
            src='https://i.natgeofe.com/n/1852daf6-1c8d-4428-8ee2-d9a82bd0401c/ng-border.png'
            width={22}
            height={32}
            alt='National Geographic Logo'
            className='cursor-pointer md:hidden'
          />

          <ul className='flex h-full items-center gap-5'>
            <li>
              <MenuButton>login</MenuButton>
            </li>
            <li>
              <Search
                size={20}
                strokeWidth={1.3}
                className='cursor-pointer font-thin hover:text-gray-700'
              />
            </li>
            <li>
              <UnderlinedButton to='/' size='sm'>
                Newsletters
              </UnderlinedButton>
            </li>
            <li>
              <LinkButton to='/'>subscribe</LinkButton>
            </li>
            <li>
              <MenuButton className='font-custom'>
                menu <ChevronsDown size={18} />
              </MenuButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
