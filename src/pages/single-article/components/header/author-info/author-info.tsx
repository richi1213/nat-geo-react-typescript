import { Button } from '@/components';
import { Link, Mail } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { FaFacebook } from 'react-icons/fa';

export const AuthorInfo: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row lg:col-start-2 lg:row-span-1 lg:row-start-3'>
      <div className='mx-auto flex w-full max-w-lg flex-col justify-between space-y-3 px-6 md:flex-row lg:flex-col lg:items-start'>
        {children}
        <div className='flex items-center gap-5'>
          <Button
            variant='ghost'
            className='size-7 rounded-full hover:bg-gray-100'
          >
            <FaFacebook style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            variant='ghost'
            className='size-7 rounded-full hover:bg-gray-100'
          >
            <Mail style={{ width: 20, height: 20 }} />
          </Button>
          <Button
            variant='ghost'
            className='size-7 rounded-full hover:bg-gray-100'
          >
            <Link style={{ width: 20, height: 20 }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
