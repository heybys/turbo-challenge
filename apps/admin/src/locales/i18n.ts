import i18n from 'i18next';
import I18NextHttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  // .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init<HttpBackendOptions>({
    lng: 'ko',
    supportedLngs: ['en', 'ko'],
    debug: true,
    backend: {
      loadPath: 'http://localhost:8080/locales/{{lng}}/translation.json',
      crossDomain: true,
      withCredentials: true,
      // requestOptions: {mode: 'cors'}
    },
  });

export default i18n;
