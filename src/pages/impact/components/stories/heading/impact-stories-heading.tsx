import { useTranslation } from 'react-i18next';

export const ImpactStoriesHeading: React.FC = () => {
  const { t } = useTranslation('impact');
  return (
    <h2 className='text-center text-5xl font-bold uppercase'>
      {t('stories_of_impact')}
    </h2>
  );
};
