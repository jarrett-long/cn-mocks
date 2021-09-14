import "@fontsource/roboto";
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

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
