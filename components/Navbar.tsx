"use client";
import { IBM, poppins } from "@/app/fonts";
import Icons from "./Icons";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navitem = [
    {
      item: "Home",
      href: "/",
    },
    {
      item: "Why Me",
      href: "#whyme",
    },
    {
      item: "Testimonials",
      href: "#testimonials",
    },
    {
      item: "Recent work",
      href: "#recentWork",
    },
    {
      item: "Get In Touch",
      href: "#getintouch",
    },
  ];

  return (
    <nav className="px-4 py-2 md:px-16 md:py-4 flex items-center justify-between bg-[#1B1B1B] w-full mx-auto">
      <div className="flex justify-start">
        <Link href="/">
          <p
            className={`${poppins.className} font-semibold text-lg md:text-2xl text-orange-500`}
          >
            Saurabh
          </p>
        </Link>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 justify-center">
        <ul className="flex space-x-4 lg:space-x-8 text-navText text-sm lg:text-base">
          {navitem.map((it, index) => (
            <li className={`${IBM.className}`} key={index}>
              <Link href={it.href}>{it.item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex justify-end">
        <Icons />
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Side menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1B1B1B] text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button */}
        <button
          className="text-white text-2xl p-4"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>

        <ul className="flex flex-col space-y-6 mt-10 px-6 text-lg">
          {navitem.map((it, index) => (
            <li
              key={index}
              className={`${IBM.className} border-b-2 border-gray-300 hover:border-black transition`}
            >
              <Link href={it.href} onClick={() => setMenuOpen(false)}>
                {it.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
