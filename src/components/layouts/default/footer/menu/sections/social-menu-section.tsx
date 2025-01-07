import { Button } from '@/components';
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaReddit,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';

export const SocialMenuSection: React.FC = () => {
  return (
    <div className='space-y-3'>
      <h4 className='text-sm font-medium uppercase tracking-widest'>
        follow us
      </h4>
      <div className='grid grid-cols-2 justify-center gap-1 md:grid-cols-6 md:flex-row md:justify-start'>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaInstagram />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaFacebook />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaTwitter />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaYoutube />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaLinkedin />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaTiktok />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-transparent hover:text-primary'
        >
          <FaReddit />
        </Button>
      </div>
    </div>
  );
};
