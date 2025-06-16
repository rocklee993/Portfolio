import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Charge les traductions via http (depuis /public/locales)
  .use(HttpApi)
  // Détecte la langue de l'utilisateur
  .use(LanguageDetector)
  // Passe l'instance i18n à react-i18next.
  .use(initReactI18next)
  // Initialise i18next
  .init({
    // Langues supportées par votre application
    supportedLngs: ['en', 'fr'],
    // Langue par défaut si la détection échoue ou si la langue n'est pas supportée
    fallbackLng: 'en',
    // Namespace par défaut (vos fichiers s'appellent translation.json, donc "translation" est le namespace)
    // Si vous aviez plusieurs fichiers par langue, vous pourriez définir plusieurs namespaces
    defaultNS: 'translation', 
    ns: ['translation'], // Peut être un array si vous avez plusieurs namespaces

    // Options de détection de langue
    detection: {
      // Ordre et méthodes de détection de la langue
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      // Clés à rechercher pour la langue (ex: ?lng=fr dans l'URL)
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      // Cache la langue détectée dans ces emplacements
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // Langues à ne jamais mettre en cache
    },

    // Options pour le backend HTTP
    backend: {
      // Chemin vers vos fichiers de traduction. {{lng}} sera remplacé par 'en' ou 'fr',
      // et {{ns}} par 'translation'.
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Options pour react-i18next
    react: {
      useSuspense: true, // Recommandé pour charger les traductions de manière asynchrone
    },

    // Utile pour le débogage pendant le développement
    debug: process.env.NODE_ENV === 'development', // Active le debug uniquement en mode développement

    // Interpolation (si vous utilisez des variables comme {{year}})
    interpolation: {
      escapeValue: false, // React s'en charge déjà (prévention XSS)
    }
  });

export default i18n;