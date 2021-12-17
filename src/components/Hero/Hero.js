import Paper from '@mui/material/Paper';
import * as React from 'react';

import { defaultProps, propTypes } from './Hero.shape';

function Hero({ children, image, imageText, wrapperStyle }) {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        position: 'relative'
      }}
      style={wrapperStyle}>
      {/* Increase the priority of the hero background image */}
      <img style={{ display: 'none' }} src={image} alt={imageText} />
      {children}
    </Paper>
  );
}

Hero.defaultProps = { ...defaultProps };
Hero.propTypes = { ...propTypes };

export default Hero;
