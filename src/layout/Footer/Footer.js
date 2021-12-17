import ContactPageIcon from '@mui/icons-material/ContactPage';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EibLogo from '@Assets/images/logos/eib_blue.png';
import Image from '@Components/Image';

import useFooterStyle from './Footer.styles';

const Footer = () => {
  // Hooks
  const classes = useFooterStyle();
  const { t } = useTranslation();

  // Render
  return (
    <AppBar
      component='footer'
      sx={{
        position: 'static',
        backgroundColor: ({ palette }) => palette.background.paper,
        paddingTop: 2,
        marginTop: 3,
        borderTop: 1,
        borderColor: ({ palette }) => palette.secondary.main
      }}>
      <Toolbar position='static' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component='div'>
          <Box>
            <IconButton target='_blank' rel='noopener noreferrer' href='https://www.eib.org/en/rss/index.htm'>
              <RssFeedIcon className={classes.socialIcon} />
            </IconButton>

            <IconButton target='_blank' rel='noopener noreferrer' href='http://www.facebook.com/EuropeanInvestmentBank'>
              <FacebookIcon className={classes.socialIcon} />
            </IconButton>

            <IconButton target='_blank' rel='noopener noreferrer' href='http://www.linkedin.com/company/9360'>
              <LinkedInIcon className={classes.socialIcon} />
            </IconButton>
          </Box>
          <Box>
            <IconButton target='_blank' rel='noopener noreferrer' href='http://twitter.com/EIB'>
              <TwitterIcon className={classes.socialIcon} />
            </IconButton>

            <IconButton target='_blank' rel='noopener noreferrer' href='http://www.youtube.com/EIBtheEUbank'>
              <YouTubeIcon className={classes.socialIcon} />
            </IconButton>

            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/europeaninvestmentbank/'>
              <InstagramIcon className={classes.socialIcon} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            flexDirection: 'column',
            justifyContent: 'start',
            paddingRight: 10,
            display: { xs: 'none', lg: 'flex' }
          }}>
          <Box component='span' sx={{ textAlign: 'center' }}>
            <IconButton target='_blank' rel='noopener noreferrer' href='https://www.eib.org/en/privacy/index.htm'>
              <VerifiedUserIcon className={classes.policyIcon} />
            </IconButton>

            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.eib.org/en/infocentre/contact/index.htm'>
              <ContactPageIcon className={classes.policyIcon} />
            </IconButton>
          </Box>
          <Box component='div' sx={{ textAlign: 'center' }}>
            <Typography component='p' variant='caption' color='text.primary'>
              {t('©European Investment Bank 2021')}
            </Typography>

            <Typography component='p' variant='caption' color='text.disabled'>
              {t('The European Investment Bank is not responsible for the content on external internet sites')}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ justifyContent: 'flex-end', display: { xs: 'flex' } }}>
          <Image
            src={EibLogo}
            alt={'EIB Logo'}
            sx={{ alignContent: 'center' }}
            height={48}
            className={classes.eibLogoImage}
            component='a'
            href='https://www.eib.org/'
            target='_blank'
            rel='noopener noreferrer'
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
