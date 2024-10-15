"use client";

import React from "react";
import Slider from "react-slick"; // Import Slick slider
import Image from "next/image"; // Import Next.js Image component
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons from react-icons
import person1 from "@/app/images/person1.jpg";
import person2 from "@/app/images/person2.jpg";
import person3 from "@/app/images/person3.jpg";
import person4 from "@/app/images/person4.jpg";
import person5 from "@/app/images/person5.jpg";
import person6 from "@/app/images/person6.jpg";
import Title from "../title/Title";
import bg from "@/app/images/bg.svg"; // Import your SVG image

export default function ClientSays() {
  const items = [
    {
      id: 1,
      image: person1,
      name: "Sadia",
      saySomething:
        "As a busy professional, I don't have time to wait on hold or play phone tag to schedule doctor appointments. Thanks to Doccure, booking appointments has never been easier! The user-friendly interface allows me to quickly find available appointment slots that fit my schedule and book them with just a few clicks. It's a game-changer for anyone looking to streamline their healthcare management.",
    },
    {
      id: 2,
      image: person2,
      name: "Rahul",
      saySomething:
        "Being a student, my time is precious. Doccure has made it simple for me to manage my health appointments without hassle. The platform is intuitive, and I love how I can see all my options in one place.",
    },
    {
      id: 3,
      image: person3,
      name: "Aisha",
      saySomething:
        "I used to dread making appointments because of the long wait times on the phone. With Doccure, I can easily book my appointments online whenever I have a moment. It has truly changed how I manage my health.",
    },
    {
      id: 4,
      image: person4,
      name: "Farhan",
      saySomething:
        "As a busy parent, finding time to schedule health appointments for my kids was always a challenge. Doccure allows me to book everything from my phone, and I appreciate the reminders I get before each appointment.",
    },
    {
      id: 5,
      image: person5,
      name: "Nisha",
      saySomething:
        "I love the convenience of Doccure! I can manage my appointments from anywhere, and the reminders help me stay on top of my health. It's such a relief to have this service at my fingertips.",
    },
    {
      id: 6,
      image: person6,
      name: "Ravi",
      saySomething:
        "Doccure has streamlined the appointment booking process for me. I can quickly find and book appointments that fit my busy schedule, all without the usual stress. Highly recommend it to everyone!",
    },
  ];

  const settings = {
    slidesToShow: 1, // Show one item at a time
    slidesToScroll: 1,
    dots: false, // Disable default dots
    infinite: true, // Infinite loop
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }

  return (
    <div
      className="relative py-10 px-5 w-full max-w-full mx-auto bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Title title={"What our Client Says"} />
      <Slider
        className="max-w-6xl mx-auto  items-center justify-center"
        {...settings}
      >
        {items.map((item) => (
          <div key={item.id} className="flex  flex-col items-center p-4">
            <div className="flex items-center flex-col md:flex-row">
              <Image
                src={item.image.src}
                alt={item.name}
                className="w-32 h-32 rounded-full object-cover object-center mb-4 md:mb-0 md:mr-4"
                width={128}
                height={128}
                quality={90} // Adjust quality here
              />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-blue-500 font-mono">
                  {item.name}
                </h3>
                <p className="mt-2 text-lg text-gray-700 font-semibold">
                  {item.saySomething}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
