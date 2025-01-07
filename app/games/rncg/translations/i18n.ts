import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en.json';
import fa from './fa.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: Localization.locale.startsWith('fa') ? 'fa' : 'en', 
    fallbackLng: 'fa',
    compatibilityJSON: 'v3',
  });

export default i18n;
