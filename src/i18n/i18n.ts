import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import headerEn from './en/layout/header.json';
import footerEn from './en/layout/footer.json';
import commonEn from './en/common.json';
import impactEn from './en/pages/impact.json';
import writeArticleEn from './en/pages/write-article.json';
import editProfileFormEn from './en/layout/edit-profile-form.json';
import NotificationsEn from './en/notifications.json';
import homeEn from './en/pages/home.json';

import headerKa from './ka/layout/header.json';
import footerKa from './ka/layout/footer.json';
import commonKa from './ka/common.json';
import impactKa from './ka/pages/impact.json';
import writeArticleKa from './ka/pages/write-article.json';
import editProfileFormKa from './ka/layout/edit-profile-form.json';
import NotificationsKa from './ka/notifications.json';
import homeKa from './ka/pages/home.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: headerEn,
      footer: footerEn,
      common: commonEn,
      home: homeEn,
      impact: impactEn,
      writeArticle: writeArticleEn,
      editProfileForm: editProfileFormEn,
      notifications: NotificationsEn,
    },
    ka: {
      header: headerKa,
      footer: footerKa,
      common: commonKa,
      home: homeKa,
      impact: impactKa,
      writeArticle: writeArticleKa,
      editProfileForm: editProfileFormKa,
      notifications: NotificationsKa,
    },
  },
  lng: 'en',
  fallbackLng: 'ka',
  defaultNS: 'header',
  ns: [
    'header',
    'footer',
    'common',
    'home',
    'impact',
    'writeArticle',
    'editProfileForm',
    'notifications',
  ],
});

export { i18n };
