"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/app/images/logo.svg";
import { IoNotifications } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          <Link href="/">
            <Image src={logo} alt="logo picture" />
          </Link>
        </div>

        {/* Center: Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-8 lg:text-xl text-gray-600">
          <Link href="/advisor" className="hover:text-blue-700">
            Advisor
          </Link>
          <Link href="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-700">
            ContactUs
          </Link>
        </div>

        {/* Right: Button, Notifications, Language Selector */}
        <div className="flex items-center space-x-4 sm:px-4">
          <IoNotifications className="text-2xl" />
          <Button title="Login" />
          {/* 
          <GrLanguage className="text-xl" /> */}

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            {isOpen ? (
              <AiOutlineClose className="text-3xl" onClick={toggleMenu} />
            ) : (
              <AiOutlineMenu className="text-3xl" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu - Only visible when isOpen is true */}
      {isOpen && (
        <div className="md:hidden   px-4 sm:px-6">
          <div className="flex flex-col  inset-x-0  items-center space-y-4 py-4  bg-white rounded-lg">
            <Link href="/advisor" className="text-gray-600 hover:text-blue-700">
              Advisor
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-700">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700">
              ContactUs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
