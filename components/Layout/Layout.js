import { Container } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
