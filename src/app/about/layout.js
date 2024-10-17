import Link from "next/link";
import React from "react";
import Footer from "../components/footer/Footer";

//static metadata
export const metadata = {
  title: "About Page",
  description: "This is About page",
};

export default function aboutlayout({ children }) {
  return (
    <div>
     
      {children}
      <Footer/>
    </div>
  );
}
