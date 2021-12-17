import { element, number, object, oneOf, oneOfType, string } from 'prop-types';

// https://www.w3schools.com/tags/tag_img.asp

export const defaultProps = {
  alt: 'placeholder',
  wrapper: 'div'
};

export const propTypes = {
  alt: string,
  height: oneOfType([number, string]),
  src: oneOfType([element, string]),
  style: object,
  sx: object,
  width: oneOfType([number, string]),
  component: oneOf(['div', 'span', 'a'])
};
