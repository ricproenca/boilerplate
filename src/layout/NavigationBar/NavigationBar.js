import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { protectedRoutes } from '@Routes/protected';
import { isLoggedIn } from '@Services/auth';

import BreadcrumbList from './BreadcrumbList';
import Login from './Login';
import Logout from './Logout';

const NavigationBar = () => {
  // Hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Local
  const currentRoute = protectedRoutes.find(route => pathname === route.path);
  const [tab, setTab] = React.useState(currentRoute.path);

  // Logic
  const crumbs = [currentRoute];
  crumbs.unshift({ icon: <HomeIcon />, name: 'Home', path: '/' });

  const tabClickHandler = (_event, tabPath) => {
    setTab(tabPath);
    navigate(tabPath);
  };

  // Render
  const userIsLogged = isLoggedIn();
  const LoggedInOutComponent = userIsLogged ? <Logout /> : <Login />;
  const showBreadcrumbs = userIsLogged ? <BreadcrumbList items={crumbs} /> : null;
  const tabValue = tab || currentRoute.name;

  return (
    <nav>
      <Box sx={{ display: { xs: 'flex' }, justifyContent: 'space-between' }}>
        <Box sx={{ justifyContent: 'flex-start', marginTop: 2, marginBottom: 2, marginLeft: 2 }}>{showBreadcrumbs}</Box>
        <Box sx={{ justifyContent: 'flex-end', marginTop: 2, marginBottom: 2, marginRight: 2 }}>
          {LoggedInOutComponent}
        </Box>
      </Box>

      <AppBar color='primary' position='sticky' sx={{ marginBottom: -1 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Tabs value={tabValue} textColor='secondary' indicatorColor='secondary' onChange={tabClickHandler}>
            {protectedRoutes.map(({ path, name }, idx) => {
              return <Tab key={`breadcumb-${idx}`} value={path} label={name} />;
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavigationBar;
