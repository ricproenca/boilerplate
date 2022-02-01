import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import SpotifyApiContextProvider from '@Services/spotify/context';
import useSpotifyAuth from '@Services/spotify/hooks/useSpotifyAuth';

import { defaultProps, propTypes } from './AppProvider.shape.js';
import ErrorBoundaryFallback from './ErrorBoundary';
import SuspenseFallback from './Suspense';
import theme from './Theme';

/**
 * Wrapper for all App providers.
 * @param {*} children - consumer components
 */
const AppProvider = ({ children }) => {
  const { getAccessToken } = useSpotifyAuth();

  const token = getAccessToken();

  // Render
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={() => undefined}>
        <Suspense fallback={<SuspenseFallback />}>
          <SpotifyApiContextProvider token={token}>
            <BrowserRouter>{children}</BrowserRouter>
          </SpotifyApiContextProvider>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

AppProvider.defaultProps = { ...defaultProps };
AppProvider.propTypes = { ...propTypes };

export default AppProvider;
