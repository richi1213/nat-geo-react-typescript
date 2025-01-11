import { Link } from 'react-router';
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
            <Link to={link.href} className='text-xs hover:underline'>
              {getTranslatedLabel(link.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
