/**
 * Skill board
 */

import { FaCheckCircle } from "react-icons/fa";

export default function SkillBoard() {
  const frontSkill = ["React", "HTML", "CSS", "Tailwind", "ChakraUI"];

  const backSkill = ["NodeJS", "ExpressJS", "SQL", "MongoDB"];

  const languageSkill = ["JavaScript", "TypeScript", "RUST"];

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className=" font-medium text-[#ef4444] text-center">
          Explore My
        </div>
        <div className="m-2 mb-24 font-semibold text-4xl">Experience</div>
      </div>

      {/* Skill board begins */}
      <div
        className="flex flex-col
            sm:grid  sm:grid-cols-2 gap-8 
                m-5
      "
      >
        <div
          className="border-2 rounded-3xl border-[#9ca3af]
                p-2
        "
        >
          <div
            className="m-4 font-semibold tracking-wide text-[#57534e] text-xl 
            flex justify-center
          "
          >
            Frontend Development
          </div>
          <div className="flex flex-col items-start sm:grid sm:grid-cols-2 sm:items-center">
            {frontSkill?.map((x, i) => (
              <div key={x} className="flex items-center m-2 pl-10">
                <span className="m-3">
                  <FaCheckCircle />
                </span>
                <span className="font-bold">{x}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="border-2 rounded-3xl border-[#9ca3af]
                p-2
                row-span-2 sm:row-span-1
        "
        >
          <div
            className="m-4 font-semibold tracking-wide text-[#57534e] text-xl 
            flex justify-center
          "
          >
            Backend Development
          </div>
          <div className="flex flex-col items-start sm:grid sm:grid-cols-2 sm:items-center">
            {backSkill?.map((x, i) => (
              <div key={x} className="flex items-center m-2 pl-10">
                <span className="m-3">
                  <FaCheckCircle />
                </span>
                <span className="font-bold">{x}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="border-2 rounded-3xl border-[#9ca3af]
                p-2
                col-span-2
        "
        >
          <div
            className="m-4 font-semibold tracking-wide text-[#57534e] text-xl 
            flex justify-center
          "
          >
            Programming Language
          </div>
          <div className="flex flex-col   sm:flex-row sm:justify-around ">
            {languageSkill?.map((x, i) => (
              <div key={x} className="flex items-center m-2 pl-10">
                <span className="m-3">
                  <FaCheckCircle />
                </span>
                <span className="font-bold">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
