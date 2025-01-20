import { Button } from '@/components';
import { Link, Mail } from 'lucide-react';
import type { AuthorInfoProps } from './types';
import { handleCopyLink } from '@/utils';

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ children, email }) => {
  return (
    <div className='flex flex-col md:flex-row lg:col-start-2 lg:row-span-1 lg:row-start-3'>
      <div className='mx-auto flex w-full max-w-lg flex-col justify-between space-y-3 px-6 md:flex-row lg:flex-col lg:items-start xl:px-0'>
        {children}
        <div className='flex items-center gap-5'>
          <Button
            variant='ghost'
            className='size-7 rounded-full hover:bg-gray-100'
          >
            <a
              href={`mailto:${email}`}
              className='flex size-7 items-center justify-center rounded-full hover:bg-gray-100'
            >
              <Mail style={{ width: 20, height: 20 }} />
            </a>
          </Button>
          <Button
            onClick={handleCopyLink}
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
