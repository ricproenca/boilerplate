import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import useSpotifyAuth from '@Services/spotify/hooks/useSpotifyAuth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const Home = React.lazy(() => import('@Pages/Home'));

/**
 * Definition of the Application Routes
 */
const AppRoutes = () => {
  const { isValidSession } = useSpotifyAuth();

  const commonRoutes = [
    {
      path: HOME_ROUTE,
      element: <Home />
    },
    {
      path: '/',
      element: <Navigate to={HOME_ROUTE} />
    },
    {
      path: '*',
      element: <Navigate to={HOME_ROUTE} />
    }
  ];

  const routes = isValidSession() ? protectedRoutes : publicRoutes;

  return useRoutes([...routes, ...commonRoutes]);
};

export default AppRoutes;
