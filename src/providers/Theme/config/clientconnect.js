import { pxToRem } from './functions';
import { background, button, primary, text } from './palette';
import typography from './typography';

const clientConnectComponents = {
  buttons: {
    primary: {
      '&:disabled': {
        backgroundColor: text.disabled,
        color: text.secondary
      },
      '&:hover': {
        backgroundColor: button.blue.hover,
        color: text.secondary
      },
      backgroundColor: primary.main,
      border: 1,
      borderColor: primary.main,
      borderRadius: pxToRem(3),
      color: text.secondary,
      fontSize: typography.button,
      fontWeight: 500,
      height: 40,
      letterSpacing: 0,
      lineHeight: pxToRem(20),
      marginBottom: pxToRem(50),
      marginLeft: pxToRem(10),
      marginRight: pxToRem(10),
      marginTop: pxToRem(30),
      paddingLeft: pxToRem(20),
      paddingRight: pxToRem(20),
      textTransform: 'uppercase'
    },
    secondary: {
      '&:disabled': {
        backgroundColor: text.disabled,
        color: text.secondary
      },
      '&:hover': {
        backgroundColor: button.white.hover,
        color: primary.main
      },
      backgroundColor: button.white.default,
      border: 1,
      borderColor: primary.main,
      borderRadius: pxToRem(3),
      color: primary.main,
      fontSize: typography.button,
      fontWeight: 500,
      height: 40,
      letterSpacing: 0,
      lineHeight: pxToRem(20),
      marginBottom: pxToRem(50),
      marginLeft: pxToRem(10),
      marginRight: pxToRem(10),
      marginTop: pxToRem(30),
      paddingLeft: pxToRem(20),
      paddingRight: pxToRem(20)
    },
    tertiary: {
      '&:hover': {
        border: 1,
        borderColor: button.white.hover
      },
      backgroundColor: background.paper,
      border: 0,
      borderColor: button.white.default,
      borderRadius: pxToRem(3),
      color: primary.main,
      fontSize: typography.button,
      fontWeight: 500,
      height: 40,
      letterSpacing: 0,
      lineHeight: pxToRem(20),
      marginBottom: pxToRem(50),
      marginLeft: pxToRem(5),
      marginRight: pxToRem(5),
      marginTop: pxToRem(30),
      minWidth: 48,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0
    },
    quaternary: {}
  }
};

export default clientConnectComponents;
