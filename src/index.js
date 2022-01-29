import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/alegreya-sans';
import '@fontsource/roboto';

// import { makeServer } from '@Services/server/localApi';
// import { environment, startLocalApi } from '@Utils/build';

import 'normalize.css';
import './services/i18n';
import './index.css';
import App from './App';
const rootId = document.getElementById('root');

ReactDOM.render(<App />, rootId);

// if (startLocalApi) {
//   makeServer({ environment });
// }
