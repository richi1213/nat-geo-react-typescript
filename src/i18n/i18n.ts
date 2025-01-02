import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      //   navbar: navbarEn,
      //   footer: footerEn,
    },
    ka: {
      //   navbar: navbarKa,
      //   footer: footerKa,
    },
  },
  lng: 'en',
  fallbackLng: 'ka',
  defaultNS: 'navbar',
  ns: ['navbar', 'footer'],
});

export { i18n };
