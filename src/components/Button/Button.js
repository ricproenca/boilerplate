import { Button as MuiButton } from '@mui/material';
import * as React from 'react';

import { defaultProps, propTypes } from './Button.shape';

const Button = ({ variant, sx, ...otherProps }) => {
  // Render
  return (
    <MuiButton sx={theme => Object.assign(theme.clientconnect.buttons[variant], sx)} {...otherProps}>
      {otherProps.children}
    </MuiButton>
  );
};

Button.defaultProps = { ...defaultProps };
Button.propTypes = { ...propTypes };

export default Button;
