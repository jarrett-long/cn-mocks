import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const fontHeading = ['"Roboto Slab"', '"Playfair Display"', "Open Sans"].join(",");

const colors = {
  blue: "#336699",
  green: "#096",
  white: "#fff",
};

const palette = {
  primary: {
    main: colors.blue,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.green,
    contrastText: colors.white,
  },
};

export const defaultTheme = createTheme({
  typography: {
    h1: {
      fontFamily: fontHeading,
    },
    h2: {
      fontFamily: fontHeading,
    },
    h3: {
      fontFamily: fontHeading,
    },
    h4: {
      fontFamily: fontHeading,
    },
    h5: {
      fontFamily: fontHeading,
    },
    h6: {
      fontFamily: fontHeading,
    },
  },
  palette: {
    ...palette,
    background: {
      paper: colors.white,
      default: colors.white,
    },
  },
  shape: {
    borderRadius: 1,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            backgroundColor: colors.white,
          },
        },
      },
    },
  },
});

export const blueBgTheme = createTheme({
  // typography: {
  //   fontFamily: font
  //  },
  palette: {
    ...palette,
    mode: "dark",
    background: {
      paper: colors.blue,
      default: colors.blue,
    },
    text: {
      primary: colors.white,
    },
    info: {
      main: colors.white,
      contrastText: colors.blue,
    },
  },
  shape: {
    borderRadius: 1,
  },
});
