import React from "react";
import Title from "../title/Title";
import Image from "next/image";
import playStore from "@/app/images/playStore.png";
import Button from "../button/Button";
import { MdOutlineRestartAlt } from "react-icons/md";
import BannerBackgroundDesign from "../bannerBackgroundDesign/BannerBackgroundDesign";
import advice from "@/app/images/advice.png";
import "animate.css";

export default function Hero() {
  return (
    <main className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3">
      <div className="container mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        {/* rightside */}
        <div className="relative z-10 mx-auto max-w-xl sm:max-w-md lg:max-w-2xl lg:col-span-7  lg:pt-6 xl:col-span-6 px-4 sm:px-6 lg:px-0">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl lg:w-[400px] text-center sm:text-left">
            Consult <span className="text-blue-500">Best Adviser</span> Your
            Nearby Location.
          </h1>
          <p className="mt-4  sm:mt-5  sm:text-2xl text-gray-600 text-center sm:text-left">
            Solve Meet is an online Universal Support platform that provides
            comprehensive guidance for every aspect of life. No matter where you
            are, you can get our help from anywhere in the world.
          </p>
          <div className="flex mt-6 sm:mt-8 flex-wrap items-center gap-x-4 sm:gap-x-6 gap-2 sm:gap-4 justify-center sm:justify-start">
            <Image
              src={playStore}
              alt="playStoreImg"
              className="w-24 h-auto sm:w-32"
            />
            <div>
              <Button
                icon={<MdOutlineRestartAlt size={24} />}
                title="Start a Consult"
              />
            </div>
          </div>
        </div>

        {/* left side */}
        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <BannerBackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />

          {/* Image without TrackVisibility */}
          <div className="relative flex justify-center items-center h-[448px] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <Image
              src={advice}
              alt="advice"
              className="object-contain w-auto h-full animate__animated animate__zoomIn"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
