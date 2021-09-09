import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}

export default App
