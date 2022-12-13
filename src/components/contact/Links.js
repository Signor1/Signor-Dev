import { motion } from "framer-motion";
import React from "react";

const textVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const Links = () => {
  return (
    <section className="w-full md:py-12 py-2 relative flex flex-col items-center">
      <h1 className="absolute lg:top-4 top-8 left-0 md:top-8 lg:left-0 md:-left-3 font-playfair text-color2/50 lg:text-8xl md:text-5xl text-6xl -z-10">
        04.
      </h1>
      <motion.h1
        className="section-title text-center text-color1 tracking-wider md:text-4xl text-2xl font-raleway font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Get In Touch
      </motion.h1>
      <span className="section-subtitle text-center text-color2 text-md font-playfair block">
        Contact Me
      </span>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-12">
        <div className="flex flex-col border gap-2 text-color1 border-color1/50 transition-all duration-300 hover:bg-gray-800 lg:px-6 px-4 md:py-6 py-4 rounded-lg items-center justify-center">
          <i class="bx bx-map text-2xl font-light"></i>
          <h1 className="text-md font-raleway font-medium">Address</h1>
          <p className="text-xs font-playfair text-center">
            Anambra State, Nigeria.
          </p>
        </div>

        <div className="flex flex-col border gap-1 text-color1 border-color1/50 transition-all duration-300 hover:bg-gray-800 lg:px-6 px-4 md:py-6 py-4 rounded-lg items-center justify-center">
          <i class="bx bx-mail-send text-2xl font-light"></i>
          <h1 className="text-md font-raleway font-medium">Email</h1>
          <motion.a
            href="mailto:emmanuelomemgboji@gmail.com"
            title="Email"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-playfair"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Write Me <i class="uil uil-angle-double-right"></i>
          </motion.a>
        </div>
        <div className="flex flex-col border gap-1 text-color1 border-color1/50 transition-all duration-300 hover:bg-gray-800 lg:px-6 px-4 md:py-6 py-4 rounded-lg items-center justify-center">
          <i class="bx bxl-whatsapp text-2xl font-light"></i>
          <h1 className="text-md font-raleway font-medium">WhatsApp</h1>
          <motion.a
            href="https://wa.me/+2347069106259?text=Hi,%20I'm%20interested%20in%20your%20services"
            title="WhatsApp"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-playfair"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Inbox Me <i class="uil uil-angle-double-right"></i>
          </motion.a>
        </div>
        <div className="flex flex-col border gap-1 text-color1 border-color1/50 transition-all duration-300 hover:bg-gray-800 lg:px-6 px-4 md:py-6 py-4 rounded-lg items-center justify-center">
          <i class="bx bx-phone-call text-2xl font-light"></i>
          <h1 className="text-md font-raleway font-medium">Phone</h1>
          <motion.a
            href="tel:+2347069106259"
            title="Phone"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-playfair"
            whileHover={{ scale: 1.2, originX: 0, color: "#d8b53a" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Call Me <i class="uil uil-angle-double-right"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Links;
