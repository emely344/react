import { Box } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { node } from "prop-types";

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "lightgrey" }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};
Layout.prototypes = {
  children: node.isRequired,
};
export default Layout;
