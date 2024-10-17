import Link from "next/link";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../components/footer/Footer";
//static metadata
export const metadata = {
  title: "Advisor  Page",
  description: "This is advisor page",
};

export default function aboutlayout({ children }) {
  return (
    <div>
      {children}
      {/* <Footer/> */}
    </div>
  );
}
