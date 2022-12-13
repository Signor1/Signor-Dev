import React from "react";
import { motion } from "framer-motion";

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
      delay: 3,
    },
  },
};

const Stacks = () => {
  const firstStacks = ["HTML", "CSS", "SASS", "LESS"];
  const secondStacks = ["Bootstrap", "TailwindCSS", "JavaScript", "jQuery"];
  const thirdStacks = ["TypeScript", "React", "PHP", "MySQL"];
  return (
    <motion.div
      className="w-full grid grid-cols-3 md:px-4 px-1"
      variants={containerVariants}
    >
      <div className="flex flex-col gap-2 text-color1">
        {firstStacks.map((firstStack, index) => (
          <motion.p
            key={index}
            className="flex items-center gap-1"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i class="bx bxs-hand-right text-xs text-color2"></i>
            <span className="text-sm font-playfair">{firstStack}</span>
          </motion.p>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-color1">
        {secondStacks.map((secondStack, index) => (
          <motion.p
            key={index}
            className="flex items-center gap-1"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i class="bx bxs-hand-right text-xs text-color2"></i>
            <span className="text-sm font-playfair">{secondStack}</span>
          </motion.p>
        ))}
      </div>
      <div className="flex flex-col gap-2 text-color1">
        {thirdStacks.map((thirdStack, index) => (
          <motion.p
            key={index}
            className="flex items-center gap-1"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i class="bx bxs-hand-right text-xs text-color2"></i>
            <span className="text-sm font-playfair">{thirdStack}</span>
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default Stacks;
