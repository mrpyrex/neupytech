import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleImageUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "image");
      data.append("upload_preset", "jasminecake");
      data.append("cloud_name", "neupytech");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/neupytech/image/upload/",
        data
      );
      console.log(res.data.url);
      return res.data.url;
    } catch (error) {
      console.error("Error uploading file", error);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, createPost) => {
    event.preventDefault();
    setSubmitting(true);
    const uploadUrl = await handleImageUpload();
    createPost({ variables: { title, content, thumb: uploadUrl } });
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-8">
          <h1>Create A Post</h1>
          <Mutation
            mutation={CREATE_POST_MUTATION}
            onCompleted={data => {
              setSubmitting(false);
              setTitle("");
              setContent("");
              setFile("");
            }}
          >
            {(createPost, { loading, error }) => {
              if (error) return <div>error!!!</div>;
              return (
                <form onSubmit={event => handleSubmit(event, createPost)}>
                  <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      onChange={event => setTitle(event.target.value)}
                      value={title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Post Content</label>
                    <textarea
                      id="content"
                      className="form-control"
                      rows="5"
                      onChange={event => setContent(event.target.value)}
                      value={content}
                    ></textarea>
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="content">Post Content</label>
                    <CKEditor
                      id="content"
                      value={content}
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onChange={(event, editor) =>
                        setContent(event.target.value, editor)
                      }
                    />
                  </div> */}
                  <div className="custom-file my-2">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      required
                      accept="image/png, image/jpeg"
                      onChange={handleImageChange}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose photo
                    </label>
                    <p className="py-2 text-muted">{file && file.name}</p>
                  </div>
                  <button
                    disabled={
                      submitting || !title.trim() || !content.trim() || !file
                    }
                    type="submit"
                    className="btn btn-outline-primary btn-block my-2"
                  >
                    Submit
                  </button>
                </form>
              );
            }}
          </Mutation>
        </div>
        <div className="col-md-4">
          <h3>Post By</h3>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

const CREATE_POST_MUTATION = gql`
  mutation($title: String!, $content: String, $thumb: String!) {
    createPost(title: $title, content: $content, thumb: $thumb) {
      post {
        id
        title
        content
        thumb
        created_at
        slug
      }
    }
  }
`;
