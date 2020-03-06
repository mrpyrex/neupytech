import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link, useParams } from "react-router-dom";
import { Grid, Container, Paper, Card, IconButton } from "@material-ui/core";
import Moment from "react-moment";
import Loading from "../Shared/Loading";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";

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

const PostDetail = post => {
  let { id } = useParams();
  console.log(id);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={8}>
          <Query query={GET_POSTDETAIL_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
              if (loading) return <Loading />;
              if (error) return <div>error!!!</div>;

              const { title, thumb, createdAt, content, author } = data.post;

              return (
                <div>
                  <h3>{title}</h3>

                  <img src={thumb} alt={title} />
                  <p>
                    <small>
                      <Moment fromNow>{createdAt}</Moment>
                    </small>
                  </p>
                  <Paper>{content}</Paper>

                  <Card>{author.username}</Card>
                </div>
              );
            }}
          </Query>
          <Grid item>
            <IconButton>
              <Link to={`/blog/${id}/`}>
                <EditIcon />
              </Link>
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostDetail;

const GET_POSTDETAIL_QUERY = gql`
  query PostDetailQuery($id: Int!) {
    post(id: $id) {
      id
      title
      thumb
      createdAt
      content
      category {
        id
        catTitle
      }
      published
      featured
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;
