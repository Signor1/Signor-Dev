import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [year]);

  return (
    <div className="w-full bg-gray-800 mb-14 md:mb-0 flex md:py-8 py-4 justify-center items-center">
      <p className="md:text-xs text-[0.6rem] flex items-center gap-2 text-color1 font-playfair font-light">
        Designed & Built By Signor Emma Nzube
        <span className="flex items-center">
          <i class="bx bx-copyright"></i>
          {year}. All Rights Reserved.
        </span>
      </p>
    </div>
  );
};

export default Footer;
