import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="h-screen w-full bg-gray-900" id="preloaderWrapper">
      <small className="text-color1 font-raleway font-medium">Read.Me</small>
      <div className="book">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
