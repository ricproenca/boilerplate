import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from '@Store';

import { defaultProps, propTypes } from './AppProvider.shape.js';
import ErrorBoundaryFallback from './ErrorBoundary';
import SuspenseFallback from './Suspense';
import theme from './Theme';

const AppProvider = ({ children }) => {
  // Render
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={() => undefined}>
        <Provider store={Store}>
          <Suspense fallback={<SuspenseFallback />}>
            <BrowserRouter>{children}</BrowserRouter>
          </Suspense>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

AppProvider.defaultProps = { ...defaultProps };
AppProvider.propTypes = { ...propTypes };

export default AppProvider;
