import { Container, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about the application"
      />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} alignSelf="center">
          <div>
            A web application that has a website management system that allows
            business users to publish content. The published content is
            available in different parts of the site
          </div>

          <h2 style={{ marginTop: "100px" }}>Features of the site:</h2>

          <div style={{ marginTop: "10px" }}>
            - The main page is a content display page.
          </div>
          <div style={{ marginTop: "10px" }}>
            - The login system has access to the site management interface.
          </div>
          <div style={{ marginTop: "10px" }}>
            - The site management interface allows: adding, editing or deleting
            content.
          </div>
          <div style={{ marginTop: "10px" }}>
            - The website content is saved on the server.
          </div>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          alignSelf="center"
          sx={{ display: { md: "flex", xs: "none", justifyContent: "center" } }}
        >
          <img src="../assets/images/card.jpg" alt="card" width="60%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
