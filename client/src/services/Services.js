import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";

import bullhorn from "../img/bullhorn.svg";
import webdev from "../img/webdev.svg";
import mobiledev from "../img/mobiledev.svg";
import email from "../img/email.svg";

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345
  // },
  media: {
    padding: 20,
    height: 140
  },
  titleText: {
    margin: "auto"
  }
});

const Services = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography className={classes.titleText} variant="h3">
        Services
      </Typography>
      <div></div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardActionArea>
              <img src={webdev} className={classes.media} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/services/web-dev-services">Learn More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardActionArea>
              <img src={mobiledev} className={classes.media} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mobile Apps
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/services/mobile-app-services">Learn More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardActionArea>
              <img src={email} className={classes.media} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Digital Marketing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/services/digital-marketing-services">
                  Learn More
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardActionArea>
              <img src={bullhorn} className={classes.media} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Social Media Marketing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/services/social-media-marketing-services">
                  Learn More
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
