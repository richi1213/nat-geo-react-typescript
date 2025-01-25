import type { FooterMenuSectionProps } from './types';
import { useTranslationWithNamespace } from '@/hooks';

export const FooterMenuSection: React.FC<FooterMenuSectionProps> = ({
  title,
  links,
}) => {
  const { getTranslatedLabel } = useTranslationWithNamespace('footer');

  return (
    <div className='space-y-3'>
      <h4 className='text-sm font-medium uppercase tracking-widest'>{title}</h4>
      <ul className='flex flex-col capitalize'>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs hover:underline'
            >
              {getTranslatedLabel(link.label)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
