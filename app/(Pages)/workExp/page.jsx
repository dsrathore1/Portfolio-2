import React from "react";
import { WorkExperience } from "@/public/Secrets/PersonalData";

const WorkExp = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 bg-gradient-to-r from-white via-gray-300 text-transparent bg-clip-text text-center text-4xl">
        Experience
      </h1>
      <div>
        {WorkExperience.map((data, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{data.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {data.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {data.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{data.desc}</p>
                {data.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >{tech}</span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExp;
