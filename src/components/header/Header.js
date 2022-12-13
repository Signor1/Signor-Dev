import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <motion.header
      className="w-full md:h-20 h-14 fixed md:top-0 bottom-0 left-0 z-40 bg-gray-900 lg:px-24 md:px-8 px-6 transition-all duration-300 md:border-b border-t sm:border-b-0 lg:border-t-0 border-color1/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 120 }}
    >
      <nav className="md:h-20 h-14  flex justify-between items-center gap-4 w-full">
        <Link
          to="/"
          className="text-color1 flex items-center gap-1 font-bold font-playfair text-xl"
        >
          <Logo />
          <span className="text-xs uppercase font-raleway" id="dev">
            dev.
          </span>
        </Link>
        <div
          className={`fixed md:static w-full md:w-auto ${
            toggle ? "bottom-0" : "-bottom-full"
          } left-0 bg-gray-900 px-3 pt-8 pb-12 md:px-0 md:pt-0 md:pb-0 text-color1 rounded-t-3xl md:rounded-none ring-1 md:ring-0 ring-color1 transition-all duration-700 ease-in`}
        >
          <ul className="md:flex md:gap-8 md:items-center font-raleway grid grid-cols-4 gap-8">
            <li>
              <Link
                to="/"
                onClick={handleToggle}
                className={`flex flex-col w-auto items-center text-sm font-medium text-color1 transition-all duration-300 hover:text-color2  md:hover:text-color1 relative md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:right-0 md:before:h-[2px] md:before:w-0 md:hover:before:w-full  md:before:bg-gradient-to-r md:before:from-color1 md:before:to-color2 md:before:transition-all md:before:duration-300 md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:hover:after:w-1/2  md:after:bg-gradient-to-r md:after:from-color3 md:after:to-color2 md:after:transition-all md:after:duration-300 ${
                  location.pathname === "/"
                    ? "md:before:w-full md:after:w-1/2 text-color2 md:text-color1 "
                    : ""
                }`}
              >
                <i className="uil uil-estate md:hidden block md:text-base text-lg"></i>{" "}
                <span className="flex items-center gap-1">
                  <i className="text-color2 hidden md:inline-block">01.</i>Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={handleToggle}
                className={`flex flex-col w-auto items-center text-sm font-medium text-color1 transition-all duration-300 hover:text-color2 md:hover:text-color1 relative md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:right-0 md:before:h-[2px] md:before:w-0 md:hover:before:w-full md:before:bg-gradient-to-r md:before:from-color1 md:before:to-color2 md:before:transition-all md:before:duration-300 md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:hover:after:w-1/2 md:after:bg-gradient-to-r md:after:from-color3 md:after:to-color2 md:after:transition-all md:after:duration-300 ${
                  location.pathname === "/about"
                    ? "md:before:w-full md:after:w-1/2 text-color2 md:text-color1 "
                    : ""
                }`}
              >
                <i className="uil uil-user md:hidden block md:text-base text-lg"></i>{" "}
                <span className="flex items-center gap-1">
                  <i className="text-color2 hidden md:inline-block">02.</i>About
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="portfolio"
                onClick={handleToggle}
                className={`flex flex-col w-auto items-center text-sm font-medium text-color1 transition-all duration-300 hover:text-color2  md:hover:text-color1  relative md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:right-0 md:before:h-[2px] md:before:w-0 md:hover:before:w-full  md:before:bg-gradient-to-r md:before:from-color1 md:before:to-color2 md:before:transition-all md:before:duration-300 md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:hover:after:w-1/2 md:after:bg-gradient-to-r md:after:from-color3 md:after:to-color2 md:after:transition-all md:after:duration-300 ${
                  location.pathname === "/portfolio"
                    ? "md:before:w-full md:after:w-1/2 text-color2 md:text-color1 "
                    : ""
                }`}
              >
                <i className="uil uil-scenery md:hidden block md:text-base text-lg"></i>{" "}
                <span className="flex items-center gap-1">
                  <i className="text-color2 hidden md:inline-block">03.</i>
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={handleToggle}
                className={`flex flex-col w-auto items-center text-sm font-medium text-color1 transition-all duration-300 hover:text-color2  md:hover:text-color1 relative md:before:content-[''] md:before:absolute md:before:bottom-0 md:before:right-0 md:before:h-[2px] md:before:w-0 md:hover:before:w-full md:before:bg-gradient-to-r md:before:from-color1 md:before:to-color2 md:before:transition-all md:before:duration-300 md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:hover:after:w-1/2 md:after:bg-gradient-to-r md:after:from-color3 md:after:to-color2 md:after:transition-all md:after:duration-300 ${
                  location.pathname === "/contact"
                    ? "md:before:w-full md:after:w-1/2 text-color2 md:text-color1 "
                    : ""
                }`}
              >
                <i className="uil uil-message md:hidden block md:text-base text-lg"></i>{" "}
                <span className="flex items-center gap-1">
                  <i className="text-color2 hidden md:inline-block">04.</i>
                  Contact
                </span>
              </Link>
            </li>
            <li className="col-span-2">
              <a
                href={require("../../assets/doc/EmmaNzube.pdf")}
                onClick={handleToggle}
                download="OmemgbojiEmmanuelCV"
                className="md:flex ml-4 md:ml-0 inline-block flex-col w-auto items-center text-sm font-medium text-color1 border border-color1 transition-all duration-300 hover:text-color2 hover:border-color2 tracking-wider px-3 py-2 rounded-md"
              >
                Resume´
              </a>
            </li>
          </ul>

          {/* icons for nav close  */}
          <i
            class="uil uil-times md:hidden block absolute right-5 bottom-2 cursor-pointer text-xl transition duration-200 hover:text-color2"
            onClick={handleToggle}
          ></i>
        </div>

        {/* nav toggle icon  */}
        <div
          className="text-color1 font-medium md:hidden block cursor-pointer"
          onClick={handleToggle}
        >
          <i class="uil uil-apps text-xl"></i>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
