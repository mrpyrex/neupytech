import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import Newsletter from "../components/Newsletter";

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.top} variant="h2">
        About Us
      </Typography>
      <Grid container spacing={2} className={classes.top}>
        <Typography variant="body2">
          We believe that high-quality, meaningful digital products can help
          transform organizations. Since 2017, we've helped a handful of startup
          businesses to succeed through the use of innovative technologies. From
          the conception to implementation, neupytech's team of talented
          strategists, designers, and developers from many disciplines and
          backgrounds, utilizes a case-by-case approach in ensuring that every
          project that we handle gets tailor-fit solutions. We see ourselves as
          partners and not as vendors - we are not just trying to sell you
          service but beyond that, we aim to become part of your team. We'll
          allign with our vision and mission to help you build products that
          does not only reflect what you are selling but also your values.
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Typography variant="subtitle1">What We Do</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <Paper className={classes.bottom}>
              <Typography variant="subtitle1">
                Compelling & Creative Design
              </Typography>
              <Typography variant="body2">
                MAXBURST specializes in custom, interactive website design and
                development. We can design your website to be consistent with
                your company’s brand image, or help you create an entirely new
                corporate identity. By choosing MAXBURST to handle your creative
                needs, you’ll benefit from the constant quality and the ease of
                coordinating projects with a single vendor.
              </Typography>
              <Typography variant="subtitle1">
                Innovative & Cutting-Edge Technology
              </Typography>
              <Typography variant="body2">
                MAXBURST specializes in custom, interactive website design and
                development. We can design your website to be consistent with
                your company’s brand image, or help you create an entirely new
                corporate identity. By choosing MAXBURST to handle your creative
                needs, you’ll benefit from the constant quality and the ease of
                coordinating projects with a single vendor.
              </Typography>
              <Typography variant="subtitle1">
                Focused on Achieving Your Business Goals
              </Typography>
              <Typography variant="body2">
                MAXBURST specializes in custom, interactive website design and
                development. We can design your website to be consistent with
                your company’s brand image, or help you create an entirely new
                corporate identity. By choosing MAXBURST to handle your creative
                needs, you’ll benefit from the constant quality and the ease of
                coordinating projects with a single vendor.
              </Typography>
              <Typography variant="subtitle1">What We are best at</Typography>
              <Typography variant="body2">
                Website Design Digital Marketing Website Development Mobile App
                Development Social Media Management Search Engine Optimization
                Pay-per-click Management Conversion Rate Optimization
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={12} md={4}>
            <Paper>
              <Newsletter />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

const useStyles = makeStyles(theme => ({
  top: {
    marginBottom: 20
  },
  bottom: {
    padding: 20
  }
}));
