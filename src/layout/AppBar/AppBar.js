import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React from 'react';

import ClientConnectLogo from '@Assets/images/logos/cc_blue.svg';
import EibLogo from '@Assets/images/logos/eib_blue.png';
import Button from '@Components/Button';
import Image from '@Components/Image';
import { HOME_ROUTE } from '@Config/routes';

import useHeaderStyle from './AppBar.styles';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderAppBar = () => {
  // Hooks
  const classes = useHeaderStyle();

  // Logic
  const helpHandler = () => {
    // do nothing
  };

  // Render
  return (
    <AppBar position='static' color='transparent' className={classes.appBar} border={1}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, justifyContent: 'flex-start', display: { xs: 'flex' } }}>
          <Image
            src={ClientConnectLogo}
            alt={'ClientConnect Logo'}
            height={24}
            component='a'
            href={HOME_ROUTE}
            rel='noopener noreferrer'
          />
        </Box>
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ paddingRight: 12 }}>
            <Image
              src={EibLogo}
              alt={'EIB Logo'}
              height={48}
              component='a'
              href='https://www.eib.org/'
              target='_blank'
              rel='noopener noreferrer'
            />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex' } }}>
          <Button variant='tertiary' onClick={helpHandler} sx={{ margin: 0 }}>
            <HelpOutlineIcon className={classes.languageIcon} />
          </Button>
          <Box sx={{ marginLeft: 1 }}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;
