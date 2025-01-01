import { ChevronsDown, Search } from 'lucide-react';
import { Link } from 'react-router';

export const Navbar: React.FC = () => {
  return (
    <nav className='sticky z-[100] h-[49px] w-full items-center border-b border-gray-100 bg-white px-4 py-0 text-sm backdrop-blur-lg transition-all'>
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

          <ul className='flex h-full items-center gap-5 tracking-widest'>
            <li className='mr-4 flex h-12 items-center'>
              <div className=''>
                <button className='whitespace-nowrap px-2 py-0 font-bold uppercase tracking-[3px] hover:text-gray-700'>
                  Login
                </button>
              </div>
            </li>
            <li className='mr-4 hidden h-12 items-center md:flex'>
              <div>
                <Search
                  size={20}
                  strokeWidth={1.3}
                  className='cursor-pointer font-thin hover:text-gray-700'
                />
              </div>
            </li>
            <li className='mr-4 hidden h-12 items-center md:flex'>
              <div className=''>
                <Link
                  to='/'
                  className='border-b-2 border-yellow-400 bg-gradient-to-t from-yellow-400 to-yellow-400 bg-[length:100%_0] bg-bottom bg-no-repeat text-sm font-semibold tracking-wide transition-[background-size] duration-150 ease-in hover:bg-[length:100%_100%]'
                >
                  Newsletters
                </Link>
              </div>
            </li>
            <li className='group mr-4 flex h-12 items-center bg-black bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_100%] bg-left bg-no-repeat text-xs transition-[background-size] duration-200 ease-in hover:bg-[length:100%_100%]'>
              <div className='px-4'>
                <Link to='/' className=''>
                  <span className='font-bold uppercase tracking-[3px] text-white group-hover:text-black'>
                    Subscribe
                  </span>
                </Link>
              </div>
            </li>

            <li className='flex h-12 items-center'>
              <div className=''>
                <button className='flex items-center gap-1 hover:text-gray-700'>
                  <span className='hidden font-bold uppercase md:block'>
                    Menu
                  </span>
                  <ChevronsDown size={18} />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
