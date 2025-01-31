import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full  bg-[#615C57]/30 backdrop-blur-md shadow-md z-50">
      <nav className="container  mx-auto flex justify-between items-center px-4 ">
        {/* Logo Section */}
        {/* <div className="w-16 h-16 md:w-24 md:h-24">
          <img
            src="https://sanctuminfratech.com/wp-content/uploads/2023/12/1-1-1.png"
            alt="Logo"
            className="object-contain w-full h-full "
          />
        </div> */}
          <div className="p-5 text-white">
          <h1>Vasudev Garden</h1>
          </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li className="relative group">
            <a
              href="#PricePlans"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Price & Plans
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#amenities"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Amenities
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#MasterLayout"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Master Layout
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#projects"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Projects
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#flatLayout"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Flat Layout
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="https://wa.me/9321696390"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Enquire
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          {/* Contact Us  */}
          <li className="relative group">
            <a
              href="#contact"
              className="relative hover:text-blue-500 transition"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 bg-gray-900 text-white text-sm p-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              <a href="#insta" className="hover:text-pink-400">
                Instagram
              </a>
              <a href="#whatsapp" className="hover:text-green-400">
                WhatsApp
              </a>
              <a href="#facebook" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#youtube" className="hover:text-red-400">
                YouTube
              </a>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center bg-transparent shadow-md py-3 gap-4 text-white font-medium`}
      >
        <div className="relative group flex flex-col gap-1 items-start">
          <li className="relative group">
            <a
              href="#PricePlans"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Price & Plans
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#amenities"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Amenities
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#MasterLayout"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Master Layout
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="#projects"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Projects
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <a
              href="https://wa.me/9321696390"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Enquire
            </a>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <a
            href="#contact"
            className="relative hover:text-blue-500 transition"
          >
            Contact Us
            {/* Underline Animation */}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Dropdown Menu */}
          <div className="relative flex flex-col space-y-2 mt-2 bg-gray-900 text-white text-sm p-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
            <a href="#insta" className="hover:text-blue-400 ">
              Instagram
            </a>
            <a href="#whatsapp" className="hover:text-blue-400">
              WhatsApp
            </a>
            <a href="#facebook" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#youtube" className="hover:text-blue-400">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
