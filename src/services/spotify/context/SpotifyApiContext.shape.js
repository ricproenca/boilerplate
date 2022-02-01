import { node, string } from 'prop-types';
import React from 'react';

export const defaultProps = {
  children: <></>,
  token: ''
};

export const propTypes = {
  /**
   * Consumer components
   */
  children: node,
  /**
   * Token string
   */
  token: string
};
