import { HeadingLine } from '@/components';
import { Link } from 'react-router';

export const StatementTitle: React.FC = () => {
  return (
    <div className='flex items-center gap-5'>
      <HeadingLine orientation='vertical' className='h-5' />
      <Link to='https://www.nationalgeographic.org/society/'>
        <span className='font-semibold uppercase tracking-widest hover:underline'>
          an impact-drivern nonprofit
        </span>
      </Link>
      <HeadingLine orientation='vertical' className='h-5' />
    </div>
  );
};
