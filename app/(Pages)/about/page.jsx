import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 bg-transparent pb-4">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text ">
        About Me
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <Image className="rounded-2xl" src={""} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-5 text-xl tracking-tight font-thin font-sans">
              My name is Digpal Singh Rathore. I am an aspiring Cloud Developer
              with experience in full-stack development, AWS cloud services,
              Docker, Kubernetes, GitHub Actions, the MERN stack, and relational
              databases. My current focus is on securing a job, with a strong
              interest in joining MAANG company. I have a solid foundation in
              Data Structures and Algorithms, also solved several related
              questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
