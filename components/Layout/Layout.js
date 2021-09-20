import { Container } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// maxWidth={false}
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
