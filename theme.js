import { createTheme } from '@material-ui/core/styles';

const blue = '#336699';
const green = '#096';
const palette = {
  primary: {
    main: blue,
    contrastText: '#fff'
  },
  secondary: {
    main: green,
    contrastText: '#fff'
  }
}

const theme = createTheme({
  palette,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff'
        }
      }
    }
  }
});

export const blueBg = createTheme({
  palette: {
    ...palette,
    type: 'dark',
    backgroundColor: blue,
  }
})

export default theme;