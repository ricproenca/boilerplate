import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';
import { isLoggedIn } from '@Services/auth';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const Home = React.lazy(() => import('@Pages/Home'));

const AppRoutes = () => {
  const commonRoutes = [
    {
      path: HOME_ROUTE,
      element: <Home />
    },
    {
      path: '/',
      element: <Navigate to={HOME_ROUTE} />
    }
  ];

  const routes = isLoggedIn() ? protectedRoutes : publicRoutes;

  return useRoutes([...routes, ...commonRoutes]);
};

export default AppRoutes;
