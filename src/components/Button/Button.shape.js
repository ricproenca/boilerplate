import { element, oneOf } from 'prop-types';

export const defaultProps = {
  variant: 'primary'
};

export const propTypes = {
  variant: oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  icon: element
};
