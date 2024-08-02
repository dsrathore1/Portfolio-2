"use client";

import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiPostgresql,
  SiTerraform,
  SiApachekafka,
  SiGithubactions,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text "
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -250 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center w-full gap-4"
      >
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-gray-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-amber-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTerraform className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKubernetes className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGithubactions className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachekafka className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
