import { Button } from '@/components';
import { socialLinks } from '../utils';
import { useTranslationWithNamespace } from '@/hooks';

export const SocialMenuSection: React.FC = () => {
  const { getTranslatedLabel } = useTranslationWithNamespace('footer');
  return (
    <div className='space-y-3'>
      <h4 className='text-sm font-medium uppercase tracking-widest'>
        {getTranslatedLabel('follow_us')}
      </h4>
      <div className='grid grid-cols-2 justify-center gap-1 md:grid-cols-6 md:flex-row md:justify-start'>
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant='ghost'
            size='icon'
            className='hover:bg-transparent hover:text-primary'
          >
            <a
              href={link.href}
              aria-label={link.label}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};
