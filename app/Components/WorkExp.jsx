"use client";
import React from "react";
import { WorkExperience } from "@/public/Secrets/PersonalData";
import { motion } from "framer-motion";

const WorkExp = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {WorkExperience.map((data, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">{data.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {data.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {data.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{data.desc}</p>
                <div className="w-[100%] flex flex-wrap justify-start items-center">
                  {data.tech.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
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

export default WorkExp;
