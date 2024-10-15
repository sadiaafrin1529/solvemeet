import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ABOUT COMPANY</h3>
            <p className="text-gray-400">
              Consultancy process begins with a comprehensive assessment of the
              client's current state. This involves analyzing their market
              position.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">NEED HELP?</h3>
            <p className="text-gray-400">Toll Free Customer Care</p>
            <p className="text-white text-lg font-semibold">
              +21 253 4586 3215
            </p>
            <p className="text-gray-400 mt-2">Need Live Support?</p>
            <p className="text-white text-lg font-semibold">
              inside@bizgen.com
            </p>
          </div>

          {/* Keep In Touch Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">KEEP IN TOUCH</h3>
            <p className="text-gray-400">
              Subscribe Us & Receive Our Offers and updates. We don’t spam your
              email!
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="p-2 rounded-l-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Bizgen. All images are for demo purposes.</p>
        </div>
      </div>
    </footer>
  );
}
