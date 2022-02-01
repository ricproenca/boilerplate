import React from 'react';
import { hot } from 'react-hot-loader/root';

import AppProvider from '@Providers/AppProvider';
import AppRoutes from '@Routes';

/**
 * App
 */
const App = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </React.StrictMode>
  );
};

export default hot(App);
