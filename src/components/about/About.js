import React from "react";
import { motion } from "framer-motion";
import Stacks from "./Stacks";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 1,
    },
  },
};

const textVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
};

const rotateVariants = {
  visible: {
    rotate: 360,
    transition: { ease: "linear", repeat: Infinity, duration: 10 },
  },
};

const About = () => {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="md:px-24 px-0 md:py-12 py-4 relative z-10">
        <h1 className="absolute lg:top-4 top-8 left-0 md:top-8 lg:left-0 md:-left-3 font-playfair text-color2/50 lg:text-8xl md:text-5xl text-6xl -z-10">
          02.
        </h1>
        <motion.h2
          className="text-center text-color1 tracking-wider md:text-4xl text-2xl font-raleway font-bold"
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <span className="section_subtitle text-center text-color2 text-md font-playfair block">
          My Introduction
        </span>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 md:mt-16 mt-12 items-center">
          <motion.div
            className="lg:w-80 w-56 rounded-3xl justify-self-center self-start relative before:content-[''] before:absolute lg:before:top-8 hover:lg:before:top-4 before:transition-all before:duration-500 before:-top-5 hover:before:-top-3 lg:before:-left-8 hover:lg:before:-left-4 before:-right-5 hover:before:-right-3 before:w-full before:h-full before:bg-gray-900 before:border before:border-color2 before:-z-10 before:rounded-3xl after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-color1/30 hover:after:w-0 after:transition-all after:duration-500 after:rounded-3xl after:overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={require("../../assets/img/20221120_164056.jpeg")}
              alt="Profile"
              className="w-full block rounded-3xl justify-self-center"
            />
          </motion.div>

          {/* about-data */}
          <div className="flex flex-col">
            {/* about-description */}
            <p className="text-justify tracking-wider mb-3 text-gray-300 font-raleway text-base">
              Hello! My name is Omemgboji N. Emmanuel and I delight in creating
              stuffs that exist on the internet. My interest in tech and web
              development precisely, was out of curiousity and quest in finding
              out what happens behind the scene. Started off with HTML & CSS and
              I learnt a lot in a bit to clone some sites.
            </p>
            <p className="text-justify mb-3 text-gray-300 font-raleway text-base">
              Fast-forward to today, I’ve had the privilege of working at an{" "}
              <a
                href="https://kodexng.com/"
                target="_blank"
                rel="noreferrer"
                className="text-color2"
              >
                ICT Academy
              </a>{" "}
              as an instructor, guiding and teaching students the rudiments of
              frontend web development. My main focus has ever remained;
              building accessible, inclusive products and digital experiences
              for a variety of clients.
            </p>
            <p className="text-justify mb-4 text-gray-300 font-raleway text-base">
              Here are a few technologies I’ve been working with recently:
            </p>
            <Stacks />
            <a
              href={require("../../assets/doc/EmmaNzube.pdf")}
              download="EmmaNzubeCV.pdf"
              className="inline-block mt-12 self-start text-base text-gray-900 font-bold font-playfair py-3 group px-5 transition-all duration-500 rounded-2xl hover:bg-gradient-to-l bg-gradient-to-r from-color1 to-color2 ring-2 ring-gray-200"
            >
              Download CV
              <i class="uil uil-file-alt group-hover:ml-1 transition-all duration-500"></i>
            </a>
          </div>
        </div>
      </section>

      <motion.i
        class="bx bx-code-alt absolute md:top-36 top-4 right-4 md:right-20 font-light font-raleway text-color2/30 md:text-5xl text-4xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-code-curly absolute md:top-56 top-36 left-24 md:left-20 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-code absolute md:top-1/2 top-96 right-4 md:right-32 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-git-commit absolute md:bottom-1/2 bottom-96 left-2 md:left-1/2 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-bracket absolute md:top-56 top-72 left-8 md:left-48 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-terminal absolute md:bottom-56 bottom-16 right-6 md:right-1/2 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-code-block absolute md:bottom-1/2 bottom-72 left-40 md:left-40 font-light font-raleway text-color2/30 text-3xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bx-command absolute md:bottom-60 bottom-1/2 left-1/2 md:left-96 font-light font-raleway text-color2/20 md:text-3xl text-6xl"
        variants={rotateVariants}
      ></motion.i>
      <motion.i
        class="bx bxl-git absolute md:top-56 top-4 left-4 md:left-56 font-light font-raleway text-color2/20 text-3xl"
        variants={rotateVariants}
      ></motion.i>
    </motion.div>
  );
};

export default About;
