import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Post = ({
  post: { title, thumb, createdAt, content, author, id, category }
}) => {
  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-success">
          {category.catTitle}
        </strong>
        <h3 className="my-2">{title}</h3>
        <div className="mb-1 text-muted">
          Posted <Moment fromNow>{createdAt}</Moment> by{" "}
          <strong>{author.username}</strong>
        </div>
        <p className="mb-auto">
          {content.length > 121 ? content.substring(0, 120) + "..." : content}
        </p>
        <Link to={`/post/${id}`} className="stretched-link my-4">
          Continue reading
        </Link>
      </div>
      <div className="col-auto d-lg-block">
        <img src={thumb} alt={title} />
      </div>
    </div>
  );
};

export default Post;
