import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    { icon: <FaGithub />, href: "https://github.com/AJais980/iemhacks_AceXcel-Codex" },
    { icon: <FaInstagram />, href: "https://instagram.com/im.amanjaiswal" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/beingaman/" },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full bottom-0">
      <div className="container mx-auto px-4 py-8 md:flex md:justify-between md:items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4 mb-4 md:mb-0">
            <img
              className="w-full h-full object-cover"
              src="/logo.jpg"
              alt="Logo"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Food For All</h2>
            <p className="text-sm text-gray-300">Food Waste Benefits No One</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Food For All. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
