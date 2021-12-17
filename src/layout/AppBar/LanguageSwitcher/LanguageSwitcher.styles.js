import { makeStyles } from '@mui/styles';

const useLanguageSwitcherStyle = makeStyles(({ palette }) => ({
  iconButton: {
    textTransform: 'none'
  },
  languageIcon: {
    color: palette.primary.main,
    position: 'absolute',
    fontSize: 28
  },
  languageFlagImage: {
    position: 'relative',
    height: 12,
    verticalAlign: 'middle',
    zIndex: 1150,
    marginLeft: 26,
    marginBottom: 14,
    backgroundColor: '#ffffff'
  },
  languageListItemImage: {
    height: 16,
    verticalAlign: 'middle'
  },
  languageListItem: {
    paddingLeft: 8,
    paddingRight: 8,
    color: palette.primary.dark,
    '&:hover': {
      backgroundColor: palette.primary.light
    }
  }
}));

export default useLanguageSwitcherStyle;
