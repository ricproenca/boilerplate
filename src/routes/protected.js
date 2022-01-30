import React from 'react';
import { Navigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';

const Dashboard = React.lazy(() => import('@Pages/Dashboard'));

const protectedRoutes = [
  { name: 'Home', path: HOME_ROUTE, element: <Navigate to={`${HOME_ROUTE}/dashboard`} /> },
  { name: 'Dashboard', path: `${HOME_ROUTE}/dashboard`, element: <Dashboard /> }
];

export { protectedRoutes };
