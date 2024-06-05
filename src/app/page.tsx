import Image from "next/image";
import styles from "./page.module.css";
import Me from "@/components/Me";
import AboutMe from "@/components/aboutMe";
import SkillBoard from "@/components/SkillBoard";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";
import HamburgerNav from "@/components/HamburgerNav";
import DarkToggle from "@/components/DarkToggle";
import { CiMobile3 } from "react-icons/ci";
import ToMobileViewBtn from "@/components/ToMobileViewBtn";
import { useState } from "react";

export default function Home() {

  return (
    <main className=" mx-1 my-2 sm:my-7 sm:mx-16 ">
      <ThemeProvider attribute="class">
        {" "}
        {/* For Dark and light themes */}
        <header className="flex  justify-between    ">
          <span className="text-lg sm:text-4xl m-3">Unchhohang</span>
          <div className="hidden sm:block">
            <Nav />
          </div>
          <div className="sm:hidden flex items-center gap-3">
            <DarkToggle />

            <HamburgerNav />
          </div>
        </header>
        <section id="Me" className="my-7 ">
          <Me />
        </section>
        <section id="AboutMe" className="my-28 ">
          <AboutMe />
        </section>
        <section id="SkillBoard" className="my-28 ">
          <SkillBoard />
        </section>
        {/* Projects section TODO  */}
        {/* <div></div> */}
        <section id="Contact" className="my-10 ">
          <Contact />
        </section>
        <footer className="hidden sm:flex justify-center ">
          <Nav />
        </footer>{" "}
        <ToMobileViewBtn />
      </ThemeProvider>
    </main>
  );
}
