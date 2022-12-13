import React from "react";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 1.5,
    },
  },
};

const Body = () => {
  return (
    <motion.section
      className="w-full lg:h-screen md:h-[600px] h-screen flex justify-center items-center relative z-10"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="absolute lg:top-8 top-4 left-0 md:top-4 lg:left-0 md:-left-3 font-playfair text-color2/50 lg:text-8xl md:text-5xl text-6xl -z-10">
        01.
      </h1>
      <div className="grid md:gap-20 gap-16">
        <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-12 lg:gap-16 md:gap-12 gap-8 items-center">
          <Social />
          <div className="lg:col-span-3 md:col-span-5 col-span-2 md:order-3 order-2 flex justify-center items-center ">
            <div
              className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 contrast-125 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-color1/30 hover:before:w-0 before:transition-all before:duration-500 overflow-hidden  transition-all duration-500 md:cursor-pointer justify-self-center"
              id="hero"
            ></div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-3 md:order-2 order-3  items-center">
            <Data />
          </div>
        </div>
        <ScrollDown link="/about" linkName="About Me" />
      </div>
    </motion.section>
  );
};

export default Body;
