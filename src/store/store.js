import { configureStore } from '@reduxjs/toolkit';

import appReducer from '@Services/boot/appSlice';
import i18nReducer from '@Services/i18n/i18nSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    i18n: i18nReducer
  }
});

export default store;
