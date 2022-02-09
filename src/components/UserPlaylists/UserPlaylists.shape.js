import { bool, object } from 'prop-types';

export const defaultProps = {};

export const propTypes = {
  /**
   * Holds the data received from HOC
   */
  data: object,
  /**
   * Holds the the loading state
   */
  loading: bool,
  /**
   * Holds the error message
   */
  error: object
};
