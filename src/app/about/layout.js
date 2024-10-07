import Link from "next/link";
import React from "react";

//static metadata
export const metadata = {
  title: "About Page",
  description: "This is About page",
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
