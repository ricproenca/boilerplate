import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useLandingStyles = makeStyles(({ breakpoints, palette, shadows, spacing }) => {
  return {
    container: {
      [breakpoints.up('xs')]: { flexDirection: 'column' },
      [breakpoints.up('sm')]: {},
      [breakpoints.up('md')]: {},
      [breakpoints.up('lg')]: { flexDirection: 'row' },
      [breakpoints.up('xl')]: {},
      [breakpoints.up('xxl')]: {},
      alignItems: 'center',
      backgroundColor: palette.background.paper,
      borderRadius: spacing(3),
      boxShadow: shadows[1],
      display: 'flex',
      marginLeft: spacing(6),
      marginRight: spacing(6),
      overflow: 'hidden'
    },
    boxImage: {
      [breakpoints.up('xs')]: { height: '150%' },
      [breakpoints.up('sm')]: {},
      [breakpoints.up('md')]: {},
      [breakpoints.up('lg')]: { maxHeight: '50%' },
      [breakpoints.up('xl')]: {},
      [breakpoints.up('xxl')]: {},
      width: '50%'
    },
    boxText: {
      [breakpoints.up('xs')]: { alignItems: 'center' },
      [breakpoints.up('sm')]: {},
      [breakpoints.up('md')]: { alignItems: 'flex-start' },
      [breakpoints.up('lg')]: {},
      [breakpoints.up('xl')]: {},
      [breakpoints.up('xxl')]: {},
      display: 'flex',
      flexDirection: 'column',
      margin: spacing(3)
    },
    listBox: {
      alignItems: 'center',
      backgroundColor: alpha(palette.primary.main, 0.1),
      borderRadius: spacing(3),
      marginTop: spacing(2),
      marginBottom: spacing(1),
      paddingRight: spacing(5)
    }
  };
});

export default useLandingStyles;
