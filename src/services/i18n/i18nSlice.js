import { createSlice } from '@reduxjs/toolkit';

import i18n from '@Services/i18n/i18n';
import { defaultLanguage } from '@Services/i18n/languages';

const changeLang = languageId => dispatch => {
  return i18n.changeLanguage(languageId).then(() => {
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: defaultLanguage.id
  },
  reducers: {
    languageChanged: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const changeLanguage = changeLang;
export default i18nSlice.reducer;
