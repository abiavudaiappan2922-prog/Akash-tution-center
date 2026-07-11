"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-700">
          AKASH TUTION CENTER
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#classes"
            className="hover:text-blue-600 transition"
          >
            Classes
          </a>

          <a
            href="#fees"
            className="hover:text-blue-600 transition"
          >
            Fees
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

        </div>

        {/* BUTTONS */}
        <div className="hidden md:flex gap-4">

          
         

          <a
            href="#admission"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Apply Now
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 text-gray-700 font-medium shadow-lg">

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#classes"
            className="hover:text-blue-600 transition"
          >
            Classes
          </a>

          <a
            href="#fees"
            className="hover:text-blue-600 transition"
          >
            Fees
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

          

         
          <a
            href="#admission"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center hover:bg-blue-700 transition font-semibold"
          >
            Apply Now
          </a>

        </div>

      )}

    </nav>

  );

}