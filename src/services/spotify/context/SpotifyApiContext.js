import React from 'react';
import { SpotifyApiContext } from 'react-spotify-api';

import { defaultProps, propTypes } from './SpotifyApiContext.shape';

/**
 * Provider for the Spotify Api
 *
 * @param {object} children -Consumer components
 * @param {string} token - Token string
 */
const SpotifyApiContextProvider = ({ children, token }) => (
  <SpotifyApiContext.Provider value={token}>{children}</SpotifyApiContext.Provider>
);

SpotifyApiContextProvider.defaultProps = { ...defaultProps };
SpotifyApiContextProvider.propTypes = { ...propTypes };

export default SpotifyApiContextProvider;
