import React from "react";
import { ApolloConsumer } from "react-apollo";
import withStyles from "@material-ui/core/styles/withStyles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Logout = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Button onClick={() => handleSignout(client)}>
          <Typography variant="body1" color="secondary">
            Signout
          </Typography>
          <ExitToApp />
        </Button>
      )}
    </ApolloConsumer>
  );
};

export default Logout;
