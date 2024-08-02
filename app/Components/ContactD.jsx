"use client";

import React from "react";
import { ContactMe } from "../../public/Secrets/PersonalData.js";
import Link from "next/link";
import { motion } from "framer-motion";

export const ContactD = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {ContactMe.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {ContactMe.number}
        </motion.p>
        <Link href="#" className="border-b">
          {ContactMe.mail}
        </Link>
      </div>
    </div>
  );
};
