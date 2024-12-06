"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 px-10 md:px-20 bg-white w-full">
      <Link href="/" className="cursor-pointer"><Image src={logo} alt="Logo" width={40} height={40} /></Link>

      <div className="hidden md:flex space-x-6">
        <Link
          href="/features"
          className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
        >
          Features
        </Link>
        <Link
          href="/testimonials"
          className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
        >
          Testimonials
        </Link>
        <Link
          href="/pricing"
          className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
        >
          Blog
        </Link>
      </div>

      <div className="hidden md:flex space-x-4 items-center">
        <Link
          href="/login"
          className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
        >
          Log in
        </Link>
        <Link
          href="/login"
          className="font-semibold bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
            className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
          >
            Features
          </Link>
          <Link
            href="/testimonials"
            className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
          >
            Blog
          </Link>
          <div className="flex flex-col space-y-4 mt-6">
            <Link
              href="/login"
              className="font-semibold text-gray-500 hover:text-blue-500 text-lg"
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