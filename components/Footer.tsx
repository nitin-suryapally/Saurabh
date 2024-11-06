import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-6">
      <div className="container mx-auto px-4 flex md:flex-col flex-row justify-between items-center space-y-4 md:space-y-8">
        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="#whyme" className="hover:text-orange-500 transition">
            Why Me
          </Link>
          <Link href="#testimonials" className="hover:text-orange-500 transition">
            Testimonials
          </Link>
          <Link href="#recentWork" className="hover:text-orange-500 transition">
            Recent Work
          </Link>
          <Link href="#getintouch" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 py-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaFacebookF className = "w-7 h-7" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaTwitter className = "w-7 h-7"/>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram className = "w-7 h-7" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedinIn className = "w-7 h-7" />
          </Link>
        </div>

        {/* Copyright Text */}
        
      </div>
      <div className="text-xs md:text-sm text-center md:text-right bg-black w-full flex items-center justify-center py-4 gap-2">
          © 2024 <span className="text-orange-500">Saurabh</span> All Rights Reserved, Inc.
        </div>
    </footer>
  );
};

export default Footer;
