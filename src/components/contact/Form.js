import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
//for comment validation
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const textVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1, delay: 2 },
  },
};

const alertVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { ease: "ease", duration: 1 },
  },
};

const rotateVariants = {
  visible: {
    rotate: 360,
    transition: { ease: "linear", repeat: Infinity, duration: 1 },
  },
};

const MessageForm = () => {
  // states for alert and button element content
  const [send, setSend] = useState(false);
  const [alert, setAlert] = useState(false);

  //initial form values
  const initialValues = {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  };
  //form validation using schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is required"),
    number: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Message is required"),
  }); //validation using yup method

  // onsubmit form event
  const onSubmit = (values, { resetForm }) => {
    const { name, email, number, subject, message } = values;

    // setting the button text to sending
    setSend(true);

    const emailContent = {
      from_name: name,
      user_email: email,
      user_number: number,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "signor_portfolio",
        "template_cjerd4l",
        emailContent,
        "w8eANHd1D5O0ml1C7"
      )
      .then(
        (result) => {
          setSend(false);
          console.log(result.text);
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm({ values: "" });
    //for fading out the alert after 2s
  };

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <motion.h1
        className="section-title text-center text-color1 tracking-wider md:text-4xl text-2xl font-raleway font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Message Me
      </motion.h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        <Form className="md:w-3/4 w-full mt-6">
          <div className="grid bg-gray-800 overflow-x-hidden w-full md:grid-cols-2 md:gap-8 gap-6 border border-color1/50 py-8 md:px-12 px-6 rounded-lg">
            <div class="relative">
              <Field
                type="text"
                id="name"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-color1 bg-transparent rounded-lg border border-color1/50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                name="name"
              />
              <label
                htmlFor="name"
                class="absolute text-sm text-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Name
              </label>
              <ErrorMessage name="name">
                {(errorMsg) => (
                  <div className="pt-0 ml-2 text-red-500 text-xs font-raleway font-light flex items-center">
                    {errorMsg}
                    <i class="uil uil-exclamation text-2xl"></i>
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div class="relative">
              <Field
                type="text"
                id="email"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-color1 bg-transparent rounded-lg border border-color1/50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                name="email"
              />
              <label
                htmlFor="email"
                class="absolute text-sm text-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
              <ErrorMessage name="email">
                {(errorMsg) => (
                  <div className="pt-0 ml-2 text-red-500 text-xs font-raleway font-light flex items-center">
                    {errorMsg}
                    <i class="uil uil-exclamation text-2xl"></i>
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div class="relative">
              <Field
                type="number"
                id="number"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-color1 bg-transparent rounded-lg border border-color1/50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                name="number"
              />
              <label
                htmlFor="number"
                class="absolute text-sm text-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Phone Number
              </label>
              <ErrorMessage name="number">
                {(errorMsg) => (
                  <div className="pt-0 ml-2 text-red-500 text-xs font-raleway font-light flex items-center">
                    {errorMsg}
                    <i class="uil uil-exclamation text-2xl"></i>
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div class="relative">
              <Field
                type="text"
                id="subject"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-color1 bg-transparent rounded-lg border border-color1/50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                name="subject"
              />
              <label
                htmlFor="subject"
                class="absolute text-sm text-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Subject
              </label>
              <ErrorMessage name="subject">
                {(errorMsg) => (
                  <div className="pt-0 ml-2 text-red-500 text-xs font-raleway font-light flex items-center">
                    {errorMsg}
                    <i class="uil uil-exclamation text-2xl"></i>
                  </div>
                )}
              </ErrorMessage>
            </div>

            <div class="relative md:col-span-2">
              <Field
                as="textarea"
                id="message"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-color1 bg-transparent rounded-lg border border-color1/50 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                name="message"
              />
              <label
                htmlFor="message"
                class="absolute text-sm text-color1 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Message
              </label>
              <ErrorMessage name="message">
                {(errorMsg) => (
                  <div className="pt-0 ml-2 text-red-500 text-xs font-raleway font-light flex items-center">
                    {errorMsg}
                    <i class="uil uil-exclamation text-2xl"></i>
                  </div>
                )}
              </ErrorMessage>
            </div>
            {/* Alert message  */}

            {alert && (
              <motion.div
                className="md:col-span-2 flex border-b-4 border-color1/50 items-center gap-1 py-3 px-2 text-color1 bg-gray-900"
                variants={alertVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <i class="bx bxs-badge-check"></i>
                <p className="font-light font-playfair md:text-sm text-xs">
                  Your message was sent successfully! You will get a reply soon.
                </p>
              </motion.div>
            )}

            <div className="md:col-span-2 md:mt-6 mt-2 flex justify-center items-center">
              <button
                type="submit"
                className="flex justify-center items-center gap-0 bg-color1 font-raleway px-8 uppercase transition-all duration-500 hover:bg-gradient-to-r hover:from-color1 hover:to-color2 font-medium rounded-lg group text-base py-2 text-gray-900"
              >
                {send ? (
                  <span className="flex items-center gap-1">
                    <motion.i
                      class="uil uil-spinner text-lg"
                      variants={rotateVariants}
                      animate="visible"
                    ></motion.i>
                    Sending...
                  </span>
                ) : (
                  <span>
                    Submit
                    <i class="uil uil-arrow-up-right transition-all duration-500 group-hover:ml-1 text-xl"></i>
                  </span>
                )}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default MessageForm;
