import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

const Quote = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        Need A Custom Website? Let's start with a free quote!
      </Typography>
      <Typography>
        Whatever your Conception is let's help you Succeed with our dedicated
        and up to date team of designers and marketers.
      </Typography>
      <Button className={classes.button} variant="outlined">
        <Link to="/contact">Request a quote</Link>
      </Button>
    </div>
  );
};

export default Quote;

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20
  },
  button: {
    padding: 10,
    marginTop: 20
  }
}));
