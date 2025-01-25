import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import headerEn from './en/layout/header.json';
import footerEn from './en/layout/footer.json';
import commonEn from './en/common.json';
import impactEn from './en/pages/impact.json';
import writeArticleEn from './en/pages/write-article.json';
import editProfileFormEn from './en/layout/edit-profile-form.json';

import headerKa from './ka/layout/header.json';
import footerKa from './ka/layout/footer.json';
import commonKa from './ka/common.json';
import impactKa from './ka/pages/impact.json';
import writeArticleKa from './ka/pages/write-article.json';
import editProfileFormKa from './ka/layout/edit-profile-form.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: headerEn,
      footer: footerEn,
      common: commonEn,
      impact: impactEn,
      writeArticle: writeArticleEn,
      editProfileForm: editProfileFormEn,
    },
    ka: {
      header: headerKa,
      footer: footerKa,
      common: commonKa,
      impact: impactKa,
      writeArticle: writeArticleKa,
      editProfileForm: editProfileFormKa,
    },
  },
  lng: 'en',
  fallbackLng: 'ka',
  defaultNS: 'header',
  ns: [
    'header',
    'footer',
    'common',
    'impact',
    'writeArticle',
    'editProfileForm',
  ],
});

export { i18n };
