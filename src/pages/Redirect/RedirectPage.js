import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import useSpotifyAuth from '@Services/spotify/hooks/useSpotifyAuth';
import { getParamValues } from '@Utils/router';
/**
 * Spotify redirect page
 *
 * Holds the logic to persist the token acquired from Spotify authentication
 * Redirects to the proper page
 */
const RedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { persistAccessTokenParams } = useSpotifyAuth();

  useEffect(() => {
    if (!location.hash) {
      return navigate('/');
    }

    const urlParams = getParamValues(location.hash);
    const { access_token, expires_in, token_type } = urlParams;
    const expiry_time = new Date().getTime() + urlParams.expires_in * 1000;

    persistAccessTokenParams({
      access_token,
      expires_in,
      token_type,
      expiry_time
    });
  });

  useEffect(() => {
    navigate(`${HOME_ROUTE}/dashboard`);
  });

  return null;
};

export default RedirectPage;
