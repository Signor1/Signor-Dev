import React, { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const educationVariants = {
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
      delay: 0.5,
    },
  },
};

const experienceVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 0.5,
    },
  },
};

const Qualification = () => {
  const [show, setShow] = useState(false);

  const handleSwitch = () => {
    setShow(!show);
  };
  return (
    <section className="w-full flex flex-col relative items-center">
      <h1 className="absolute lg:top-4 top-8 left-0 md:top-8 lg:left-0 md:-left-3 font-playfair text-color2/50 lg:text-8xl md:text-5xl text-6xl -z-10">
        03.
      </h1>
      <motion.h1
        className="section-title text-center text-color1 tracking-wider md:text-4xl text-2xl font-raleway font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Qualifications
      </motion.h1>
      <span className="section-subtitle text-center text-color2 text-md font-playfair block">
        My Personal Journey
      </span>

      <div className="grid grid-cols-2 mt-12 mb-6 w-72 ring-1 ring-color2 rounded-lg">
        <div
          className={`rounded-lg py-1 px-3 ${
            !show
              ? "bg-gradient-to-tr from-color3 to-color1 text-gray-900"
              : "text-color2"
          }  text-md flex items-center transition-all duration-700 gap-1 justify-center font-medium font-raleway cursor-pointer`}
          onClick={handleSwitch}
        >
          <i className="uil uil-graduation-cap text-xl"></i>
          Education
        </div>

        <div
          className={`rounded-lg text-md flex items-center gap-1 justify-center font-medium ${
            show
              ? "bg-gradient-to-tr from-color3 to-color1 text-gray-900"
              : "text-color2"
          }  font-raleway transition-all duration-700 cursor-pointer`}
          onClick={handleSwitch}
        >
          <i className="uil uil-briefcase-alt text-xl"></i>
          Experience
        </div>
      </div>

      {!show && (
        <motion.div
          className="lg:w-1/2 md:w-3/4 w-full"
          variants={educationVariants}
          initial="hidden"
          animate="visible"
        >
          <ol className="relative border-l border-color1">
            <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-color3 rounded-full mt-1.5 -left-2"></div>
              <time className="mb-1 pt-2 text-sm font-normal leading-none text-color3 font-raleway flex items-center gap-1">
                <i className="uil uil-calendar-alt"></i>
                2014 - 2018
              </time>
              <h3 className="text-md font-raleway font-semibold text-color3 mt-2 mb-1">
                Bachelor of Art
              </h3>
              <h1 className="text-lg font-playfair font-semibold text-color1">
                Imo State University
              </h1>
              <p className="mb-4 text-base font-raleway font-normal text-gray-300">
                Studied Philosophy and graduated with high honors.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-color3 rounded-full mt-1.5 -left-2"></div>
              <time className="mb-1 pt-2 text-sm font-normal leading-none text-color3 font-raleway flex items-center gap-1">
                <i className="uil uil-calendar-alt"></i>
                2020 - 2021
              </time>
              <h3 className="text-md font-raleway font-semibold text-color3 mt-2 mb-1">
                Web Development
              </h3>
              <h1 className="text-lg font-playfair font-semibold text-color1">
                Digital Dreams ICT Academy
              </h1>
              <p className="mb-4 text-base font-raleway font-normal text-gray-300">
                Learnt full stack web development and obtained a professional
                certificate.
              </p>
            </li>
          </ol>
        </motion.div>
      )}

      {show && (
        <motion.div
          className="lg:w-1/2 md:w-3/4 w-full"
          variants={experienceVariants}
          initial="hidden"
          animate="visible"
        >
          <ol className="relative border-l border-color1">
            <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-color3 rounded-full mt-1.5 -left-2"></div>
              <time className="mb-1 pt-2 text-sm font-normal leading-none text-color3 font-raleway flex items-center gap-1">
                <i className="uil uil-calendar-alt"></i>
                2021 - Present
              </time>
              <h3 className="text-md font-raleway font-semibold text-color3 mt-2 mb-1">
                Front-End Instructor/Teacher
              </h3>
              <h1 className="text-lg font-playfair font-semibold text-color1">
                Kodex Limited - ICT Academy
              </h1>
              <p className="mb-4 text-base font-raleway font-normal text-gray-300">
                Front-end Instructor at Kodex Limited. Informing and guiding
                students in learning scalable and responsives web UI.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-4 h-4 bg-color3 rounded-full mt-1.5 -left-2"></div>
              <time className="mb-1 pt-2 text-sm font-normal leading-none text-color3 font-raleway flex items-center gap-1">
                <i className="uil uil-calendar-alt"></i>
                2022
              </time>
              <h3 className="text-md font-raleway font-semibold text-color3 mt-2 mb-1">
                Web Development
              </h3>
              <h1 className="text-lg font-playfair font-semibold text-color1">
                Founder's Institute, Lagos.
              </h1>
              <p className="mb-4 text-base font-raleway font-normal text-gray-300">
                I redesigned the user interface of the website of Founder's
                Institute.
              </p>
            </li>
          </ol>
        </motion.div>
      )}
    </section>
  );
};

export default Qualification;
