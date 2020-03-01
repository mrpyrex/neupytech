import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          Neupytech Digital Agency
        </Grid>
        <Grid item xs={12} sm={6}>
          Neupytech Digital Agency
        </Grid>
        <Grid container xs={12} className={classes.root}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Grid>
        <Grid container>
          <p className={classes.paragraphText}>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 20
  },
  paragraphText: {
    margin: "auto"
  }
}));
