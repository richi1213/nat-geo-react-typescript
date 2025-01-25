import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const StatementTitle: React.FC = () => {
  const { t } = useTranslation('impact');
  return (
    <div className='flex items-center gap-5'>
      <HeadingLine orientation='vertical' className='h-5' />
      <a
        href='https://www.nationalgeographic.org/society/'
        target='_blank'
        rel='noopener noreferrer'
        className='font-semibold uppercase tracking-widest hover:underline'
      >
        {t('impact_driven_nonprofit')}
      </a>
      <HeadingLine orientation='vertical' className='h-5' />
    </div>
  );
};
