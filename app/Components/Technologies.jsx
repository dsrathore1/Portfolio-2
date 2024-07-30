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

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-gray-200" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-blue-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-amber-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTerraform className="text-7xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithubactions className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachekafka className="text-7xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
