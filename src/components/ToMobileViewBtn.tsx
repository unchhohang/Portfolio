/*
 * Button when clicked goes mobile view
 */

"use client";
import { useEffect, useState } from "react";
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { isMobile } from "react-device-detect";

export default function ToMobileViewBtn() {
  // const [width, setWidth] = useState<number>(window.innerWidth);

  // function handleWindowSizeChange() {
  //   setWidth(window.innerWidth);
  // }

  // const isMobileViewInBrowser = width <= 425;

  return (
    <button
      className={
        isMobile
          ? "hidden"
          : `fixed bottom-5 right-5 p-1 bg-white border border-black rounded-full
                    hover:border-sky-600 hover:border-2
        `
      }
    >
      {/* {isMobileViewInBrowser ? <CiDesktop /> : <CiMobile3 />} */}
    </button>
  );
}
