import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const LANG_KEY = 'i18nextLng';

const getInitialLanguage = () => {
  // Always default to English on dev server start
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANG_KEY, 'en');
  }
  return 'en';
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

// Persist language selection
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LANG_KEY, lng);
});

export default i18n; 