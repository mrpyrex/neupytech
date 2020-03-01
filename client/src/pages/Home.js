import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import Services from "../services/Services";
import Quote from "../components/Quote";

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      <Services />
      <Quote />
    </Fragment>
  );
};

export default Home;
