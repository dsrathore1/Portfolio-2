import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Nav = () => {
  return (
    <>
      <nav className="w-full justify-between md:py-6 items-center gap-2 flex py-4">
        <div>
          <h1 className="text-3xl hover:text-white cursor-default md:animate-bounce duration-300 font-bold font-serif">
            디에스
          </h1>
        </div>
        <div className="md:gap-4 gap-x-4 flex justify-center items-center">
          <FaGithub size={27} color="#fff" />
          <FaLinkedin size={27} color="#fff" />
          <FaInstagram size={27} color="#fff" />
          <SiLeetcode size={27} color="#fff" />
        </div>
      </nav>
    </>
  );
};

export default Nav;