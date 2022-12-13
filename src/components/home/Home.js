import React from "react";
import Body from "./Body";
import Intro from "./Intro";

const Home = () => {
  return (
    <main className="w-full h-auto flex flex-col lg:justify-center md:px-8 lg:px-24 md:pt-0 pt-0 px-6">
      <Intro />
      <Body />
    </main>
  );
};

export default Home;
