import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { defaultProps, propTypes } from './AppProvider.shape.js';
import ErrorBoundaryFallback from './ErrorBoundary';
import SuspenseFallback from './Suspense';
import theme from './Theme';

const AppProvider = ({ children }) => {
  // Render
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={() => undefined}>
        <Suspense fallback={<SuspenseFallback />}>
          <BrowserRouter>{children}</BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

AppProvider.defaultProps = { ...defaultProps };
AppProvider.propTypes = { ...propTypes };

export default AppProvider;
