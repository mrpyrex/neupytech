import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link to="/"> News</Link>
          </Typography>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
