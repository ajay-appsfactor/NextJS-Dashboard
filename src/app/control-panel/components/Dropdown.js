"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className="w-full text-white px-3 py-2 hover:bg-gray-800  font-semibold rounded-lg flex justify-between items-center gap-4"
      >
        Authentication
        <FaAngleDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 mt-1 w-full rounded-lg shadow-lg  text-white z-50"
        >
          <ul className="py-2 text-sm">
            {[
              { label: "Sign In", href: "/" },
              { label: "Sign Up", href: "/" },
              { label: "Reset Password", href: "/" },
              { label: "Two Step Verification", href: "/" },
            ].map(({ label, href }) => (
              <li key={label} role="none">
                <Link
                  href={href}
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
