import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import headerEn from './en/layout/header.json';

import headerKa from './ka/layout/header.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: headerEn,
    },
    ka: {
      header: headerKa,
    },
  },
  lng: 'en',
  fallbackLng: 'ka',
  defaultNS: 'header',
  ns: ['header'],
});

export { i18n };
