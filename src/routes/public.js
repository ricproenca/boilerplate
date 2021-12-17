import React from 'react';
import { Navigate } from 'react-router-dom';

import { HOME_ROUTE } from '@Config/routes';

const publicRoutes = [
  {
    path: '/',
    element: <Navigate to={HOME_ROUTE} />
  }
];

export { publicRoutes };
