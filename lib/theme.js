import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    border: '1px solid rgb(229, 231, 235)',
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      primary: 'linear-gradient(to top, #111827, #374151)',
      secondary: 'rgb(96, 165, 250)'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
});

export default theme;
