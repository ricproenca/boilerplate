import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import * as React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import { defaultProps, propTypes } from './BreadcrumbList.shape';

const BreadcrumbList = ({ items }) => {
  // Render
  return (
    <Breadcrumbs sx={{ mt: 0.5 }} separator={<NavigateNextIcon color='primary' sx={{ m: -1.5 }} />}>
      {items.map((item, key) => (
        <BreadcrumbItem key={`breadcrumb-item-${key + 1}`} icon={item.icon} label={item.name} url={item.path} />
      ))}
    </Breadcrumbs>
  );
};

BreadcrumbList.defaultProps = { ...defaultProps };
BreadcrumbList.propTypes = { ...propTypes };

export default BreadcrumbList;
