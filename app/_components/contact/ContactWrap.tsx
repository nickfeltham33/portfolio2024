"use client";
import ContactFormSanity from "./ContactFormSanity";
import ContactDetails from "./ContactDetails";
import { motion, AnimatePresence } from "framer-motion";

const ContactWrap = ({ data, img }) => {
  const { title, text } = data;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1 }}
          className="relative items-center w-full min-h-screen pt-[20vh] pb-40"
        >
          <div className="relative w-4/5 mx-auto max-w-custom">
            <div className="flex">
              <div className="w-full grid grid-cols-2 tablet:grid-cols-1">
                <div className="w-full tablet:max-w-[20rem]">
                  <h1 className="text-2xl">{title}</h1>
                  <div className="w-8 h-[0.2rem] bg-gradient-green my-4" />
                  <p className="text-2xs mt-8 tablet:text-xs">{text}</p>
                </div>
                <ContactDetails img={img} />
              </div>
            </div>

            <div className="w-full mt-10">
              <h2 className="py-4 text-base tablet:text-lg">Contact Form</h2>
              <hr className="relative border-white-dark z-10" />
              <div className="ml-auto max-w-[900px] ">
                <ContactFormSanity />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ContactWrap;
