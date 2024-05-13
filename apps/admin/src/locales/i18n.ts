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

// 서버로부터 번역 파일 불러오기 및 병합
async function loadAndMergeTranslations() {
  // const serverTranslations = await fetch('https://your-server.com/path/to/translations.json')
  // .then(response => response.json());
  //
  // // 서버와 로컬 번역 데이터 병합
  // const mergedTranslations = {
  //   en: { translation: { ...enTranslation, ...serverTranslations.en } },
  //   ko: { translation: { ...koTranslation, ...serverTranslations.ko } }
  // };
  //
  // // 병합된 데이터로 i18n 리소스 업데이트
  // i18n.addResourceBundle('en', 'translation', mergedTranslations.en.translation, true, true);
  // i18n.addResourceBundle('ko', 'translation', mergedTranslations.ko.translation, true, true);
}

// 번역 데이터 로드 및 병합 실행
loadAndMergeTranslations();

export default i18n;
