import { makeStyles } from '@mui/styles';

const useBreadcrumbItemStyle = makeStyles(() => {
  return {
    chip: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  };
});

export default useBreadcrumbItemStyle;
