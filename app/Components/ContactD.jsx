"use client";

import React from "react";
import { ContactMe } from "@/public/Secrets/PersonalData";
import { Link } from "next/link";
import { motion } from "framer-motion";

const ContactD = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{ContactMe.address}</p>
        <p className="my-4">{ContactMe.number}</p>
        <Link href="#" className="border-b">
          {ContactMe.mail}
        </Link>
      </div>
    </div>
  );
};

export default ContactD;
