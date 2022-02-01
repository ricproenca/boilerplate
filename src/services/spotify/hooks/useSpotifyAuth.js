import SpotifyWebApi from 'spotify-web-api-js';

/**
 * @typedef {Object} SpotifySessionParams
 * @property {string} access_token - The session token
 * @property {string} expires_in - The session expiration time
 * @property {string} token_type - The session token type
 * @property {string} expiry_time - The time when the session will expire
 */

/**
 * Spotify Web API instance
 */
const spotifyApi = new SpotifyWebApi();

const useSpotifyAuth = () => {
  /**
   * Gets the session params from local storage
   *
   * @returns {SpotifySessionParams|null}
   */
  const getAccessTokenParams = () => {
    try {
      return {
        access_token: localStorage.getItem('access_token'),
        expires_in: localStorage.getItem('expires_in'),
        token_type: localStorage.getItem('token_type'),
        expiry_time: localStorage.getItem('expiry_time')
      };
    } catch (err) {
      return null;
    }
  };

  /**
   * Gets the access token  from local storage
   *
   * @returns {string} access_token -The session token
   */
  const getAccessToken = () => {
    const { access_token } = getAccessTokenParams();
    return access_token;
  };

  /**
   * Checks is the current session is valid
   * @returns {boolean}
   */
  const isValidSession = () => {
    try {
      const currentTime = new Date().getTime();
      const expirationTime = localStorage.getItem('expiry_time');
      return currentTime < expirationTime;
    } catch (err) {
      return false;
    }
  };

  /**
   * Saves the session params in local storage
   *
   * @param {SpotifySessionParams}
   */
  const persistAccessTokenParams = ({ access_token, expires_in, token_type, expiry_time }) => {
    try {
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('expires_in', expires_in);
      localStorage.setItem('token_type', token_type);
      localStorage.setItem('expiry_time', expiry_time);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  /**
   * Sets the access token to be able to do requests to Spotify API
   */
  const setAccessToken = () => {
    const { access_token } = getAccessTokenParams();
    spotifyApi.setAccessToken(access_token);
  };

  return { getAccessTokenParams, getAccessToken, isValidSession, persistAccessTokenParams, setAccessToken };
};

export default useSpotifyAuth;
