// Hamburger icon navigation

"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function () {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </button>
      <div
        className={`${show ? "" : "hidden"} 
                        absolute
                        right-3
                        p-1
                        bg-white
      `}
      >
        <a href="#AboutMe" onClick={() => setShow(false)}>
          <ol>About</ol>
        </a>
        <a href="#SkillBoard" onClick={() => setShow(false)}>
          <ol>Experience</ol>
        </a>
        <a href="#Contact" onClick={() => setShow(false)}>
          <ol>Contact</ol>
        </a>
      </div>
    </div>
  );
}
