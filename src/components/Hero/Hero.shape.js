import { node, string } from 'prop-types';
import React from 'react';

export const defaultProps = {
  children: <div></div>,
  image: <div></div>,
  imageText: ''
};

export const propTypes = {
  children: node,
  image: node,
  imageText: string
};
