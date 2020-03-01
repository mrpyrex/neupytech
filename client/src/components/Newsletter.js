import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";

const Newsletter = () => {
  return (
    <Paper>
      <form>
        <TextField
          variant="outlined"
          label="Newsletter"
          type="email"
          fullWidth
          size="small"
          placeholder="subscribe to our newsletter"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Newsletter;
