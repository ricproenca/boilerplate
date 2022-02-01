import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/alegreya-sans';
import '@fontsource/roboto';

import 'normalize.css';
import './services/i18n';
import './index.css';
import startLocalApi from '@Services/server/start';

import App from './App';

startLocalApi(false);

const rootId = document.getElementById('root');
ReactDOM.render(<App />, rootId);
