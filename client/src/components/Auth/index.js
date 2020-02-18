import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default () => {
  const [newUser, setNewUser] = useState(true);
  return newUser ? (
    <Register setNewUser={setNewUser} />
  ) : (
    <Login setNewUser={setNewUser} />
  );
};
