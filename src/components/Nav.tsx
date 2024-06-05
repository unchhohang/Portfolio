/**
 * Navigation Bat
 */

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkToggle from "./DarkToggle";

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className=" flex space-x-7 text-lg m-4 ">
      <DarkToggle />
      <a href="#AboutMe">
        <span>About</span>
      </a>
      <a href="#SkillBoard">
        <span>Experience</span>
      </a>
      {/* <a href='#'><span>Projects</span></a> */}
      <a href="#Contact">
        <span>Contact</span>
      </a>
    </nav>
  );
}
