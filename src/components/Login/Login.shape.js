import { func } from 'prop-types';

export const defaultProps = {
  handleLogin: () => false
};

export const propTypes = {
  /**
   * Function that holds the validation of the login url
   */
  handleLogin: func
};
