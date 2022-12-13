import React from "react";
import IntroImage from "../../assets/img/header-img.svg";
import { motion } from "framer-motion";
import Stars from "./Stars";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
  },
};
const textVariants = {
  hidden: {
    x: "-100vw",
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
const ImageVariants = {
  visible: {
    y: [80, -80],
    transition: { yoyo: Infinity, duration: 10 },
  },
};

const Intro = () => {
  return (
    <motion.section
      className="w-full lg:h-screen md:h-[600px]  h-screen relative z-10 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid gap-24 relative h-full w-full pb-20 md:pb-0">
        <div className="grid md:grid-cols-3 gap-0 md:gap-0 items-center">
          <div className="md:col-span-2 order-2 md:order-1">
            <motion.h1
              className="text-gray-300 lg:text-8xl text-5xl md:text-6xl px-0 md:px-4 font-semibold tracking-wide md:tracking-normal"
              variants={textVariants}
            >
              Turning <span id="ideas">ideas</span> into real life{" "}
              <span className="" id="dproduct">
                digital products.
              </span>
            </motion.h1>
          </div>
          <div className="order-1 md:order-2">
            <motion.img
              src={IntroImage}
              alt="Astronaut"
              className="md:w-72 w-56 hue-rotate-180"
              variants={ImageVariants}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Stars />
      </div>
    </motion.section>
  );
};

export default Intro;
