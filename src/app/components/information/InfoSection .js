"use client";

import { useState } from "react";
import Title from "../title/Title";

// Card data
const items = [
  {
    id: 1,
    title: "Fast and Stable Connection",
    title1: "Self-built IP Pool",
    title2: "Premium Proxy Server",
    description:
      "Advanced technology and high-quality resources guarantee your proxy network connection.",
    details:
      "Self-built IP Pool provides high-quality proxies, which we can take full advantage of.",
    details2:
      "Customized and dedicated proxy servers make it 99.9% uptime and stable connection.",
  },
  {
    id: 2,
    title: "Various Proxy Features",
    title1: "Unlimited Concurrency",
    title2: "Sub-account Management",
    description:
      "Enjoy the convenient proxy using and management. Adjust the proxy flexibly as you wish.",
    details:
      "No limit on threads or sessions. Support bulk proxy generating. Maximum your business potential.",
    details2:
      "Create sub-accounts to manage your traffic usage or share your proxies with your partners.",
  },
  {
    id: 3,
    title: "Improve Your Productivity",
    title1: "Safe and Highly-anonymous",
    title2: "Constantly updated IP resources",
    description:
      "Get access to high-quality PYPROXY IP pool to boost your business.",
    details:
      "Highly-anonymous proxies hide your real IP and unlock content and data of various websites worldwide.",
    details2:
      "We keep looking for high-quality IP resources and upgrade our IP pool to satisfy more customers' needs.",
  },
];

// Parent component to manage active cards
const InfoSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Function to set active card on mouse hover
  const handleHover = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Title title={"PYPROXY Advantages"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            title1={item.title1}
            title2={item.title2}
            description={item.description}
            details={item.details}
            details2={item.details2}
            isActive={activeCard === item.id}
            onHover={() => handleHover(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

// Card component with responsive design
const Card = ({
  title,
  title1,
  title2,
  description,
  details,
  details2,
  isActive,
  onHover,
}) => {
  return (
    <div
      className={`relative bg-white shadow-lg rounded-lg p-4 transition-all duration-500 ease-in-out 
        ${
          isActive
            ? "h-[320px] md:h-[400px] lg:h-[450px] shadow-xl"
            : "h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px]"
        }
      `}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
    >
      <div className="text-center">
        <div className="mb-2 md:mb-4">
          <div className="text-lg md:text-xl font-semibold text-gray-800">
            {title}
          </div>
        </div>
        {isActive ? (
          <div>
            <div className="text-gray-600 text-sm md:text-base">
              {description}
            </div>
            <hr />
            <div className="bg-gray-200 p-4 md:p-5 mt-2">
              <div className="text-md md:text-lg font-semibold text-gray-700">
                {title1}
              </div>
              <div className="text-gray-800 font-medium text-sm md:text-base mt-2">
                {details}
              </div>
              <div className="text-md md:text-lg font-semibold text-gray-700 mt-4">
                {title2}
              </div>
              <div className="text-gray-800 font-medium text-sm md:text-base mt-2">
                {details2}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-sm md:text-base">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
