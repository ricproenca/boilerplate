import Container from '@mui/material/Container';
import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import Login from '@Components/Login/Login';
import { loginUrl } from '@Services/spotify/config';
import useSpotifyAuth from '@Services/spotify/hooks/useSpotifyAuth';

/**
 * Home Page
 *
 * It checks if the user has a valid session and redirect to the proper route
 * - dashboard: in case of a valid session
 * - login: in case of a non valid session
 */
const HomePage = () => {
  const { isValidSession } = useSpotifyAuth();

  const handleLogin = () => (window.location = loginUrl);

  return (
    <>
      {isValidSession() ? (
        <Navigate to='/dashboard' />
      ) : (
        <Container fixed>
          <Login handleLogin={handleLogin} />
        </Container>
      )}
    </>
  );
};

export default HomePage;
