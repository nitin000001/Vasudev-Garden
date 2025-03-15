import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-4 px-4">
        {/* Left Section */}
        <div className="space-y-2">
          <h5 className="text-sm font-semibold">
            MahaRERA Registration Number:
          </h5>
          <p className="text-sm">PR/P99000053486</p>
          <p className="text-xs text-gray-400 ">
            Disclaimer: The plans, specifications, conceptual designs, visuals,
            amenities, and other details are strictly for representation
            purposes only. T&C Apply.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span>Contact Us:</span>
            <a href="tel:+917770017997" className="hover:text-white">
              +91 7770017997
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/propertywallah_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/7770017997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.youtube.com/c/propertywallah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © 2025 Vasudev Garden. All rights reserved.
        </p>
        {/* <a
          href="https://portfolio-indol-ten-94.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-tight text-gray-400"
        >
          Design and Developed by Nitin Maurya
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
