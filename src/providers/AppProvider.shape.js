import { node } from 'prop-types';
import React from 'react';

export const defaultProps = {
  children: <div></div>
};

export const propTypes = {
  /**
   * Consumer components
   */
  children: node.isRequired
};
