"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ProjectImgParallax({ parallaxImgs }) {
  // Parallax Scroll
  const imgOne = parallaxImgs[0];
  const imgTwo = parallaxImgs[1];
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const frontImg = useTransform(scrollYProgress, [0, 1], [75, -75]);
  const backImg = useTransform(scrollYProgress, [0, 1], [-100, 150]);

  // Resize to handle switch between parallax images
  const [isMobile, setIsMobile] = useState(false);
  const switchWidth = 767;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= switchWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [switchWidth]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ stiffness: 10, damping: 12 }}
      ref={container}
      className="flex mt-32 mr-10 w-full tablet:flex-col tablet:mt-16"
    >
      {!isMobile ? (
        <>
          <div className="w-full flex-grow basis-[110%]">
            <motion.div
              style={{ y: frontImg }}
              className="relative top-0 overflow-hidden w-[110%] z-10"
            >
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="relative object-cover position-top w-full h-52"
              />
            </motion.div>
          </div>
          <div className="w-full flex-grow basis-[90%]">
            <motion.div
              style={{ y: backImg }}
              className="relative top-0 overflow-hidden w-[110%] left-[-10%] h-44"
            >
              <Image
                src={imgTwo.url}
                alt={imgTwo.alt}
                width={1000}
                height={1000}
                className="relative object-cover position-bottom w-full"
              />
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <div className="w-4/5 overflow-hidden">
            <div className="h-auto w-full object-cover object-top">
              <Image
                src={imgOne.url}
                alt={imgOne.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </div>
          </div>
          <div className="relative top-[-4rem] w-4/5 ml-auto overflow-hidden">
            <div className="h-auto w-full object-cover object-bottom">
              <Image
                src={imgTwo.url}
                alt={imgTwo.alt}
                width={1000}
                height={1000}
                className="scroll__img"
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
