import React, { Component, Fragment } from "react";
import { Container, Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Post from "./Post";
import Loading from "../Shared/Loading";

export class PostList extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <h3>Latest Posts</h3>
            <Query query={GET_POSTS_QUERY}>
              {({ data, loading, error }) => {
                if (loading) return <Loading />;
                if (error) return <h4>error!!!</h4>;

                return (
                  <Fragment>
                    {data.posts.map(post => (
                      <Link to={`/blog/${post.id}`}>
                        <Post key={post.id} post={post} />
                      </Link>
                    ))}
                  </Fragment>
                );
              }}
            </Query>
          </Grid>
          <Grid item md={4} sm={12}>
            Aside
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default PostList;

const GET_POSTS_QUERY = gql`
  query PostsQuery {
    posts {
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
