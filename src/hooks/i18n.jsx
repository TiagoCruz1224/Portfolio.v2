import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homeEN from '../../public/locales/en/home.json';
import homePT from '../../public/locales/pt/home.json';
import aboutEN from '../../public/locales/en/about.json';
import aboutPT from '../../public/locales/pt/about.json';
import projectsEN from '../../public/locales/en/projects.json';
import projectsPT from '../../public/locales/pt/projects.json';
import contactEN from '../../public/locales/en/contact.json';
import contactPT from '../../public/locales/pt/contact.json';
import headerEN from '../../public/locales/en/header.json';
import headerPT from '../../public/locales/pt/header.json';

const resources = {
  en: {
    home: homeEN,
    about: aboutEN,
    projects: projectsEN,
    contact: contactEN,
    header: headerEN,
  },
  pt: {
    home: homePT,
    about: aboutPT,
    projects: projectsPT,
    contact: contactPT,
    header: headerPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
