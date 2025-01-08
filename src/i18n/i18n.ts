import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import headerEn from './en/layout/header.json';
import footerEn from './en/layout/footer.json';

import headerKa from './ka/layout/header.json';
import footerKa from './ka/layout/footer.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: headerEn,
      footer: footerEn,
    },
    ka: {
      header: headerKa,
      footer: footerKa,
    },
  },
  lng: 'en',
  fallbackLng: 'ka',
  defaultNS: 'header',
  ns: ['header', 'footer'],
});

export { i18n };
