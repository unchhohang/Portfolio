/**
 * Me component
 * Consist photos and all for person profiling
 */

"use client";
import { log } from "console";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Me() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        {theme == "dark" && (
          <Image
            className="rounded-full"
            src={"/static/batman-profile.jpg"}
            alt="Batman Image credit Devian arts"
            width={400}
            height={400}
          />
        )}
        {theme === "light" && (
          <Image
            className="rounded-full"
            src={".vercel/output/static/panda-no-bg.png"}
            alt="Happy panda image. Creadit to some chinese artist."
            width={400}
            height={400}
          />
        )}

        {/* Details texts beside image */}
        <div className="flex flex-col justify-center items-center m-1">
          <div className="m-2 font-medium text-[#ef4444]">Hello, I&apos;m</div>
          <div className="m-2 font-semibold text-3xl">Unchhohang Limbu</div>
          <div className="m-2 font-medium text-[#57534e] text-xl">
            Full Stack Developer
          </div>
          <div className="flex justify-around">
            <a href="/CV.pdf" download={"CV"}>
              <button
                type="button"
                className="p-2 
                        font-medium
                        text-sm
            rounded-3xl border-solid border-2 border-[#134e4a] m-2"
              >
                Download CV
              </button>
            </a>
            <a href="#Contact">
              <button
                type="button"
                className="p-2 
                        font-medium
                        text-sm text-white
            rounded-3xl border-solid border-2 border-[#134e4a] m-2
            bg-[#134e4a]"
              >
                Contact Info
              </button>
            </a>
          </div>
          <div className="flex justify-center space-x-2">
            <a href="https://linkedin.com/in/unchhohang-limbu-u4">
              <button type="button" className="rounded ">
                <Image
                  className="rounded-full"
                  src={"/linkedin.svg"}
                  alt="linkedin svg"
                  width={24}
                  height={24}
                />
              </button>
            </a>
            <a href="https://github.com/unchhohang">
              <button type="button" className="rounded ">
                <Image
                  src={"/github.svg"}
                  alt="github svg"
                  width={30}
                  height={30}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
