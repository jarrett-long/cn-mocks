import "@fontsource/roboto";
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#336699',
      contrastText: '#fff'
    },
    secondary: {
      main: '#096',
      contrastText: '#fff'
    }
  }
});

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default App;
