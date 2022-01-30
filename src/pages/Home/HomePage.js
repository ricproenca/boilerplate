import Container from '@mui/material/Container';
import { isValidSession } from '@Services/spotify/Auth';
import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import Login from '@Components/Login/Login';
import { loginUrl } from '@Config/spotify';

/**
 * Check if the user has a valid session and redirect to the proper route
 * dashboard: in case of a valid session
 * login: in case of a non valid session
 */
const HomePage = () => {
  const handleLogin = () => (window.location = loginUrl);

  return (
    <Fragment>
      {isValidSession() ? (
        <Navigate to='/dashboard' />
      ) : (
        <Container fixed>
          <Login handleLogin={handleLogin} />
        </Container>
      )}
    </Fragment>
  );
};

export default HomePage;
