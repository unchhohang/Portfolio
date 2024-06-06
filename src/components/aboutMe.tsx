/**
 * About me page
 */

"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMedal, FaUserGraduate } from "react-icons/fa6";

export default function AboutMe() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="m-2 font-medium text-[#ef4444] text-center">
          Get To Know More
        </div>
        <div className="m-2 font-semibold text-4xl">About Me</div>
      </div>
      <div className="grid items-center sm:grid-cols-2 ">
        {theme === "dark" && (
          <Image
            className="rounded-xl sm:m-4"
            src={"/static/batman-on-top.jpg"}
            alt={"Batman on top"}
            height={500}
            width={500}
          />
        )}
        {theme === "light" && (
          <Image
            className="rounded-xl m-4"
            src={"/static/panda-working-no-bg.png"}
            alt={"Panda taking apple. Some chinese artist doing"}
            height={500}
            width={500}
          />
        )}
        <div className="grid">
          <div className="flex flex-col sm:grid sm:grid-cols-2 ">
            <div
              className="m-2 border-solid border-[#9ca3af] border-2 px-20 py-8 rounded-2xl
                        flex flex-col justify-center items-center
            "
            >
              <span>
                <FaMedal />
              </span>
              <div className="text-lg font-semibold">Experience</div>
              <div className="text-sm text-[#ef4444]">2+ years</div>
            </div>
            <div
              className="m-2 border-solid border-[#9ca3af] border-2 px-20 py-8 rounded-2xl
                        flex flex-col justify-center items-center
            "
            >
              <span>
                <FaUserGraduate />
              </span>
              <div className="text-lg font-semibold">Education</div>
              <div className="text-sm text-nowrap text-[#ef4444]">
                B.Sc. Computing
              </div>
            </div>
          </div>
          <div
            className="text-sm text-justify font-normal
                    my-5 tracking-tighter
                    p-2
          "
          >
            Hey there, I am a full stack web developer. Ensuring client
            satisfaction is my quality, and writing beautiful code my hobby.
            Dedication to quality and productivity.
            <br />
            <span className="text-lg">Cheers Cheers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
