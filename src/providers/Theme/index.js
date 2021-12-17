import { createTheme } from '@mui/material/styles';

import breakpoints from './config/breakpoints';
import clientconnect from './config/clientconnect';
import components from './config/components';
import palette from './config/palette';
import typography from './config/typography';

const theme = createTheme({
  clientconnect,
  components,
  breakpoints,
  palette,
  typography
});

// eslint-disable-next-line no-console
console.log('Theme', theme);

export default theme;
