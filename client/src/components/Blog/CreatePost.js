import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import CKEditor from "ckeditor4-react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Input,
  TextField,
  Container,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const CreatePost = () => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create A Post
        </Typography>
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
              <form
                className={classes.form}
                onSubmit={event => handleSubmit(event, createPost)}
              >
                <TextField
                  autoFocus
                  label="Title"
                  type="text"
                  id="title"
                  onChange={event => setTitle(event.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="title"
                  autoComplete="title"
                />

                <CKEditor
                  type="classic"
                  data={content}
                  onChange={(event, editor) => {
                    const data = event.editor.getData();
                    setContent(data);
                  }}
                  config={{
                    autoParagraph: false,
                    extraPlugins: "filebrowser",
                    uploadPreset: "jasminecake",
                    filebrowserUploadUrl:
                      "https://api.cloudinary.com/v1_1/neupytech/image/upload/",
                    uploadUrl:
                      "https://api.cloudinary.com/v1_1/neupytech/image/upload/"
                  }}
                />

                {/* <TextField
                  multiline
                  rows="5"
                  margin="normal"
                  required
                  fullWidth
                  name="content"
                  label="Content"
                  type="text"
                  id="content"
                  onChange={event => setContent(event.target.value)}
                /> */}

                <Input
                  type="file"
                  fullWidth
                  id="image"
                  required
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={
                    submitting || !title.trim() || !content.trim() || !file
                  }
                >
                  {loading ? "Submitting ..." : "Submit"}
                </Button>
              </form>
            );
          }}
        </Mutation>
      </div>
    </Container>
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
        createdAt
        slug
      }
    }
  }
`;
