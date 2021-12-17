import flagPT from '@Assets/images/flags/pt.svg';
import flagEN from '@Assets/images/flags/us.svg';

export const languages = [
  { id: 'en-US', title: 'en-US', name: 'English', flag: flagEN },
  { id: 'pt-PT', title: 'pt-PT', name: 'Português', flag: flagPT }
];

const getLanguageByID = langId => {
  return languages.find(({ id }) => langId == id);
};

const userLanguageName = localStorage.getItem('i18nextLng');

export const defaultLanguage = getLanguageByID(userLanguageName) || languages[0];
