import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import koTranslation from './ko/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ko: {
      translation: koTranslation,
    },
  },
  lng: 'ko',
  fallbackLng: 'en',
});

export default i18n;
