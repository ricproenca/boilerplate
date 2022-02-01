import { string } from 'prop-types';

export const defaultProps = {
  scope: '<Component />'
};

export const propTypes = {
  /**
   * Hold the name to be logged (usually a component name)
   */
  scope: string
};
