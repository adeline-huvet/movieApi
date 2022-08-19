import React from "react";
import LocalMeteo from "../components/LocalMeteo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <LocalMeteo />
    </div>
  );
};

export default Home;
