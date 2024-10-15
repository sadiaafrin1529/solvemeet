// components/SimpleVerticalSlider.js
"use client"; // This makes the component a client component
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"; // Importing React Icons
import service from "@/app/images/service.jpg"; // Importing the image
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function SimpleVerticalSlider() {
  const sliderRef = useRef(null); // Create a reference for the slider
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index), // Update current slide on change
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="flex flex-col py-10 md:flex-row justify-center items-center md:space-x-8">
      {/* Left Side - Vertical Slider */}
      <div className="w-full md:w-[700px] h-[600px] p-10 slider-container">
        <h1 className="font-bold text-blue-500 text-[28px] md:text-[40px] leading-tight mb-5">
          We create solutions that are bold & up with the times
        </h1>
        <div>
          {/* Arrows */}
          <div className="flex justify-between mt-4 p-5">
            {/* Left Arrow */}
            {currentSlide === 1 && ( // Show left arrow only on the second slide
              <p
                className="p-2 bg-gray-200 rounded cursor-pointer"
                onClick={() => {
                  sliderRef.current.slickPrev(); // Go to previous slide
                  setCurrentSlide(0); // Update the current slide state
                }}
              >
                <FaLongArrowAltLeft size={20} className="text-blue-500" />
              </p>
            )}

            {/* Right Arrow */}
            {currentSlide === 0 && ( // Show right arrow only on the first slide
              <p
                className="p-2 bg-gray-200 rounded cursor-pointer"
                onClick={() => {
                  sliderRef.current.slickNext(); // Go to next slide
                  setCurrentSlide(1); // Update the current slide state
                }}
              >
                <FaLongArrowAltRight size={20} className="text-blue-500" />
              </p>
            )}
          </div>

          <Slider className="px-5 py-5" ref={sliderRef} {...settings}>
            <div>
              <h2 className="text-xl font-bold mb-3">Our Mission</h2>
              <hr />
              <p className="mt-4 leading-6 font-medium text-gray-500">
                Our mission at Solve Meet is to empower individuals and
                businesses by offering accessible, reliable, and professional
                support across various services. We aim to make finding help
                easier, ensuring everyone can access the expertise they need to
                succeed.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Our Vision</h2>
              <hr />
              <p className="mt-4 leading-6 font-medium text-gray-500">
                Our vision is to create a globally recognized platform that
                serves as the ultimate support resource for all aspects of life.
                We dream of a world where anyone, anywhere, can effortlessly
                access the help they need to overcome challenges and reach their
                goals.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      {/* Right Side - Additional Content */}
      <div
        data-aos="fade-left"
        className="w-full md:w-[700px] lg:h-[600px]  py-8 px-4"
      >
        <Image
          className="rounded-lg shadow-lg shadow-gray-400"
          src={service}
          alt="Service"
          layout="responsive" // Make the image responsive
          width={700} // Adjust according to your design
          height={600} // Adjust according to your design
        />
      </div>
    </div>
  );
}

export default SimpleVerticalSlider;
