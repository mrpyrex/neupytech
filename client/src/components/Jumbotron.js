import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Container, Button } from "@material-ui/core";

import pic1 from "../img/pic1.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    smarginBottom: theme.spacing(4),
    backgroundImage: `url(${pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: 500
    // backgroundPosition: "fixed"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",

    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

const Jumbotron = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.mainFeaturedPost} square>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item className={classes.mainFeaturedPostContent}>
            <div>
              <Typography component="h1" variant="h3" color="inherit">
                Conceive. Succeed
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                We help companies build powerful custom software that enables
                them to innovate and grow their businesses. Powerful websites,
                web apps, and interfaces that drive engagement, solve problems,
                and delight users.
              </Typography>
              <Button variant="outlined">
                {" "}
                <Link to="/contact">Request a quote</Link>{" "}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Jumbotron;
