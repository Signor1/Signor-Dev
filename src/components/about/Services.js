import { motion } from "framer-motion";
import React from "react";
import ScrollDown from "../home/ScrollDown";

const rotateVariants = {
  visible: {
    rotate: 360,
    transition: { ease: "linear", repeat: Infinity, duration: 10 },
  },
};

const Services = () => {
  return (
    <section className="services relative w-full md:pt-20 pt-12">
      <h1 className="section-title text-center text-color1 tracking-wider md:text-4xl text-3xl font-raleway font-bold">
        Services
      </h1>
      <span className="section-subtitle text-center text-color2 text-md font-playfair block">
        What I Offer
      </span>
      {/* services-container */}
      <div className="grid md:grid-cols-2 my-12 gap-12 md:h-96 h-auto items-start">
        <div className="flex flex-col px-6 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-full before:bg-color1/20 ">
          <i class="uil uil-grid block md:text-2xl text-lg text-color1"></i>
          <h3 className="md:text-4xl text-3xl font-playfair mb-4 font-medium text-color1">
            Design
          </h3>
          <p className="text-gray-300 md:text-base text-sm font-raleway font-light md:text-justify text-left tracking-wide">
            I'm not a typical designer positioned behind an Illustrator artboard
            adjusting pixels, but I design. Immersed in stylesheets tweaking
            font sizes and contemplating layouts is where you'll find me. I'm
            committed to creating fluent user experiences while staying
            fashionable.
          </p>
        </div>
        <div className="flex flex-col px-6 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-full before:bg-color1/20 md:self-end">
          <i class="uil uil-arrow block md:text-2xl text-lg text-color1"></i>
          <h3 className="md:text-4xl text-3xl font-playfair mb-4 font-medium text-color1">
            Engineering
          </h3>
          <p className="text-gray-300 md:text-base text-sm font-raleway font-light md:text-justify text-left tracking-wide">
            In building websites & web Apps, I'm equipped with just the right
            tools, and can absolutely function independently of them to deliver
            fast, resilient solutions optimized for scale — performance and
            scalabilty are priorities on my radar.
          </p>
        </div>
      </div>
      <ScrollDown link="/portfolio" linkName="Portfolio" />

      <motion.i
        class="bx bxs-shapes md:text-9xl text-7xl text-color1/20 font-light font-raleway absolute md:right-20 right-10 top-40 md:top-40"
        variants={rotateVariants}
        animate="visible"
      ></motion.i>

      <motion.i
        class="bx bxs-component md:text-9xl text-9xl text-color1/20 font-light font-raleway absolute left-20 bottom-20"
        variants={rotateVariants}
        animate="visible"
      ></motion.i>
      <motion.i
        class="bx bx-braille md:text-9xl text-6xl text-color1/20 font-light font-raleway absolute md:right-20 right-8 md:bottom-20 bottom-48"
        variants={rotateVariants}
        animate="visible"
      ></motion.i>
      <motion.i
        class="bx bx-border-none md:text-9xl text-5xl text-color1/20 font-light font-raleway absolute md:left-20 left-4 top-20 md:top-20"
        variants={rotateVariants}
        animate="visible"
      ></motion.i>
    </section>
  );
};

export default Services;
