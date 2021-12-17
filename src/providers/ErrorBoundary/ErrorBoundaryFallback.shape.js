import { func, object } from 'prop-types';

import { reloadPage } from '@Utils/router';

export const defaultProps = {
  error: '',
  resetError: reloadPage
};

export const propTypes = {
  error: object,
  resetError: func
};
