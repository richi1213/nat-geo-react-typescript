import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const IssueHeading: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className='flex items-center gap-4'>
      <HeadingLine orientation='vertical' />
      <h2 className='text-3xl uppercase'>{t('in_this_issue')}</h2>
    </div>
  );
};
