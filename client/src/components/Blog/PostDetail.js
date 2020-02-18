import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Grid, Container, Paper, Card } from "@material-ui/core";
import Moment from "react-moment";
import Loading from "../Shared/Loading";

// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   EmailShareButton,
//   FacebookShareButton,
//   LinkedinShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   TwitterShareButton,
//   WhatsappShareButton
// } from "react-share";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

export class PostDetail extends Component {
  render() {
    let { id } = this.props.match.params;

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
          </Grid>
        </Grid>
      </Container>
    );
  }
}

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
