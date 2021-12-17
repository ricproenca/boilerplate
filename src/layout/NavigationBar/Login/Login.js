import Box from '@mui/material/Box';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@Components/Button';
import { login } from '@Services/auth';

const Logout = () => {
  // Hooks
  const { t } = useTranslation();

  // Logic
  const loginClickHandler = () => login();

  const createAccountHandler = () => {
    // do nothing
  };

  // Render
  return (
    <Box>
      <Button variant='primary' sx={{ marginTop: 0, marginBottom: 0 }} onClick={createAccountHandler}>
        {t('Create Account')}
      </Button>
      <Button variant='secondary' sx={{ marginTop: 0, marginBottom: 0 }} onClick={loginClickHandler}>
        {t('Sign In')}
      </Button>
    </Box>
  );
};

export default Logout;
