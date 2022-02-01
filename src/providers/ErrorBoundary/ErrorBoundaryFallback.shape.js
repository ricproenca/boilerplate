import { func, object, oneOfType, string } from 'prop-types';

import { reloadPage } from '@Utils/router';

export const defaultProps = {
  error: '',
  resetError: reloadPage
};

export const propTypes = {
  /**
   * Error to show
   */
  error: oneOfType([object, string]),
  /**
   * callback to reset the Error
   */
  resetError: func
};
