import Chip from '@mui/material/Chip';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { defaultProps, propTypes } from './BreadcrumbItem.shape';
import useBreadcrumbItemStyle from './BreadcrumbItem.styles';

const BreadcrumbItem = ({ icon, label, url }) => {
  // Hooks
  const classes = useBreadcrumbItemStyle();
  const navigate = useNavigate();

  // Logic
  const handleClick = () => {
    navigate(url);
  };

  // Render
  return <Chip icon={icon} label={label} className={classes.chip} onClick={handleClick} />;
};

BreadcrumbItem.defaultProps = { ...defaultProps };
BreadcrumbItem.propTypes = { ...propTypes };

export default BreadcrumbItem;
