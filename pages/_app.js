import "@fontsource/roboto";
import CssBaseline from '@mui/material/CssBaseline';
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../theme';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <ThemeProvider theme={defaultTheme}>
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
