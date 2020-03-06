import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import "./App.css";

import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./pages/Home";
import CreatePost from "./components/Blog/CreatePost";
import PostList from "./components/Blog/PostList";
import PostDetail from "./components/Blog/PostDetail";
import Webdev from "./services/Webdev";
import Mobiledev from "./services/Mobiledev";
import Digitalmarket from "./services/Digitalmarket";
import Socialmarket from "./services/Socialmarket";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={About} />
          <Route path="/create-post" component={CreatePost} />
          <Route exact path="/blog/:id" component={PostDetail} />
          <Route exact path="/our-works" component={Portfolio} />
          <Route path="/blog" component={PostList} />
          <Route exact path="/services/web-dev-services" component={Webdev} />
          <Route path="/services/mobile-app-services" component={Mobiledev} />
          <Route
            path="/services/digital-marketing-services"
            component={Digitalmarket}
          />
          <Route
            path="/services/social-media-marketing-services"
            component={Socialmarket}
          />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
