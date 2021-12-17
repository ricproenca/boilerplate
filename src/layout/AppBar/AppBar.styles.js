import { makeStyles } from '@mui/styles';

const useHeaderStyle = makeStyles(({ palette, typography }) => {
  return {
    appBar: {
      background: palette.background.paper,
      boxShadow: 'none',
      borderBottom: `1px solid ${palette.secondary.main}`
    },
    languageIcon: {
      fontSize: typography.icon.fontSize
    }
  };
});

export default useHeaderStyle;
