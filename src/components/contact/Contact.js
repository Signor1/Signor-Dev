import { motion } from "framer-motion";
import React from "react";
import Form from "./Form";
import Links from "./Links";

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

const Contact = () => {
  return (
    <motion.main
      className="w-full h-auto flex flex-col lg:justify-center md:px-8 lg:px-24 md:py-28 py-12 px-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Links />
      <Form />
    </motion.main>
  );
};

export default Contact;
