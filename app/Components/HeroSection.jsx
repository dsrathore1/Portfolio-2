"use client";
import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl bg-gradient-to-r from-white via-gray-400 select-none to-gray-700 text-transparent bg-clip-text "
            >
              Digpal Singh Rathore
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              drag="x"
              dragConstraints={{ left: -100, right: 0 }}
              className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Cloud Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am highly skilled{" "}
              <span className="font-semibold tracking-tight">
                Cloud Developer
              </span>{" "}
              with a strong foundation in{" "}
              <span className="font-semibold tracking-tight">
                full-stack development
              </span>{" "}
              and extensive experience in AWS cloud services. With a background
              in computer science and hands-on expertise in key{" "}
              <span className="font-semibold tracking-tight"> Cloud</span> and{" "}
              <span className="font-semibold tracking-tight">DevOps</span>{" "}
              technologies, I am also proficient in{" "}
              <span className="font-semibold tracking-tight">designing</span>,{" "}
              <span className="font-semibold tracking-tight">deploying</span>,{" "}
              <span className="font-semibold tracking-tight">
                managing scalable
              </span>{" "}
              application,{" "}
              <span className="font-semibold tracking-tight">secure</span>, and
              creating{" "}
              <span className="font-semibold tracking-tight">
                efficient cloud-based architecture
              </span>
              .
            </motion.p>
          </div>
        </div>
        <div className="h-[30rem] relative w-1/2 flex justify-center items-center">
          {/* <Spin /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
