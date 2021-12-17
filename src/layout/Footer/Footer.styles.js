import { makeStyles } from '@mui/styles';

const useFooterStyle = makeStyles(({ palette }) => {
  return {
    socialIcon: {
      color: palette.button.blue.hover,
      '&:hover': {
        color: palette.common.cc
      }
    },
    policyIcon: {
      color: palette.text.disabled,
      '&:hover': {
        color: palette.common.cc
      }
    }
  };
});

export default useFooterStyle;
