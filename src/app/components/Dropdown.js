"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="text-white p-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg flex justify-between items-center gap-4 "
      >
        Authentication <IoIosArrowDropdown />
      </button>
      {isOpen && (
        <div className="rounded-lg shadow-sm mt-5 border border-gray-300 transition-all">
          <ul className="py-2 text-sm text-gray-700 ">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Sign In </Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Reset Password</Link>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Two Step Verification</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
