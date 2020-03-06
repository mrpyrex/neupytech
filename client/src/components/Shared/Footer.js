import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import logo from "../../img/logo.jpg";

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <img src={logo} className={classes.logo} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button color="inherit">
            <Link to="/blog">Blog</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about-us">About Us</Link>
          </Button>
          <Button color="inherit">
            <Link to="/our-works">Portfolio</Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact">Contact</Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Grid>
        <Grid item xs={12} sm={12}>
          <p>
            {" "}
            {new Date().getFullYear()} &copy; Neupytech Digital Agency. All
            Rights Reserved | <Link to="#">Privacy Policy</Link> |{" "}
            <Link to="#">Terms</Link> | <Link to="#">Support</Link>
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    marginTop: 20
  },
  logo: {
    height: 120,
    width: "auto",
    borderRadius: "50%"
  }
}));
