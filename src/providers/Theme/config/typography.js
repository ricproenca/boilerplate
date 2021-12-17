/* eslint-disable sort-keys */
import { pxToRem } from './functions';

const FONT_ALEGREYA_SANS = '"Alegreya Sans", "Helvetica", "Arial", sans-serif';
const FONT_ROBOTO = '"Roboto", "Helvetica", "Arial", sans-serif';

const typography = {
  h1: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(48) },
  h2: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(38) },
  h3: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(32) },
  h4: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(28) },
  h5: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(24) },
  h6: { fontFamily: FONT_ALEGREYA_SANS, fontSize: pxToRem(20) },
  subtitle1: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(16) },
  subtitle2: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(14) },
  body1: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(16) },
  body2: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(14) },
  button: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(14) },
  icon: { fontSize: pxToRem(28) },
  caption: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(12) },
  overline: { fontFamily: FONT_ROBOTO, fontSize: pxToRem(12) }
};

export default typography;
