"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0B1F33]/90 border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Website Name */}

        <Link href="/" className="flex flex-col">

          <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
            AKASH
          </h1>

          <p className="text-white text-sm tracking-[4px]">
            TUITION CENTRE
          </p>

        </Link>

        {/* Menu */}

        <div className="hidden md:flex gap-10 text-white font-semibold">

          <a href="#home" className="hover:text-yellow-400 duration-300">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 duration-300">
            About
          </a>

          <a href="#classes" className="hover:text-yellow-400 duration-300">
            Classes
          </a>

          <a href="#fees" className="hover:text-yellow-400 duration-300">
            Fees
          </a>

          <a href="#contact" className="hover:text-yellow-400 duration-300">
            Contact
          </a>

        </div>

        {/* Apply Button */}

        <a
          href="#admission"
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0B1F33] px-7 py-3 rounded-full font-bold hover:scale-105 duration-300 shadow-xl"
        >
          Apply Now
        </a>

      </div>

    </nav>
  );
}