import React from "react";
import Link from "next/link";
import { MdPets, MdOutlinePsychology } from "react-icons/md"; // Material Design Icons
import { FaHandsHelping, FaLongArrowAltRight, FaLeaf } from "react-icons/fa"; // Font Awesome Icons
import Title from "../title/Title";

export default function Servicee() {
  const items = [
    {
      id: 1,
      icon: <FaLeaf size={40} />,
      title: "Transplant Services",
      description:
        "There are many variations of passages of Lorem Ipsum available.",
      link: "/pet-care",
      buttonText: "Read More",
    },
    {
      id: 2,
      icon: <MdOutlinePsychology size={40} />,
      title: "Mental Health Support",
      description:
        "Talk to specialists to help manage depression, anxiety, and other mental health issues.",
      link: "/mental-health",
      buttonText: "Read More",
    },
    {
      id: 3,
      icon: <FaHandsHelping size={40} />,
      title: "General Consulting",
      description:
        "Get professional advice on a wide range of issues for personal and professional growth.",
      link: "/general-consulting",
      buttonText: "Read More",
    },
  ];
  return (
    <div>
      <Title title={"Provide Awesome Service"} />
      <div className="flex flex-col md:flex-row  justify-center items-center gap-8 p-5 md:p-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white  overflow-hidden w-full sm:w-[350px] md:w-[400px] shadow-xl  rounded-xl"
          >
            <div className="flex p-4 md:p-6">
              <div className="bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full  p-4">
                {item.icon}
              </div>
            </div>
            {/* Title & Description */}
            <div className="px-6 md:px-8">
              <Link
                href={item.link}
                className="text-lg md:text-xl font-bold mb-2"
              >
                {item.title}
              </Link>
              <p className="text-gray-500 py-4 leading-8 mb-4 font-semibold md:text-base">
                {item.description}
              </p>
            </div>

            {/* Button Section */}
            <div className="bg-blue-500 flex items-center gap-4 p-3 md:p-4">
              <Link href={item.link} className="text-white font-semibold">
                {item.buttonText}
              </Link>
              <div className="text-white flex items-center">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
