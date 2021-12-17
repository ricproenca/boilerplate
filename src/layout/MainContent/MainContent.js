import Box from '@mui/material/Box';
import React from 'react';

import heroImage from '@Assets/images/jumbotron.png';
import Hero from '@Components/Hero';

import { defaultProps, propTypes } from './MainContent.shape';

const MainContent = ({ children }) => {
  // Render
  return (
    <Box component='main'>
      <Hero image={heroImage} wrapperStyle={{ minHeight: 770 }}>
        {children}
      </Hero>
    </Box>
  );
};

MainContent.defaultProps = { ...defaultProps };
MainContent.propTypes = { ...propTypes };

export default MainContent;
