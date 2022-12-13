import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Front-end Designer",
    "Front-end Developer",
    "Backend Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 text-white">
      <h1
        className="md:text-4xl text-2xl font-extrabold font-playfair tracking-widest inline-block w-auto"
        id="myname"
      >
        Emma Nzube
      </h1>

      <h3
        className="h-6 md:text-md text-md border-r border-color2 pr-1 uppercase text-color3 font-raleway font-normal"
        data-rotate='[
    "Front-end Designer",
    "Front-end Developer",
    "Backend Developer",
  ]'
      >
        {text}
      </h3>
      <p className="max-w-md text-justify text-gray-300 text-base font-raleway tracking-wide md:mb-8 mb-5">
        Hi 👋 welcome!, I'm a competent web developer based in Nigeria. I build
        functional, scalable and interactive digital products. I'm passionate
        about cutting edge, pixel perfect, beautiful interfaces, well
        implemented UX.
      </p>

      <Link
        to="contact"
        className="inline-block text-base text-gray-900 font-bold font-playfair py-3 group px-5 transition-all duration-500 rounded-2xl hover:bg-gradient-to-l hover:shadow-md hover:shadow-color2 bg-gradient-to-r from-color3 to-color2 ring-2 ring-gray-200"
      >
        Say Hello
        <i class="uil uil-location-arrow relative group-hover:ml-1 transition-all duration-500"></i>
      </Link>
    </div>
  );
};

export default Data;
