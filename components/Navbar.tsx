"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Manage", href: "/manage" },
  { text: "Items", href: "/items" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="cursor-pointer">
              <img
                className="h-10 w-auto rounded-full"
                src="/logo.jpg"
                alt="Logo"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex space-x-8 justify-center items-center">
              {navLinks.map((link) => (
                <a
                  className="text-gray-500 relative text-xl transition-all ease-in-out duration-250 hover:after:block hover:after:w-full hover:after:h-1 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:bg-gradient-to-r from-pink-300 to-red-300 hover:after:opacity-100 hover:after:transform hover:after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left"
                  key={link.text}
                  href={link.href}
                >
                  {link.text}
                </a>
              ))}
              {isSignedIn ? (
                <>
                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <>
                  <SignInButton>
                    <button className="flex justify-center items-center gap-2">
                      <FiLogIn /> Sign In
                    </button>
                  </SignInButton>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center gap-4">
            {isOpen &&
              (isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton>
                  <button className="flex justify-center items-center gap-2">
                    <FiLogIn /> Sign In
                  </button>
                </SignInButton>
              ))}
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 w-full bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center text-center">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  className="text-gray-500 hover:text-gray-900"
                  key={link.text}
                  href={link.href}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
