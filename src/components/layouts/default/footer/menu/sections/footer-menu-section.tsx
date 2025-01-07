import { Link } from 'react-router';
import type { FooterMenuSectionProps } from './types';

export const FooterMenuSection: React.FC<FooterMenuSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div className='space-y-3'>
      <h4 className='text-sm font-medium uppercase tracking-widest'>{title}</h4>
      <ul className='flex flex-col capitalize'>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className='text-xs hover:underline'>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
