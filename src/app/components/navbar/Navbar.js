import Image from "next/image";
import { IoNotifications } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import Button from "../button/Button";
import CustomLink from "../customLink/CustomLink";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

import logo from "@/app/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          <Image src={logo} alt="logo picture" />
        </div>

        {/* Center: Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-8 lg:text-xl font-medium text-gray-600">
          <CustomLink path="/" className="hover:text-blue-500">
            Home
          </CustomLink>
          <CustomLink path="/advisor" className="hover:text-blue-500">
            Advisor
          </CustomLink>
          <CustomLink path="/about" className="hover:text-blue-500">
            About
          </CustomLink>
          <CustomLink path="/contact" className="hover:text-blue-500">
            Contact Us
          </CustomLink>
        </div>

        {/* Right: Button, Notifications */}
        <div className="flex items-center space-x-4">
          <IoNotifications className="text-2xl text-blue-500" />
          <Button
            icon={<IoMdLogIn size={24} />}
            title="Login"
            className="hidden md:block"
          />
          {/* Hamburger menu for mobile */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
