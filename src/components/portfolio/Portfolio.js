import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const leftVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const rightVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const Portfolio = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <motion.h1
        className="section-title text-center text-color1 tracking-wider md:text-4xl text-2xl font-raleway font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Projects
      </motion.h1>
      <span className="section-subtitle text-center text-color2 text-md font-playfair block">
        Some Things I’ve Built
      </span>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* Newstown  */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Newstown  */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="newstown"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              NewsTown
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              An entertainment and news website design and built with reactjs,
              tailwindCSS and some other npms
            </p>
            <a
              href="https://newstown.vercel.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>

        {/* FILagos  */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FILagos  */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="fILagos"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              Founder's Institute
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              UI re-design using TailwindCSS & some Js plugins, enhancing the
              UX.
            </p>
            <a
              href="https://filagos.netlify.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>

        {/* Qblog */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Qblog */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="qblog"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              QBlog
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              QBlog is a news platform with a section for book preview, built &
              developed with tailwindCSS and reactjs.
            </p>
            <a
              href="https://qblogs.vercel.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>

        {/* Skybliss */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          {/* skybliss  */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="skybliss"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              SkyBliss
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              SkyBliss is an invoice calculator and receipt generator for easy
              and smooth business transaction which is also mobile friendly.
              Built with TypeScript, Bootstrap & vanillaCSS.
            </p>
            <a
              href="https://demoprint.netlify.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>

        {/* Geovisual */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          {/* geovisual */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="geovisual"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              Geovisual
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              A photographer's website/portfolio built HTML, vanillaCSS &
              Bootstrap
            </p>
            <a
              href="https://geovisuals.netlify.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>

        {/* brunoanderson */}
        <motion.div
          className="bg-color3 rounded-r-3xl py-4 grid lg:grid-cols-2 grid-cols-3 items-center gap-4"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          {/* brunoanderson */}
          <div
            className="h-40 lg:w-56 rounded-r-3xl bg-gray-800"
            id="brunoanderson"
          ></div>
          <div className="flex flex-col lg:col-span-1 col-span-2 gap-1 pr-3">
            <h3 className="text-left text-sm text-gray-900 font-playfair font-medium ">
              Featured Project
            </h3>
            <h1 className="text-left text-lg text-gray-900 font-semibold font-raleway">
              Bruno Anderson
            </h1>
            <p className="text-xs mb-4 font-raleway text-gray-900 font-medium">
              A simple portfolio of a UI/UX designer designed and built with
              HTML, SASS and AOS
            </p>
            <a
              href="https://designorui.netlify.app/"
              className="flex items-center font-playfair font-medium text-xs bg-gray-900 group transition-all duration-300 hover:text-gray-300 text-color3 px-4 py-0.5 md:py-1 rounded-r-lg self-start"
              target="_blank"
              rel="noreferrer"
            >
              View
              <i class="uil uil-arrow-right group-hover:ml-1 transition-all duration-300 text-lg"></i>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col justify-self-end md:mt-20 mt-12 justify-center items-center">
        <i class="uil uil-arrow-down text-color1 font-raleway text-lg animate-bounce"></i>
        <a
          href="https://github.com/Signor1"
          target="_blank"
          rel="noreferrer"
          className="hover:text-4xl transition-all duration-300 flex gap-1 items-center"
        >
          <i class="uil uil-mouse-alt text-xl text-color2"></i>
          <span className="text-color1 flex gap-1 items-center font-raleway text-sm">
            More on
            <i class="bx bxl-github"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
