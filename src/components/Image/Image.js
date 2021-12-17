import Box from '@mui/material/Box';
import * as React from 'react';

import { defaultProps, propTypes } from './Image.shape';

const Image = ({ alt, className, height, src, style, sx, width, component, href, target, rel }) => {
  // Render
  return (
    <Box component={component} sx={sx} href={href} target={target} rel={rel}>
      <img src={src} alt={alt} height={height} width={width} style={style} className={className} />
    </Box>
  );
};

Image.defaultProps = { ...defaultProps };
Image.propTypes = { ...propTypes };

export default Image;
