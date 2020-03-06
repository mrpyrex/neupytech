import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { Container, Button } from "@material-ui/core";

import pic1 from "../img/pic1.jpg";

const useStyles = makeStyles(theme => ({
  showcase: {
    position: "relative",
    backgroundImage: `url(${pic1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  button: {
    marginTop: 20,
    textDecoration: "none"
  }
}));

const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.showcase}>
      <div className={classes.overlay} />
      <Typography component="h1" variant="h1" color="inherit">
        Conceive. Succeed
      </Typography>
      <Typography variant="body1" color="inherit" paragraph>
        We help companies build powerful custom software that enables them to
        innovate and grow their businesses. Powerful websites, web apps, and
        interfaces that drive engagement, solve problems, and delight users.
      </Typography>
      <Button className={classes.button} variant="outlined">
        {" "}
        <Link to="/contact">Request a quote</Link>{" "}
      </Button>
    </Container>
  );
};

export default Jumbotron;
