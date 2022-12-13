import React from "react";
import { motion } from "framer-motion";

const Social = () => {
  return (
    // framer-motion to be used for hover effect
    <div className="grid gap-4">
      <motion.a
        href="https://twitter.com/OneSignor?t=xTu8ujiP_M3nibDoFjsUUA&s=09"
        className="text-lg text-color1"
        target="_blank"
        rel="noreferrer"
        title="Twitter"
        whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <i class="uil uil-twitter-alt"></i>
      </motion.a>
      <motion.a
        href="https://github.com/Signor1"
        className="text-lg text-color1"
        target="_blank"
        rel="noreferrer"
        title="Github"
        whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <i class="uil uil-github-alt"></i>
      </motion.a>
      <motion.a
        href="https://wa.me/+2347069106259?text=Hi,%20I'm%20interested%20in%20your%20services"
        className="text-lg text-color1"
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
        whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <i class="uil uil-whatsapp"></i>
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/emmanuel-omemgboji-4b92b3140"
        className="text-lg text-color1"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
        whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <i class="uil uil-linkedin-alt"></i>
      </motion.a>
    </div>
  );
};

export default Social;
