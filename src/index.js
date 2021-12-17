import 'react-hot-loader';

import React from 'react';
import { runWithAdal } from 'react-adal';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import '@fontsource/alegreya-sans';
import '@fontsource/roboto';

import { getContext } from '@Services/auth';
import { startAppEnvironment } from '@Services/boot/appEntry';
import { makeServer } from '@Services/server/localApi';
import { environment, startLocalApi } from '@Utils/build';

import 'normalize.css';
import './services/i18n';
import './index.css';
import App from './App';

const HotApp = hot(App);

const renderApp = (rootId, showLogin) => {
  runWithAdal(
    getContext(),
    () => {
      ReactDOM.render(<HotApp />, rootId);
    },
    showLogin
  );
};

const renderInitError = rootId => {
  ReactDOM.render(<div>Error initializing the application</div>, rootId);
};

const entry = async () => {
  const { showLogin, canInit } = await startAppEnvironment();
  const rootId = document.getElementById('root');

  if (canInit) {
    renderApp(rootId, showLogin);
    return;
  }

  renderInitError(rootId);
};

if (startLocalApi) {
  makeServer({ environment });
}

entry();
