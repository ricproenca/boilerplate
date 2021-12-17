import React from 'react';

import AppProvider from '@Providers/AppProvider';
import AppRoutes from '@Routes';

const App = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </React.StrictMode>
  );
};

export default App;
