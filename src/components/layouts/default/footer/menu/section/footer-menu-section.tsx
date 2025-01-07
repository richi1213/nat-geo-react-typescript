import { Link } from 'react-router';
import type { FooterMenuSectionProps } from './types';

export const FooterMenuSection: React.FC<FooterMenuSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h4 className='font-bold uppercase tracking-widest'>{title}</h4>
      <ul className='flex flex-col capitalize'>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
