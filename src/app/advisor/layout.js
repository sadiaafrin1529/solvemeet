import Link from "next/link";
import React from "react";

//static metadata
export const metadata = {
  title: "Advisor  Page",
  description: "This is advisor page",
};

export default function aboutlayout({ children }) {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          </ul>
      </nav>
      {children}
    </div>
  );
}
