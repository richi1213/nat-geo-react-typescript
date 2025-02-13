import { Logos, NavbarList } from '@/components';

export const Navbar: React.FC = () => {
  return (
    <nav className='sticky z-[100] h-[49px] w-full border-b border-gray-50 bg-foreground py-0 pl-1 pr-0 text-sm backdrop-blur-lg transition-all md:pl-2'>
      <div className='flex h-full justify-between p-2'>
        <Logos />
        <NavbarList />
      </div>
    </nav>
  );
};
