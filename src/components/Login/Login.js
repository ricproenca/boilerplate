import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';

import spotifyLogo from '@Assets/images/spotify/Spotify_Logo_RGB_Green.png'; // Tell webpack this JS file uses this image

import { defaultProps, propTypes } from './Login.shape';
import loginStyles from './Login.styles';

/**
 * Login page
 */
const Login = ({ handleLogin }) => {
  const classes = loginStyles();

  return (
    <Box className={classes.Container}>
      <Box className={classes.Box}>
        <img className={classes.Logo} src={spotifyLogo} alt='Spotify Logo' />
      </Box>
      <Box className={classes.Box}>
        <Button className={classes.LoginButton} display='block' onClick={handleLogin}>
          Login to Rickys spotify
        </Button>
      </Box>
      <Typography className={classes.Message} display='block' gutterBottom>
        Not another spotify clone...
      </Typography>
      <Typography className={classes.Link} display='block' gutterBottom>
        <Link
          href='https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#'
          target='_blank'
          rel='noreferrer'>
          Get Your Web Playback SDK Access Token
        </Link>
      </Typography>
    </Box>
  );
};

Login.defaultProps = { ...defaultProps };
Login.propTypes = { ...propTypes };

export default Login;
