import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

import landingBottomImage from '@Assets/images/landingBottom.png';
import landingTopImage from '@Assets/images/landingTop.png';
import BaseTemplate from '@Templates/Base';

import useLandingStyles from './Landing.styles';

const Landing = () => {
  // Hooks
  const classes = useLandingStyles();
  const { t } = useTranslation();

  // Render
  return (
    <BaseTemplate>
      <Box sx={{ height: 20 }}></Box>
      <Box className={classes.container}>
        <Box component='img' className={classes.boxImage} alt='Are you a client' src={landingTopImage} />
        <Box className={classes.boxText}>
          <Typography variant='h2' color='primary.dark' paragraph>
            {t('Are you a client?')}
          </Typography>
          <Typography variant='h5' color='primary.main' paragraph>
            {t('Get secure and easy access to your loan information with ClientConnect!')}
          </Typography>
          <Box className={classes.listBox}>
            <Typography component='span' variant='body1' color='primary.main'>
              <ul>
                <li>{t('Contract details')}</li>
                <li>{t('Disbursements')}</li>
                <li>{t('Repayments')}</li>
                <li>{t('Fees and indemnities')}</li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: 20 }}></Box>
      <Box className={classes.container}>
        <Box className={classes.boxText}>
          <Typography variant='h2' color='primary.dark' paragraph>
            {t('Are you an eligible mandator?')}
          </Typography>
          <Typography variant='h6' color='primary.main'>
            {t('Eligible mandators can use ClientConnect to monitor asset management.')}
          </Typography>
          <Typography
            variant='h6'
            color='primary.main'
            sx={{ fontWeight: ({ typography }) => typography.fontWeightBold }}>
            {t('To gain access to the mandates area, please submit a request to your designated EIB official!')}
          </Typography>
          <Box className={classes.listBox}>
            <Typography component='span' variant='body1' color='primary.main'>
              <ul>
                <li>{t('Annual strategies and asset management proposals')}</li>
                <li>{t('Periodic portfolio operational reports')}</li>
                <li>{t('Periodic portfolio and performance reports')}</li>
                <li>{t('Invoices, periodic financial statements and AUM')}</li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box component='img' className={classes.boxImage} alt='Are you a client' src={landingBottomImage} />
      </Box>
      <Box sx={{ height: 20 }}></Box>
    </BaseTemplate>
  );
};

export default Landing;
