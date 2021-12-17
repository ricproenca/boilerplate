import Box from '@mui/material/Box';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@Components/Button';
import { logout } from '@Services/auth';

const Logout = () => {
  // Hooks
  const { t } = useTranslation();

  // Logic
  const logoutClickHandler = () => logout();

  // Render
  return (
    <Box>
      <Button variant='secondary' sx={{ marginTop: 0, marginBottom: 0 }} onClick={logoutClickHandler}>
        {t('Sign Out')}
      </Button>
    </Box>
  );
};

export default Logout;
