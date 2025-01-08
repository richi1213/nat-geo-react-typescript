import { Button } from '@/components';
import { Link } from 'react-router';
import { socialLinks } from '../utils';

export const SocialMenuSection: React.FC = () => {
  return (
    <div className='space-y-3'>
      <h4 className='text-sm font-medium uppercase tracking-widest'>
        follow us
      </h4>
      <div className='grid grid-cols-2 justify-center gap-1 md:grid-cols-6 md:flex-row md:justify-start'>
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant='ghost'
            size='icon'
            className='hover:bg-transparent hover:text-primary'
          >
            <Link to={link.href} aria-label={link.label}>
              {link.icon}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
