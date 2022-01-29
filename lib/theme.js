import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(96, 165, 250)'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: 'inter, sans-serif'
  }
});

export default theme;
