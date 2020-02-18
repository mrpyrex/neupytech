import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

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
      author {
        id
        username
        firstName
        lastName
      }
    }
  }
`;

class PostDetail extends Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <Query query={GET_POSTDETAIL_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <div>loading..</div>;
          if (error) return <div>error!!!</div>;

          const {
            title,
            thumb,
            createdAt,
            content,
            author,
            category
          } = data.post;
          return (
            <main id="post-detail" className="mt-4">
              <div className="container">
                <section className="mt-4">
                  <div className="row">
                    <div className="col-md-8 mb-4">
                      <h1 className="mb-4">{title}</h1>

                      <div className="card mb-4 wow fadeIn">
                        <img src={thumb} className="img-fluid" alt="" />
                      </div>
                      <div className="card mb-4 wow fadeIn">
                        <div className="card-body">
                          <p>{content}</p>
                        </div>
                      </div>
                      <Link
                        to="/blog"
                        type="button"
                        className="btn btn-primary mb-2"
                      >
                        Back
                      </Link>
                      <div className="card my-4 wow fadeIn">
                        <div className="card-header font-weight-bold">
                          <span className="mr-2">About author</span>
                          <span className="pull-right">
                            <a href="">
                              <i className="fab fa-facebook-f mr-2"></i>
                            </a>
                            <a href="">
                              <i className="fab fa-twitter mr-2"></i>
                            </a>
                            <a href="">
                              <i className="fab fa-instagram mr-2"></i>
                            </a>
                            <a href="">
                              <i className="fab fa-linkedin-in mr-2"></i>
                            </a>
                          </span>
                        </div>

                        <div className="card-body">
                          <div className="media d-block d-md-flex mt-3">
                            <img
                              className="d-flex mb-3 mx-auto z-depth-1"
                              src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
                              alt="Generic placeholder image"
                            />
                            <div className="media-body text-center text-md-left ml-md-3 ml-0">
                              <h5 className="mt-0 font-weight-bold">
                                {author.username}
                              </h5>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi, id est laborum et dolorum
                              fuga.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4"></div>
                  </div>
                </section>
              </div>
            </main>
          );
        }}
      </Query>
    );
  }
}

export default PostDetail;
