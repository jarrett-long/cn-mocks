import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const colors = {
  blue: '#336699',
  green: '#096',
  white: '#fff'
}

const palette = {
  primary: {
    main: colors.blue,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.green,
    contrastText: colors.white
  }
}

export const defaultTheme = createTheme({
  palette: {
    ...palette,
    background: {
      paper: colors.white,
      default: colors.white,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            backgroundColor: colors.white
          }
        }
      }
    }
  }
});

export const blueBgTheme = createTheme({
  palette: {
    ...palette,
    mode: 'dark',
    background: {
      paper: colors.blue,
      default: colors.blue
    },
    info: {
      main: colors.white,
      contrastText: colors.blue
    },
  }
});