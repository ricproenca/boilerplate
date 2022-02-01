import React from 'react';
import { Navigate } from 'react-router-dom';

import { HOME_ROUTE, SPOTIFY_REDIRECT_ROUTE } from '@Config/routes';

const Redirect = React.lazy(() => import('@Pages/Redirect'));

/**
 * Definition of the routes that not require authentication
 */
const publicRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <Navigate to={HOME_ROUTE} />
  },
  {
    name: 'Redirect',
    path: SPOTIFY_REDIRECT_ROUTE,
    element: <Redirect />
  }
];

export { publicRoutes };
