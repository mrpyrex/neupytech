import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import Moment from "react-moment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
    maxWidth: "100%"
  },
  image: {
    width: 200,
    height: 200
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container className={classes.image}>
            <img className={classes.img} src={post.thumb} alt={post.title} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {post.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {post.content.length > 121
                    ? post.content.substring(0, 120) + "..."
                    : post.content}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  By {post.author.username} -{" "}
                  <Moment fromNow>{post.createdAt}</Moment>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Read more ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Post;
