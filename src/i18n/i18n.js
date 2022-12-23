import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'path'],
        cache: ['cookie']
    }
})

// i18n
//     .use(initReactI18next) 
//     .init({
//         resources: {
//             en: {
//                 translation: {
//                     "Welcome to React": "Welcome to React and react-i18next"
//                 }
//             }
//         },
//         lng: "en", 
//         fallbackLng: "en",

//         interpolation: {
//             escapeValue: false 
//         }
//     });

export default i18n;