import React, { Component, Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Post from "./Post";

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
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;

class PostList extends Component {
  render() {
    return (
      <div id="blog" className="container">
        <h3 className="display-3">Latest Blog Posts</h3>
        <div className="row">
          <Query query={GET_POSTS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <h4>loading...</h4>;
              if (error) return <h4>error!!!</h4>;

              return (
                <Fragment>
                  {data.posts.map(post => (
                    <div className="col-md-8">
                      <Post key={post.id} post={post} />
                    </div>
                  ))}
                </Fragment>
              );
            }}
          </Query>
          <div className="col-md-4">Side Bar</div>
        </div>
      </div>
    );
  }
}

export default PostList;
