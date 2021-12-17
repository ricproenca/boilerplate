import palette from './palette';

export default {
  MuiButton: {
    variants: [
      {
        props: {
          color: 'primary',
          variant: 'contained'
        },
        style: {
          backgroundColor: palette.primary.main,
          fontSize: 20,
          minWidth: '200px'
        }
      },
      {
        props: {
          color: 'secondary',
          variant: 'contained'
        },
        style: {
          backgroundColor: palette.secondary.main
        }
      }
    ]
  }
};
