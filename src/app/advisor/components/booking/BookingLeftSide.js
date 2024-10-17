import React from "react";

const timeSlots = {
  "Monday October 21, 2024": [
    "9:00 AM PDT",
    "9:20 AM PDT",
    "9:40 AM PDT",
    "10:00 AM PDT",
    "10:20 AM PDT",
    "10:40 AM PDT",
    "11:00 AM PDT",
    "11:20 AM PDT",
    "11:40 AM PDT",
  ],
  "Tuesday October 22, 2024": [
    "10:00 AM PDT",
    "10:20 AM PDT",
    "10:40 AM PDT",
    "11:40 AM PDT",
    "1:40 PM PDT",
    "3:40 PM PDT",
    "4:00 PM PDT",
  ],
  "Wednesday October 23, 2024": [
    "9:00 AM PDT",
    "9:20 AM PDT",
    "9:40 AM PDT",
    "10:00 AM PDT",
    "10:20 AM PDT",
    "10:40 AM PDT",
    "11:00 AM PDT",
    "11:20 AM PDT",
    "1:40 PM PDT",
    "2:00 PM PDT",
    "2:20 PM PDT",
    "2:40 PM PDT",
    "3:00 PM PDT",
    "3:20 PM PDT",
    "3:40 PM PDT",
  ],
};

export default function BookingLeftSide() {
  return (
    <div className="container mx-auto p-4">
      {Object.entries(timeSlots).map(([date, slots]) => (
        <div key={date} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{date}</h2>
          <p className="text-lg  text-blue-500">Matt H. Reed</p>
          <p className="text-md mb-4 font-bold text-blue-500">Tigard</p>
          <p className="text-sm text-gray-500 font-semibold">
            9250 SW Hall Blvd Tigard OR 97223
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {slots.map((time) => (
              <button
                key={time}
                className="border border-blue-500 text-blue-500 rounded px-4 py-2"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
