import React from 'react';
import { Artist } from 'react-spotify-api';

import User from '@Components/User';
import UserPlaylists from '@Components/UserPlaylists';

/**
 * Dashboard page
 *
 */
const DashboardPage = () => {
  return (
    <>
      <User />
      <UserPlaylists />
    </>
  );
};

export default DashboardPage;
