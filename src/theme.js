import { createMuiTheme } from '@material-ui/core/styles';
import { pink, green } from '@material-ui/core/colors';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway, Arial',
  },
  palette: {
    primary: {
      light: '#5c67a3',
      main: '#3f4771',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
    link: {
      dark: '#ff4081',
    },
    openTitle: '#3f4771',
    protectedTitle: green['400'],
    type: 'light',
  },
});
export default theme;
