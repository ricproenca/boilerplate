import LanguageIcon from '@mui/icons-material/Language';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeLanguage } from '@Services/i18n/i18nSlice';
import { languages } from '@Services/i18n/languages';

import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';

import useLanguageSwitcherStyle from './LanguageSwitcher.styles';

const LanguageSwitcher = () => {
  // Hooks
  const classes = useLanguageSwitcherStyle();
  const dispatch = useDispatch();

  // State: global
  const currentLanguageIdSelector = ({ i18n }) => i18n.language;
  const currentLanguageId = useSelector(currentLanguageIdSelector);

  // State: local
  const [menu, setMenu] = React.useState(null);

  // Logic
  const langMenuClick = event => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  const handleLanguageChange = lng => {
    dispatch(changeLanguage(lng.id));

    langMenuClose();
  };

  const currentLanguage = languages.find(lng => lng.id === currentLanguageId);

  // Render
  return (
    <>
      <Button variant='tertiary' className={classes.iconButton} onClick={langMenuClick}>
        <LanguageIcon className={classes.languageIcon} />
        <Image src={currentLanguage.flag} alt={currentLanguage.name} className={classes.languageFlagImage} />
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {languages.map(lng => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)} className={classes.languageListItem} dense>
            <ListItemIcon>
              <Image src={lng.flag} alt={lng.name} className={classes.languageListItemImage} />
            </ListItemIcon>
            <ListItemText
              primary={lng.name}
              primaryTypographyProps={{ fontSize: ({ typography }) => typography.fontSize }}
            />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguageSwitcher;
