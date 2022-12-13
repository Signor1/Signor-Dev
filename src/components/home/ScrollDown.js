import React from "react";
import { Link } from "react-router-dom";

const ScrollDown = ({ link, linkName }) => {
  return (
    //   framer motion to be used here
    <div className="hidden md:flex flex-col justify-self-center justify-center items-center">
      <i class="uil uil-arrow-down text-color1 font-raleway text-lg animate-bounce"></i>
      <Link
        to={link}
        className="hover:text-4xl transition-all duration-300 flex gap-1 items-center"
      >
        <i class="uil uil-mouse-alt text-3xl text-color2"></i>
        <span className="text-color1 font-raleway text-sm">{linkName}</span>
      </Link>
    </div>
  );
};

export default ScrollDown;
