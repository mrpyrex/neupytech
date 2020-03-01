import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

const Mobiledev = () => {
  return (
    <Container maxWidth="lg">
      <Typography>Mobile Apps Development Service</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>UX/UI</Typography>
          <Typography>
            Because we believe each project is supposed to be bespoke, our team
            of designers strat with wireframing which then transformed into both
            visually appealing and user-friendly designs that altogether bring
            about site visistor and customer satisfaction alike.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Development</Typography>
          <Typography>
            Our team of developers are skilled in the use of the most current
            technologies in the web-app development. They make use of them in
            ways that bring about effieciency, cost-effectiveness and fast
            loading to your project. The technologies we use include Python,
            React, CSS3, HTML5, PHP.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>SEO & Analytics</Typography>
          <Typography>
            Our team of developers are skilled in the use of the most current
            technologies in the web-app development. They make use of them in
            ways that bring about effieciency, cost-effectiveness and fast
            loading to your project. The technologies we use include Python,
            React, CSS3, HTML5, PHP.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Maintenance & Hosting</Typography>
          <Typography>
            Our team of developers are skilled in the use of the most current
            technologies in the web-app development. They make use of them in
            ways that bring about effieciency, cost-effectiveness and fast
            loading to your project. The technologies we use include Python,
            React, CSS3, HTML5, PHP.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mobiledev;
