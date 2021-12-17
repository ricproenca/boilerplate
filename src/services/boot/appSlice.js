import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAppEnvironment } from './appService';

export const initialState = {
  adfsUrl: null,
  apiUrl: null,
  canChangePhoneNumber: false,
  canChangePwd: false,
  canHaveEmailNotification: false,
  clientId: null,
  error: null,
  language: '',
  redirectUri: null,
  resource: null,
  showDocumentsInGed: false,
  showLogin: false,
  status: 'idle',
  useApiGw: true
};

export const fetchAppEnvironment = createAsyncThunk('app/fetchEnvironment', getAppEnvironment);

const reducers = {};

const extraReducers = {
  [fetchAppEnvironment.pending]: (state, { meta }) => {
    state.currentRequestId = meta;
    state.status = 'pending';
  },

  [fetchAppEnvironment.fulfilled]: (state, { meta, payload }) => {
    if (meta.requestId === state.currentRequestId.requestId) {
      state.status = 'fullfilled';

      state.adfsUrl = payload.adfsUrl;
      state.apiUrl = payload.apiUrl;
      state.canChangePhoneNumber = payload.canChangePhoneNumber;
      state.canChangePwd = payload.canChangePwd;
      state.canHaveEmailNotification = payload.canHaveEmailNotification;
      state.clientId = payload.clientId;
      state.redirectUri = payload.redirectUri;
      state.resource = payload.resource;
      state.showDocumentsInGed = payload.showDocumentsInGed;
      state.showLogin = payload.showLogin;
      state.useApiGw = payload.useApiGw;
    }
  },

  [fetchAppEnvironment.rejected]: (state, { meta, error }) => {
    if (meta.requestId === state.currentRequestId.requestId) {
      state.status = 'rejected';
      state.error = error && error.message;
    }
  }
};

const { reducer } = createSlice({
  extraReducers,
  initialState,
  name: 'appSlice',
  reducers
});

export default reducer;
