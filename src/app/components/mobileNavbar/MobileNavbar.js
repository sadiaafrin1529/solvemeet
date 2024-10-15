"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";
import Button from "../button/Button";
import CustomLink from "../customLink/CustomLink";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="md:hidden">
        {isOpen ? (
          <AiOutlineClose className="text-3xl" onClick={toggleMenu} />
        ) : (
          <AiOutlineMenu className="text-3xl" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile menu - Only visible when isOpen is true */}
      {isOpen && (
        <div className="fixed inset-x-3 bg-white z-50 flex flex-col items-center space-y-4 py-4">
          <CustomLink path="/advisor" className="text-gray-600 hover:text-blue-500">
            Advisor
          </CustomLink>
          <CustomLink path="/about" className="text-gray-600 hover:text-blue-500">
            About
          </CustomLink>
          <CustomLink path="/contact" className="text-gray-600 hover:text-blue-500">
            Contact Us
          </CustomLink>

          
        </div>
      )}
    </div>
  );
}
