import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import withRoot from "./withRoot";
import Navbar from "./components/Shared/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import CreatePost from "./components/Blog/CreatePost";
import PostList from "./components/Blog/PostList";
import PostDetail from "./components/Blog/PostDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-post" component={CreatePost} />
        <Route exact path="/blog/:id" component={PostDetail} />
        <Route path="/blog" component={PostList} />
      </Switch>
    </Router>
  );
}

export default withRoot(App);
