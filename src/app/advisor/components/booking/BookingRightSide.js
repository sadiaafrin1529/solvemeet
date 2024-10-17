"use client";
import Title from "@/app/components/title/Title";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingRightSide() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState({
    Monday: "AM",
    Tuesday: "AM",
    Wednesday: "AM",
    Thursday: "AM",
    Friday: "AM",
  });

  const handleTimeSelection = (day, period) => {
    setSelectedTimes((prevTimes) => ({
      ...prevTimes,
      [day]: period,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border p-4 rounded-lg shadow-md">
        <p className="text-blue-500 text-xl mb-4">Search Criteria</p>
        <div className="mb-4">
          <DatePicker
            className="border p-2 rounded w-full"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="mb-4 flex gap-6">
          <p className="font-bold text-lg">Refine Search</p>
          <button className="text-blue-500 mb-4">Clear</button>
        </div>
        <div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div key={day} className="flex items-center mb-2">
                <p className="w-24">{day}:</p>
                <div className="flex space-x-2">
                  <button
                    className={`${
                      selectedTimes[day] === "AM"
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    } border rounded px-4 py-1`}
                    onClick={() => handleTimeSelection(day, "AM")}
                  >
                    AM
                  </button>
                  <button
                    className={`${
                      selectedTimes[day] === "PM"
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    } border rounded px-4 py-1`}
                    onClick={() => handleTimeSelection(day, "PM")}
                  >
                    PM
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
