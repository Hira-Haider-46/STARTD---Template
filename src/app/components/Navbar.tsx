"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 px-10 md:px-20 bg-white shadow-md fixed w-full z-10">
      <Image src={logo} alt="Logo" width={40} height={40} />

      <div className="hidden md:flex space-x-6">
        <Link
          href="/features"
          className="font-semibold text-gray-500 hover:text-blue-500"
        >
          Features
        </Link>
        <Link
          href="/testimonials"
          className="font-semibold text-gray-500 hover:text-blue-500"
        >
          Testimonials
        </Link>
        <Link
          href="/pricing"
          className="font-semibold text-gray-500 hover:text-blue-500"
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="font-semibold text-gray-500 hover:text-blue-500"
        >
          Blog
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 items-center">
        <Link
          href="/login"
          className="font-semibold text-gray-500 hover:text-blue-500"
        >
          Log in
        </Link>
        <Link
          href="/get-started"
          className="font-semibold bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get started
        </Link>
      </div>

      <button
        className="md:hidden flex items-center text-gray-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 px-6">
          <Link
            href="/features"
            className="font-semibold text-gray-500 hover:text-blue-500"
          >
            Features
          </Link>
          <Link
            href="/testimonials"
            className="font-semibold text-gray-500 hover:text-blue-500"
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className="font-semibold text-gray-500 hover:text-blue-500"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="font-semibold text-gray-500 hover:text-blue-500"
          >
            Blog
          </Link>
          <div className="flex flex-col space-y-4 mt-6">
            <Link
              href="/login"
              className="font-semibold text-gray-500 hover:text-blue-500"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;