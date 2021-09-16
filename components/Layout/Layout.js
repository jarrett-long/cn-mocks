import { Container } from "@material-ui/core";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <Container maxWidth={false}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
