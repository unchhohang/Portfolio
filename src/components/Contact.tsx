/**
 * Contact component
 */

import { BiLogoGmail } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className=" font-medium text-[#ef4444] text-center">
        Get in Touch
      </div>
      <div className="m-2 mb-8 font-semibold text-4xl">Contact Me</div>
      <div
        className="border-2 border-[#9ca3af] rounded-3xl
        p-4
        flex justify-center
      "
      >
        <div className="flex  gap-3 justify-center items-center p-2">
          <div>
            {/* <IoMail /> */}
            <BiLogoGmail />
          </div>
          <div className="text-sm font-medium">
            <a href="mailto:unchhohang@gmail.com">unchhohang@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
