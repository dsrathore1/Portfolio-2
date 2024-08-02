"use client";

import { Projects } from "@/public/Secrets/PersonalData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {Projects.map((data, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <Image
                  src={data.img}
                  alt={data.name}
                  height={150}
                  width={150}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-2xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{data.name}</h6>
                <p className="mb-4 text-neutral-400">{data.desc}</p>
                <div className="w-[100%] flex flex-wrap justify-start items-center">
                  {data.tech.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="mr-2 rounded px-3 text-center py-1 text-sm font-medium text-purple-600 hover:font-bold hover:text-purple-300 duration-200 ease-linear cursor-default"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
