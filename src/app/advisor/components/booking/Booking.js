import React from "react";
import BookingRightSide from "./BookingRightSide";
import BookingLeftSide from "./BookingLeftSide";
import Title from "@/app/components/title/Title";

export default function Booking() {
  return (
    <main className="container mx-auto ">
      {/* <div className="p-4">
        <Title
          title={"Select a time for your Office Visit appointment"}
        />
      </div> */}
      <div className=" h-screen flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-3/5 p-4 border-r border-gray-300">
          <BookingLeftSide />
        </div>
        {/* Right Side */}
        <div className="w-full md:w-2/6 p-4 ">
          <BookingRightSide />
        </div>
      </div>
    </main>
  );
}
