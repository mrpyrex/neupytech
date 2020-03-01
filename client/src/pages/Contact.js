import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

const Contact = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Paper className={classes.root}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Name"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Phone"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Company"
                type="text"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                rows="5"
                multiline
                variant="outlined"
                fullWidth
                label="Project Details"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    marginTop: 20
  }
}));
