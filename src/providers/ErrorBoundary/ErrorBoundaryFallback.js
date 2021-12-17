/* eslint-disable no-console */
import Box from '@mui/material/Box';
import React from 'react';

import { defaultProps, propTypes } from './ErrorBoundaryFallback.shape';
import ErrorBoundaryFallbackStyles from './ErrorBoundaryFallback.styles';

const ErrorFallback = ({ error, resetError }) => {
  // Hooks
  const classes = ErrorBoundaryFallbackStyles();

  // Render
  const showError = error.message ? error.message : error;

  return (
    <Box component='div' className={classes.root}>
      <h2 data-testid='title'>Ooops, something went wrong</h2>
      <pre className={classes.code} data-testid='error-message'>
        {showError}
      </pre>
      <button className={classes.button} onClick={resetError} data-testid='try-again-button'>
        Try again
      </button>
    </Box>
  );
};

ErrorFallback.defaultProps = { ...defaultProps };
ErrorFallback.propTypes = { ...propTypes };

export default ErrorFallback;
