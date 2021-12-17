import React from 'react';

import AppBar from '@Layout/AppBar';
import Footer from '@Layout/Footer';
import MainContent from '@Layout/MainContent/MainContent';
import NavigationBar from '@Layout/NavigationBar';

import { defaultProps, propTypes } from './Base.shape.js';

const BaseLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <NavigationBar />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

BaseLayout.defaultProps = { ...defaultProps };
BaseLayout.propTypes = { ...propTypes };

export default BaseLayout;
