import React from "react";
import About from "./About";
import Services from "./Services";

const Container = () => {
  return (
    <main className="w-full h-auto flex flex-col lg:justify-center md:px-8 lg:px-24 md:py-24 py-12 px-6 relative">
      <About />
      <Services />
    </main>
  );
};

export default Container;
