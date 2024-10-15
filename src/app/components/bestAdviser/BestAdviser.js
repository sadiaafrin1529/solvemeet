import Image from "next/image";
import React from "react";
import scroll from "@/app/images/scroll.jpg"; // Correct path to the image
import Button from "../button/Button";

export default function BestAdviser() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden mb-0">
      {" "}
      {/* Ensure no margin */}
      {/* Image component for Next.js with background image fixed within this section */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-fixed bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${scroll.src})` }}
        ></div>
      </div>
      {/* Gradient Overlay that scrolls */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/70 to-blue-500/70"></div>
      {/* Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center p-6 text-white font-playball">
        <p className="text-xs sm:text-base uppercase mb-2">CARE FEATURES</p>
        <p className="text-3xl sm:text-4xl md:text-5xl w-full md:w-1/2 font-bold text-center leading-snug mb-4">
          Have Any Project ? Let’s Talk & Grow your Business
        </p>
        <Button
          title={"  Send Message"}
          className="  px-9 py-2 text-md sm:px-8 sm:py-3 transition duration-300 hover:bg-blue-700"
        />
      </div>
    </div>
  );
}
