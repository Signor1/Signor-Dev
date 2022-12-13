import React from "react";
import Qualification from "./Qualification";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";

const containerVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
      delay: 1,
    },
  },
};

const Container = () => {
  return (
    <motion.main
      id="portfolio"
      className="w-full h-auto flex flex-col lg:justify-center md:px-8 lg:px-24 md:py-28 py-12 px-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Qualification />
      <Portfolio />
    </motion.main>
  );
};

export default Container;
